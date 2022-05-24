import  {Router} from 'express'
import { PreguntasRoutes } from "./PreguntasRoutes.js";
import { ImagenRoutes } from "./ImagenRoutes.js";
/**
* Welcome to MainRouter.js Class
* @author Vicente Aguilera Pérez <vicengui1018@gmail.com>
* @class
* Contains all the routes of API
*/
export class MainRouter
{
    /**
     * @constructor
     * @public 
     * Default constructor
     */
    constructor()
    {
        this.router = Router();
        new PreguntasRoutes(this.router);
        new ImagenRoutes(this.router);
    }
    /**
     * This method return the Router object
     * @public 
     * @instance
     * @returns the router object
     */
    getRouter()
    {
        return this.router;
    }
}