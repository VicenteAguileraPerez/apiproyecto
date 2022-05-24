import * as tfn from "@tensorflow/tfjs-node";
import * as tf from "@tensorflow/tfjs";
let modeloPreguntas =null;
let loadModelPreguntas= async function loadModelPreguntas()
{
    const handler = tfn.io.fileSystem("./src/model_ml/modelopreg/model.json");
    const model = await tf.loadLayersModel(handler);
    console.log("Model preguntas loaded")
    modeloPreguntas=model;
}

let modeloImagen =null;

let loadModelImagen= async function loadModelImagen()
{
    const handler = tfn.io.fileSystem("./src/model_ml/modeloimagen/model8.json");
    const model = await tf.loadLayersModel(handler);
    console.log("Model imagen loaded")
    modeloImagen=model;
}
export {
    modeloImagen,
    loadModelImagen,
    modeloPreguntas,
    loadModelPreguntas,
}