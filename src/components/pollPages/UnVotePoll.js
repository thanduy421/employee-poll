const UnVotePoll = ({ handleClick, options }) => {
  const { option1, option2 } = options;

  return (
    <div className="poll-info">
    <div>
      <button onClick={handleClick} value="optionOne" className="btn">
        {option1.text}
      </button>
    </div>
    <div>
      <button onClick={handleClick} value="optionTwo" className="btn">
        {option2.text}
      </button>
    </div>
    </div>
  );
};

export default UnVotePoll;
