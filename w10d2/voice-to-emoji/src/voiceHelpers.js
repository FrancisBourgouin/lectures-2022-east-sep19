import "@tensorflow/tfjs";
import * as speechCommands from "@tensorflow-models/speech-commands";
import { create } from "@tensorflow-models/speech-commands";

const createModel = async () => {
  const URL = "http://localhost:3000/model/";
  const checkpointURL = URL + "model.json"; // model topology
  const metadataURL = URL + "metadata.json"; // model metadata

  // const recognizer = create(
  const recognizer = speechCommands.create(
    "BROWSER_FFT", // fourier transform type, not useful to change
    undefined, // speech commands vocabulary feature, not useful for your models
    checkpointURL,
    metadataURL
  );

  // return recognizer.ensureModelLoaded().then(() => recognizer)
  // check that model and metadata are loaded via HTTPS requests.
  await recognizer.ensureModelLoaded();

  return recognizer;
};

export const listen = async (options, callback) => {
  const recognizer = await createModel();
  const classLabels = recognizer.wordLabels(); // get class labels
  console.log(classLabels);
  recognizer.listen(callback, options);

  // Stop the recognition in 5 seconds.
  // setTimeout(() => recognizer.stopListening(), 5000);
};

export const findBiggestIndex = (rawScores) => {
  const scores = Array.from(rawScores); // probability of prediction for each class
  // render the probability scores per class

  const biggestValue = Math.max(...scores);
  const biggestIndex = scores.indexOf(biggestValue);

  return biggestIndex;
};
