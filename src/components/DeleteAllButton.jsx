function DeleteAllButton({ onDeleteAll, hasTasks }) {
  // Jangan tampilkan tombol jika tidak ada task sama sekali
  if (!hasTasks) {
    return null;
  }

  const handleClick = () => {
    onDeleteAll();
  };

  return (
    <div className="delete-all-container">
      <button
        type="button"
        className="delete-all-btn"
        onClick={handleClick}
        aria-label="Delete all tasks"
      >
        Delete All
      </button>
    </div>
  );
}

export default DeleteAllButton;