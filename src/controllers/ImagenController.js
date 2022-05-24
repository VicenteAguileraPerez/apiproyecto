import tf from "@tensorflow/tfjs";
import jpeg from 'jpeg-js';
import { modeloImagen } from "../helpers/LoadModels.js";
/**
 * Welcome to ImagenController.js Class
 * @author Vicente Aguilera Pérez <vicengui1018@gmail.com>
 * @class
 * Contains all method to access information of dmv
 */
export class ImagenController 
{
  /**
   * @constructor
   * @public
   * Default constructor
   */
  constructor() {}

  /**
   * Post information of image
   * @public
   * @instance
   * @param req  contains information of request.
   * @param res  contains information of response.
   * @returns
   * response 404 with JSON Object {"message": "Not found Data (404)"} if response has not found nothing.
   * response 200 with JSON Object with information of image classification
   * response 500 with JSON Object { "message": "Internal Error "} if exists a issue into API
   */
  getResult(req, res) 
  {
            
    let image = req.file.buffer;
    let data = jpeg.decode(image, {useTArray: true});//req.file.buffer;
    let tfimage = tf.browser.fromPixels(data);
    //console.log(tf.tensor3d(tfimage).reshape())
    let tfimage_s  = tf.image.resizeBilinear(tfimage, [128, 128]).div(tf.scalar(255))
    let t4d= tfimage_s.as4D(1,128,128,3)
    //console.log(t4d.bufferSync())
    let prediccion = modeloImagen.predict(t4d).dataSync();
    if (prediccion > 0.5)
    {
        res.status(200).json({
            status: "maligno"
        })
    }    
    else {
        res.status(200).json({
            status: "benigno"
        })
    }
  }
}
