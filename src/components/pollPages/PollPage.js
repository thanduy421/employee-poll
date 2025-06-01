import { connect } from "react-redux";
import { answeredCheck, withParams } from "../../utils/helpers";
import VotedPoll from "./VotedPoll";
import UnVotePoll from "./UnVotePoll";
import { handleVoteQuestion } from "../../actions/questions";
import { Link } from "react-router-dom";
import ErrorPage from "../ErrorPage";

const TITLE = "bạn thích điều nào hơn?"

const PollPage = (props) => {
  const { question_id, authedUser, questions, users } = props;

  const question = questions[question_id];
  if (!question) {
    return <ErrorPage />;
  }
  const user = users[question.author];
  const isAnswered = answeredCheck(question, authedUser);

  const handleClick = (e) => {
    e.preventDefault();

    props.dispatch(
      handleVoteQuestion({
        authedUser,
        answer: e.target.value,
        qid: question.id,
      })
    );
  };

  const options = {
    option1: question.optionOne,
    option2: question.optionTwo,
  };

  return (
    <main>
    <Link to={`/questions/${question.id}`} className="poll-container content-container">
      <div className="user-info">
        <span className="user-name">Posted by {user.name}</span>
        <img
          src={user.avatarURL}
          alt={`avatar of ${user.name}`}
          className="avatar-small"
        />
      </div>
      <h3>{TITLE}</h3>
      <div className="poll-options">
        {isAnswered ? (
          <VotedPoll options={options} authedUser={authedUser} />
        ) : (
          <UnVotePoll options={options} handleClick={handleClick} />
        )}
      </div>
    </Link>
</main>
  );
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { question_id } = props.match.params;

  return {
    question_id,
    authedUser,
    questions,
    users,
  };
};

export default withParams(connect(mapStateToProps)(PollPage));
