import { connect } from "react-redux";
import { handleLogin } from "../actions/shared";

const TITLE = "Hỏi xoáy đáp xoay";

const Login = (props) => {
  const onLogin = (e) => {
    props.dispatch(handleLogin(e.target.value));
  };

  return (
    <main className="login">
    <div className="content-container">
      <h1 className="title">{TITLE}</h1>
        <img src="../../images/welcome.jpg" alt="welcome" className="welcome-img"/>
        <div className="login-bar">
        <h5>Sign in as</h5>
        <select data-testid="test-select" onChange={onLogin}>
          <option value={null}>choose here</option>
          {props.userArray.map((user) => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
        </select>
    </div>
    </div>
</main>
  );
};

const mapStateToProps = ({ users }) => {
  const userArray = Object.values(users)
  .filter((user) => user.isActive === true)
  .map((user) => ({
    id: user.id,
    name: user.name,
  }));

  return {
    userArray,
  };
};

export default connect(mapStateToProps)(Login);
