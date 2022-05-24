import express, { Router }  from 'express';
import morgan from 'morgan';
import {loadModelPreguntas,loadModelImagen} from './helpers/LoadModels.js'
import {MainRouter} from './routes/MainRouter.js'
/**
* Welcome to Server.js Class
* @author Vicente Aguilera Pérez <vicengui1018@gmail.com>
* @class
* Contais the server of the API
*/
export class Server
{
  /**
     * @constructor
     * @public 
     * Default constructor and call all its methods
     */
    constructor()
    {
        loadModelPreguntas();
        loadModelImagen();
        this.app = express();
        this.router = Router();
        this.configs();
        this.middlewares();
        this.routes();
        this.listen();
       
        
    }
    /**
     * This method has all configurations of server
     * @public 
     * @instance
     */
    configs(){
      this.app.set('port', process.env.PORT || 3000);
      this.app.set('json spaces', 2);
      // Set View's
      //this.app.set('views', '/public/views');
      //this.app.set('view engine', 'ejs');
      
    }
    /**
     * This method has all middlewares of server
     * @public 
     * @instance
     */
    middlewares(){
      this.app.use(morgan('dev'));
      this.app.use(express.urlencoded({extended:true}));
      this.app.use(express.json());
    }

    /**
     * This method has all routes of server
     * @public 
     * @instance
     */
    routes()
    {
      this.app.use("/v1/api/cancerpiel",new MainRouter().getRouter());
    }
    /**
     * This method has of server activated
     * @public 
     * @instance
     */
    listen()
    {

      this.app.listen(this.app.get('port'),()=>{
        console.log(`Server listening on port ${this.app.get('port')}`);
      });
    }
}
//new Server();