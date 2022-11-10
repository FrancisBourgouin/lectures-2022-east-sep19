import CommitListItem from "./CommitListItem";

export default function CommitList(props) {
  const parsedCommits =
    Array.isArray(props.commits) &&
    props.commits.map((commit) => (
      <CommitListItem
        key={commit.sha}
        url={commit.html_url}
        message={commit.commit.message}
        date={commit.commit.author.date}
        name={commit.commit.author.name}
      />
    ));
  return <div>{parsedCommits}</div>;
}
