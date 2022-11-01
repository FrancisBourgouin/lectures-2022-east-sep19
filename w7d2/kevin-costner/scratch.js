const wateredDate = new Date("2022-10-25");
const todayDate = new Date();

const timeDiff = todayDate.getTime() - wateredDate.getTime();
const timeDiffInSeconds = timeDiff / 1000;
const timeDiffInDays = timeDiffInSeconds / 86400;

console.log(timeDiffInDays);
