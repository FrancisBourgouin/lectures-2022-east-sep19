// const plant = {
//   id:""
//   name: "name of plant",
//   type: "type of plant",
//   lastWatered: "date string",
//   wateringInterval: 10,
// };

export default function PlantListItem(props) {
  const wateredDate = new Date(props.lastWatered);
  const todayDate = new Date();

  const timeDiff = todayDate.getTime() - wateredDate.getTime();
  const timeDiffInSeconds = timeDiff / 1000;
  const timeDiffInDays = timeDiffInSeconds / 86400;

  const color = timeDiffInDays < props.wateringInterval ? "green" : "red";

  const styling = {
    border: "0.3em solid black",
    borderColor: color,
    margin: "1em 0",
  };
  return (
    <article style={styling}>
      <h1>
        {props.name} / {props.type}
      </h1>
      <p>Last watered on: {props.lastWatered}</p>
    </article>
  );
}
