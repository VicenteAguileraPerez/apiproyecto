import tf from "@tensorflow/tfjs";
import { modeloPreguntas } from "../helpers/LoadModels.js";
/**
 * Welcome to PreguntasController.js Class
 * @author Vicente Aguilera Pérez <vicengui1018@gmail.com>
 * @class
 * Contains all method to access information of dmv
 */
export class PreguntasController {
  /**
   * @constructor
   * @public
   * Default constructor
   */
  constructor() {}

  /**
   * Get information of preguntas
   * @public
   * @instance
   * @param req  contains information of request.
   * @param res  contains information of response.
   * @returns
   * response 404 with JSON Object {"message": "Not found Data (404)"} if response has not found nothing.
   * response 200 with JSON Object with information of preguntas
   * response 500 with JSON Object { "message": "Internal Error "} if exists a issue into API
   */
  getResult(req, res) 
  {
    let { respuestas } = req.query;
  
    if (modeloPreguntas == null) 
    {
      res.status(500).json({"Error": "Model was not loaded",});
    }
    else 
    {
      respuestas = respuestas.split(',').map(function(item) {
         return parseInt(item);
      });//[1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1]
      console.log(respuestas);
      let tensor = tf.tensor2d([respuestas]);
      let prediccion = modeloPreguntas.predict(tensor).dataSync();
      res.status(200).json({"Result": Math.round(prediccion)});
    }
  }
}
