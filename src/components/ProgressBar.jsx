function ProgressBar({ completed, total, percentage }) {
  return (
    <div className="progress-wrapper">
      <div className="progress-container">
        <div className="progress-info">
          <span className="progress-text">Progress</span>
          <span className="progress-percentage">{percentage}%</span>
        </div>
        
        <div className="progress-bar-container">
          <div className="progress-bar-background">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${percentage}%` }}
            >
              <div className="progress-bar-shine"></div>
            </div>
          </div>
        </div>
        
        <div className="progress-stats">
          <span className="progress-stats-text">
            {completed} of {total} tasks completed
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;