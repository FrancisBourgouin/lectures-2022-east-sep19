import useForm from "../hooks/useForm";

export default function RepoForm(props) {
  const initialValues = {
    repo: "",
    owner: "",
  };
  const { formData, handleChange, handleSubmit } = useForm(initialValues, props.onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="owner" value={formData.owner} onChange={handleChange} />
      <input type="text" name="repo" value={formData.repo} onChange={handleChange} />
      <button>Fetch commits</button>
    </form>
  );
}
