import "./ChangeHistory.css";

const ChangeHistory = () => {
  return (
    <div className="history-wrap">
      {[1, 2, 3, 4].map((el) => (
        <div className="history-thread" key={el}>
          <div className="his-time">14 hours ago</div>
          <div className="his-detail">
            Actions - Secure deployment rollouts to protected environments based
            on select tag patterns
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChangeHistory;
