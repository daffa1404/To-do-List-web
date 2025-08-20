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
    <div className="delete-all-container">
      <button
        type="button"
        className="delete-all-btn"
        onClick={handleClick}
        aria-label={getButtonText()}
        title={getButtonText()}
      >
        {getButtonText()}
      </button>
    </div>
  );
}

export default DeleteAllButton;