const UserRecord = ({ avatar, name, numAsked, numAnswered }) => {
  return (
    <div className="user-record">
      <div className="user-info">
        <img src={avatar} alt={`avatar of ${name}`} className="avatar-small"/>
        <span className="user-name">{name}</span>
      </div>
      <div className="questions-record">
        <p>Asks: {numAsked}</p>
        <p>Answers: {numAnswered}</p>
      </div>
    </div>
  );
};

export default UserRecord;
