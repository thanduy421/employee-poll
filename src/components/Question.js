import { formatDate } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

const Question = ({ id, isAnswered, timestamp, author }) => {
  const dateTime = formatDate(timestamp);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/questions/${id}`);
  };

  return (
    <div className="question">
      <p>
        {dateTime} posted by {author}
      </p>
      <button onClick={handleClick} className="btn btn-detail">
        {isAnswered ? "view" : "answer"}
      </button>
    </div>
  );
};

export default Question;
