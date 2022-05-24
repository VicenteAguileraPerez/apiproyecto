//import { ImagenController } from "../controllers/ImagenController.js";
import multer from "multer";
import { ImagenController } from "../controllers/ImagenController.js";
/**
* Welcome to PreguntasRoutes.js Class
* @author Vicente Aguilera Pérez <vicengui1018@gmail.com>
* @class
* Contains all the routes to access information of PreguntasRoutes
*/
export class ImagenRoutes
{
    /**
     * @constructor
     * @public 
     * Default constructor
     * @param router is a object that contains all the routes of the API  
     */
    constructor(router)
    {
        this.imagenController = new ImagenController();
        this.routes(router);
    }
    /**
     * This method assign all routes of imagen to router object
     * @public 
     * @instance
     * @param router is a object that contains all the routes of the API
     */
    routes(router)
    {
        let processFile = multer({
            storage: multer.memoryStorage(),
            limits: { fileSize: 2 * 1024 * 1024},
          });
        router.post('/imagen',processFile.single("img"), (req, res) => this.imagenController.getResult(req,res));  
    }
}