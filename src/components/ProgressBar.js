const ProgressBar = ({ title, percent, className }) => (
  <div className="progress-bar">
    <p className="prog-title">{title}</p>
    <div className="progress-con">
      <p className="prog-text">{percent}%</p>
      <div className="progress">
        <span className={className}></span>
      </div>
    </div>
  </div>
);
export default ProgressBar;
