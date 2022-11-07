const getSubjectsFromStatementsv1 = (statements) => {
  const listOfSubjects = [];
  statements.forEach((statement) => {
    if (!listOfSubjects.includes(statement.subject)) {
      listOfSubjects.push(statement.subject);
    }
  });

  return listOfSubjects;
};

export const getSubjectsFromStatements = (statements) => {
  const listOfSubjects = new Set();
  statements.forEach((statement) => {
    listOfSubjects.add(statement.subject);
  });

  return Array.from(listOfSubjects);
};

export const getContentForSubject = (statements, subject) => {
  const filteredStatements = statements.filter(
    (statement) => statement.subject === subject
  );
  const cleanedStatements = filteredStatements.map(({ id, content }) => ({
    id,
    content,
  }));

  return cleanedStatements;
};
