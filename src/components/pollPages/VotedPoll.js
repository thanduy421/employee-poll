const VotedPoll = ({ options, authedUser }) => {
  const { option1, option2 } = options;
  const voteTotal = option1.votes.length + option2.votes.length;
  const isSelectOne = option1.votes.includes(authedUser);

  return (
    <div className="poll-info">
      <PollInfo 
        option={option1} 
        voteTotal={voteTotal} 
        isSelect={isSelectOne} 
      />
      <PollInfo
        option={option2}
        voteTotal={voteTotal}
        isSelect={!isSelectOne}
      />
    </div>
  );
};

const PollInfo = ({ option, voteTotal, isSelect }) => {
  const voteCount = option.votes.length;

  return (
    <div>
      <button className={isSelect ? "btn-disabled btn-active" : "btn-disabled btn-unactive"} disabled={true}>{option.text}</button>
      <p>
        Number of Votes: {voteCount} ({Math.round((voteCount / voteTotal) * 100)}%)
      </p>
    </div>
  );
};

export default VotedPoll;
