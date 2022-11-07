import { useState } from "react";

export default function StatementForm(props) {
  const initialValues = {
    subject: "",
    content: "",
  };
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { value, name } = event.target;

    const updatedFormData = { ...formData };

    updatedFormData[name] = value;

    setFormData(updatedFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(formData);

    setFormData(initialValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Enter the subject"
      />
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="Enter the content"
      />
      <button>Add to glossary</button>
    </form>
  );
}
