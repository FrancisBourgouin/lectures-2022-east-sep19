const sampleLabels = [
  "Background Noise",
  "Eclipse",
  "Happy",
  "Montréal",
  "Subtle",
  "Toaster",
];
const sampleResult = [
  0.003854461945593357, 0.00030781913665123284, 0.002050393959507346, 0.9683037996292114,
  0.020943591371178627, 0.00453980453312397,
];

// Find the index of the biggest value

// let biggestIndex = 0;
// let biggestValue = sampleResult[0];
// for(const index in sampleResult){
//   if(biggestValue < sampleResult[index]){
//     biggestValue = sampleResult[index]
//     biggestIndex = index
//   }
// }

const biggestValue = Math.max(...sampleResult);
const biggestIndex = sampleResult.indexOf(biggestValue);
const biggestLabel = sampleLabels[biggestIndex];
