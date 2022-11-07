import {
  getContentForSubject,
  getSubjectsFromStatements,
} from "../helpers/statementHelpers";
import StatementList from "./StatementList";

export default function Statements(props) {
  const { statements } = props;

  const subjects = getSubjectsFromStatements(statements);

  const parsedStatements = subjects.map((subject) => {
    const content = getContentForSubject(statements, subject);

    return <StatementList statements={content} subject={subject} key={subject} />;
  });
  return (
    <section>
      <h2>Statements</h2>
      {parsedStatements}
    </section>
  );
}
