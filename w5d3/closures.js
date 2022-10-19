const countdownGenerator = (initialValue) => {
  let countdown = initialValue;

  const showCountdown = () => {
    console.log(countdown);
  };

  const decrementCoutdown = () => {
    countdown--;
  };

  return { showCountdown, decrementCoutdown };
};

const first = countdownGenerator(10);

first.showCountdown();
first.decrementCoutdown();
first.showCountdown();

const second = countdownGenerator(5);

second.showCountdown();
second.decrementCoutdown();
second.showCountdown();
