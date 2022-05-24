import { PreguntasController } from "../controllers/PreguntasController.js";

/**
* Welcome to PreguntasRoutes.js Class
* @author Vicente Aguilera Pérez <vicengui1018@gmail.com>
* @class
* Contains all the routes to access information of PreguntasRoutes
*/
export class PreguntasRoutes
{
    /**
     * @constructor
     * @public 
     * Default constructor
     * @param router is a object that contains all the routes of the API  
     */
    constructor(router)
    {
        this.preguntasController = new PreguntasController();
        this.routes(router);
    }
    /**
     * This method assign all routes of dmv to router object
     * @public 
     * @instance
     * @param router is a object that contains all the routes of the API
     */
    routes(router)
    {
        router.get('/preguntas', (req, res) => this.preguntasController.getResult(req,res));
       
    }
}