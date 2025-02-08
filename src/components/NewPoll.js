import { useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

const NewPoll = (props) => {
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const navigate = useNavigate();

  const handleChange1 = (e) => {
    const newText = e.target.value;

    setOption1(newText);
  };

  const handleChange2 = (e) => {
    const newText = e.target.value;

    setOption2(newText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.dispatch(handleAddQuestion(option1, option2));

    setOption1("");
    setOption2("");

    navigate("/");
  };

  const isDiabled = option1 === "" || option2 === "";

  return (
    <main>
    <div className="form">
      <h1>Post a new poll</h1>
      <form onSubmit={handleSubmit}>
        <h3>Would you rather</h3>
        <input
          data-testid="test-option1"
          value={option1}
          onChange={handleChange1}
          type="text"
          size="45"
          placeholder="Enter your option 1 here"
          className="form-input"
        />
        <input
          data-testid="test-option2"
          value={option2}
          onChange={handleChange2}
          type="text"
          size="45"
          placeholder="Enter your option 2 here"
          className="form-input"
        />
        <button className={isDiabled ? "btn-unactive" : "btn"} type="submit" disabled={isDiabled} data-testid="test-submit-btn">
          Submit
        </button>
      </form>
    </div>
    </main>
  );
};

export default connect()(NewPoll);
