function ToDoListButton(props) {
  const id = props.id;
  const currentIndex = props.tasks.findIndex((item) => item.id === id);
  const prevIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;

  // Check if move up is possible
  const canMoveUp = prevIndex >= 0;

  // Check if move down is possible
  const canMoveDown = nextIndex < props.tasks.length;

  const handleMoveUp = () => {
    if (canMoveUp) {
      props.move(id, "up");
    }
  };

  const handleMoveDown = () => {
    if (canMoveDown) {
      props.move(id, "down");
    }
  };

  return (
    <>
      {/* Move Up Button */}
      <span>
        <button
          type="button"
          onClick={handleMoveUp}
          disabled={!canMoveUp}
          aria-label="Move task up"
          style={{ opacity: !canMoveUp ? 0.3 : 1 }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#17a2b8"
            strokeWidth="2"
          >
            <polyline points="18,15 12,9 6,15" />
          </svg>
        </button>
      </span>

      {/* Move Down Button */}
      <span>
        <button
          type="button"
          onClick={handleMoveDown}
          disabled={!canMoveDown}
          aria-label="Move task down"
          style={{ opacity: !canMoveDown ? 0.3 : 1 }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#17a2b8"
            strokeWidth="2"
          >
            <polyline points="6,9 12,15 18,9" />
          </svg>
        </button>
      </span>

      {/* Delete Button */}
      <span>
        <button
          type="button"
          onClick={() => props.remove(props.id)}
          aria-label="Delete task"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#dc3545"
            strokeWidth="2"
          >
            <polyline points="3,6 5,6 21,6" />
            <path d="m19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
          </svg>
        </button>
      </span>
    </>
  );
}

export default ToDoListButton;