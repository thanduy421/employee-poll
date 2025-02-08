import { connect } from "react-redux";
import { useState } from "react";
import Question from "./Question";
import { formatQuestions } from "../utils/helpers";

const Dashboard = (props) => {
  const [active, setActive] = useState(true);

  const handleClick = () => {
    setActive(!active);
  };

  const questionArray = formatQuestions(props.questions, props.authedUser);

  const displayQuestions = questionArray.filter(
    (question) => question.isAnswered !== active
  );

  return (
    <main>
    <div className="content-container">
      <h1 data-testid="test-db-heading">Dashboard</h1>
      <button disabled={active} onClick={handleClick} className={active ? "btn btn-right" : "btn btn-right btn-unactive"}>
        unVote
      </button>
      <button disabled={!active} onClick={handleClick} className={!active ? "btn btn-left" : "btn btn-left btn-unactive"}>
        Voted
      </button>
      <h3>{active ? "unAnswered" : "answered"} questions</h3>
      <ul>
        {displayQuestions.map((question) => (
          <li key={question.id}>
            <Question {...question} />
          </li>
        ))}
      </ul>
    </div>
</main>
  );
};

const mapStateToProps = ({ authedUser, questions }) => ({
  authedUser,
  questions,
});

export default connect(mapStateToProps)(Dashboard);
