import { useState } from "react";

function ToDoList(props) {
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const startEditing = (id, currentTask) => {
    setEditingId(id);
    setEditValue(currentTask);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditValue("");
  };

  const saveEdit = (id) => {
    if (editValue.trim() === "") {
      props.showAlert("Task tidak boleh kosong");
      return;
    }
    props.editTask(id, editValue.trim());
    setEditingId(null);
    setEditValue("");
  };

  const handleKeyPress = (e, id) => {
    if (e.key === "Enter") {
      saveEdit(id);
    } else if (e.key === "Escape") {
      cancelEditing();
    }
  };

  // Function untuk check apakah task bisa di-move
  const canMoveUp = (taskId) => {
    const currentIndex = props.allTasks.findIndex((task) => task.id === taskId);
    return currentIndex > 0;
  };

  const canMoveDown = (taskId) => {
    const currentIndex = props.allTasks.findIndex((task) => task.id === taskId);
    return currentIndex < props.allTasks.length - 1;
  };

  // Function untuk handle click pada completed task
  const handleCompletedTaskClick = (item) => {
    if (item.completed) {
      props.showAlert("Task yang sudah selesai tidak dapat diubah statusnya lagi");
      return;
    }
    props.setCompleted(item.id);
  };

  // Function untuk handle edit button pada completed task
  const handleEditButtonClick = (item) => {
    if (item.completed) {
      props.showAlert("Task yang sudah selesai tidak dapat diedit lagi");
      return;
    }
    startEditing(item.id, item.task);
  };

  // Jika tidak ada task yang tersedia
  if (props.tasks.length === 0) {
    return (
      <div className="wrapper">
        <ul>
          <li
            style={{
              justifyContent: "center",
              color: "#b0b0b0",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            Tidak ada task yang tersedia
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <ul>
        {props.tasks.map((item) => (
          <li key={item.id}>
            <div className="left">
              <button
                onClick={() => handleCompletedTaskClick(item)}
                aria-label={
                  item.completed ? "Task completed permanently" : "Mark as complete"
                }
                style={{ 
                  cursor: item.completed ? "not-allowed" : "pointer",
                  opacity: item.completed ? 0.8 : 1
                }}
              >
                {item.completed ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#28a745"
                    strokeWidth="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22,4 12,14.01 9,11.01" />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#b0b0b0"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                )}
              </button>
            </div>

            <div className={item.completed ? "center strike" : "center"}>
              {editingId === item.id ? (
                <div>
                  <input
                    type="text"
                    className="edit-input"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onKeyDown={(e) => handleKeyPress(e, item.id)}
                    autoFocus
                    autoComplete="off"
                  />
                  <div className="edit-buttons">
                    <button
                      type="button"
                      className="edit-btn save"
                      onClick={() => saveEdit(item.id)}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="edit-btn cancel"
                      onClick={cancelEditing}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                item.task
              )}
            </div>

            <div className="right">
              {editingId !== item.id && (
                <>
                  {/* Move Up Button */}
                  <span>
                    <button
                      type="button"
                      onClick={() =>
                        canMoveUp(item.id) && props.move(item.id, "up")
                      }
                      disabled={!canMoveUp(item.id)}
                      aria-label="Move task up"
                      style={{ opacity: !canMoveUp(item.id) ? 0.3 : 1 }}
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
                      onClick={() =>
                        canMoveDown(item.id) && props.move(item.id, "down")
                      }
                      disabled={!canMoveDown(item.id)}
                      aria-label="Move task down"
                      style={{ opacity: !canMoveDown(item.id) ? 0.3 : 1 }}
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

                  {/* Edit Button - Disabled untuk completed tasks */}
                  <span>
                    <button
                      type="button"
                      onClick={() => handleEditButtonClick(item)}
                      aria-label={item.completed ? "Cannot edit completed task" : "Edit task"}
                      style={{ 
                        opacity: item.completed ? 0.3 : 1,
                        cursor: item.completed ? "not-allowed" : "pointer"
                      }}
                      disabled={item.completed}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={item.completed ? "#666" : "#ffc107"}
                        strokeWidth="2"
                      >
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                    </button>
                  </span>

                  {/* Delete Button */}
                  <span>
                    <button
                      type="button"
                      onClick={() => props.remove(item.id)}
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
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;