export default function Button(props) {
  const setCount = props.setCount;
  const count = props.count;

  return <button onClick={() => setCount(count + 1)}>Increment by one</button>;
}
