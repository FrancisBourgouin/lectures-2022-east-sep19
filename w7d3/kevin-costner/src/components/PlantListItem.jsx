// PlantListItem (state: no, props:id,name,lastWateredDate,wateringInterval)
// MISSING THE ACTION updateWateredDate

const isPlantWateredProperly = (date, interval) => {
  const wateredDate = new Date(date);
  const todayDate = new Date();

  const timeDiffInMs = todayDate.getTime() - wateredDate.getTime();
  const timeDiffInS = timeDiffInMs / 1000;
  const timeDiffInDay = timeDiffInS / 86400;

  return timeDiffInDay < interval;
};

export default function PlantListItem(props) {
  const { name, lastWateredDate, updateWateredDate, wateringInterval, id } = props;

  const style = {
    border: "0.25em solid black",
    margin: "0.25em",
    borderColor: isPlantWateredProperly(lastWateredDate, wateringInterval)
      ? "green"
      : "red",
  };

  // console.log(document.querySelector("section"));

  return (
    <article style={style}>
      <h1>{name}</h1>
      <h2>Last watered on: {lastWateredDate}</h2>
      <button onClick={() => updateWateredDate(id)}>WATER ME</button>
    </article>
  );
}
