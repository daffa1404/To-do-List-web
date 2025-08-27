function DeleteAllButton({ onDeleteAll, hasTasks, currentFilter, tasksCount }) {
  // Don't show button if no tasks available for current filter
  if (!hasTasks) {
    return null;
  }

  const handleClick = () => {
    onDeleteAll();
  };

  // Get context-aware button text based on current filter
  const getButtonText = () => {
    switch (currentFilter) {
      case "active":
        return tasksCount === 1 
          ? "Delete Active Task" 
          : `Delete Active Tasks (${tasksCount})`;
      case "completed":
        return tasksCount === 1 
          ? "Delete Completed Task" 
          : `Delete Completed Tasks (${tasksCount})`;
      default:
        return tasksCount === 1 
          ? "Delete Task" 
          : `Delete All Tasks (${tasksCount})`;
    }
  };

  return (
    <div className="delete-all-floating">
      <button
        type="button"
        className="delete-all-floating-btn"
        onClick={handleClick}
        aria-label={getButtonText()}
        title={getButtonText()}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="3,6 5,6 21,6" />
          <path d="m19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
        </svg>
        <span className="delete-text">{getButtonText()}</span>
      </button>
    </div>
  );
}

export default DeleteAllButton;