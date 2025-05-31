import { useParams } from "react-router-dom";

export const withParams = (Component) => {
  const ComponentWithParamsProp = (props) => {
    let params = useParams();
    return <Component {...props} match={{ params }} />;
  };

  return ComponentWithParamsProp;
};

export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: true };

  const time = d.toLocaleTimeString("en-US", timeOptions);
  const date = d.toLocaleDateString();

  return `${time} | ${date}`;
}

export function answeredCheck(question, authedUser) {
  return (
    question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser)
  );
}

export function formatQuestions(questions, authedUser) {
  const questionArray = Object.values(questions).map((question) => ({
    id: question.id,
    isAnswered: answeredCheck(question, authedUser),
    timestamp: question.timestamp,
    author: question.author,
    isActive: question.isActive,
  }));

  return questionArray.sort((a, b) => b.timestamp - a.timestamp);
}
