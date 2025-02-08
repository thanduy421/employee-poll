import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogin } from "../actions/shared";

const Nav = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    props.dispatch(handleLogin(null));
    navigate("/");
  };

  const { avatar, userName } = props;

  return (
    <div className="nav-container">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">New Poll</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
        </ul>
      </nav>
      <div className="user-login">
        <img src={avatar} alt={`avatar of ${userName}`} className="avatar-small"/>
        <span className="user-name">{userName}</span>
        <button data-testid="test-logout" onClick={handleClick} className="btn">
          Log out
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  const user = users[authedUser];
  return {
    avatar: user.avatarURL,
    userName: user.name,
  };
};

export default connect(mapStateToProps)(Nav);
