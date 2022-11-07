import StatementListItem from "./StatementListItem";

export default function StatementList(props) {
  const { statements, subject } = props;
  const isArray = Array.isArray(statements);

  const parsedStatements =
    isArray &&
    statements.map((statement) => (
      <StatementListItem key={statement.id} {...statement} />
    ));

  // console.log(parsedStatements);

  return (
    <section>
      <h2>{subject}</h2>
      {!isArray && <p>WHY NO STATEMENTS :(</p>}
      <ul>{parsedStatements}</ul>
    </section>
  );
}
