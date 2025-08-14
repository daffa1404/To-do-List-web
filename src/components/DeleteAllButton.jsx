function DeleteAllButton({ onDeleteAll, hasActiveTasks, hasTasks }) {
  // Jangan tampilkan tombol jika tidak ada task sama sekali
  if (!hasTasks) {
    return null;
  }

  const handleClick = () => {
    if (hasActiveTasks) {
      onDeleteAll();
    }
  };

  return (
    <div className="delete-all-container">
      <button
        type="button"
        className={`delete-all-btn ${!hasActiveTasks ? 'disabled' : ''}`}
        onClick={handleClick}
        disabled={!hasActiveTasks}
        aria-label={hasActiveTasks ? "Delete all active tasks" : "No active tasks to delete"}
      >
        Delete all
      </button>
    </div>
  );
}

export default DeleteAllButton;