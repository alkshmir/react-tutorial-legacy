import "./UserForm.css";

type Props = {
  users: { id: string; name: string; age: number }[];
};

const UserForm = () => {
  return (
    <div>
      <div className="content-body">
        <form className="content-form">
          <label>Name:</label>
          <input></input>
          <label>Age:</label>
          <input></input>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
