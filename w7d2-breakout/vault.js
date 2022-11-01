const someFunction = () => {
  const someValue = { current: 0 };

  const deposit = (amount) => {
    someValue.current += amount;
  };

  return { amount: someValue, deposit };
};

const bank = someFunction();

bank.deposit(100);

console.log(bank);

function App() {
  const [amount, setAmount] = useState(0);

  const deposit = (depositAmount) => setAmount(amount + depositAmount);

  return <Button deposit={deposit} />;
}

const functionWithCB = (list, callback) => {
  for (const item of list) {
    callback(item, list);
  }
};

functionWithCB([1, 2, 3], (item, list) => console.log(item, list));

{
  /* <DayListItem setDay={(day) => console.log(day)} />
<DayListItem setDay={(day) => console.log(day)} />
<DayListItem setDay={(day) => console.log(day)} />
<DayListItem setDay={props.setDay} />

const setDay = day => setDay(day) */
}

[1, 2, 3, 4].forEach();
