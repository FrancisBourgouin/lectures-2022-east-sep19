// const url = commitList[0].html_url
// const message = commitList[0].commit.message
// const date = commitList[0].commit.author.date
// const name = commitList[0].commit.author.name
export default function CommitListItem(props) {
  const { url, message, date, name } = props;

  return (
    <article>
      <h1>{message}</h1>
      <h2>
        On: {date} by: {name}
      </h2>
      <a href={url}>Link</a>
    </article>
  );
}
