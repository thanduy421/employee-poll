import { connect } from "react-redux";
import UserRecord from "./UserRecord";

const Leaderboard = (props) => {
  return (
    <main>
    <div className="leaderboard content-container">
      <h3>Leader Board</h3>
      <ul>
        {props.sortedUsers.map((user) => (
          <li key={user.id}>
            <UserRecord {...user} />
          </li>
        ))}
      </ul>
    </div>
 </main>
  );
};

const mapStateToProps = ({ users, authedUser }) => {
  const usersSummary = Object.values(users).map((user) => {
    const questionAsked = user.questions.length;
    const questionAnswered = Object.keys(user.answers).length;

    return {
      id: user.id,
      avatar: user.avatarURL,
      name: user.name,
      numAsked: questionAsked,
      numAnswered: questionAnswered,
      numTotal: questionAsked + questionAnswered,
    };
  });

  return {
    sortedUsers: usersSummary.sort((a, b) => b.numTotal - a.numTotal),
    authedUser,
  };
};

export default connect(mapStateToProps)(Leaderboard);
