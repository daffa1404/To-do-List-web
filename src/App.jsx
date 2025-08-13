import { useEffect, useRef, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

// Custom Alert Component
const CustomAlert = ({
  isOpen,
  message,
  onClose,
  title = "ToDoListApp memperingatkan",
}) => {
  const alertRef = useRef();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      if (alertRef.current && e.target === alertRef.current) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(50px) scale(0.9);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>
      <div
        ref={alertRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(5px)",
          animation: "fadeIn 0.3s ease-out",
        }}
      >
        <div
          style={{
            background: "linear-gradient(145deg, #2a2d3a, #1e1e2e)",
            borderRadius: "20px",
            padding: "30px",
            width: "90%",
            maxWidth: "420px",
            boxShadow:
              "0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            position: "relative",
            animation: "slideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          }}
        >
          {/* Glow effect */}
          <div
            style={{
              position: "absolute",
              top: "-2px",
              left: "-2px",
              right: "-2px",
              bottom: "-2px",
              background: "linear-gradient(45deg, #4facfe, #00f2fe, #4facfe)",
              borderRadius: "22px",
              zIndex: -1,
              opacity: 0.6,
              filter: "blur(8px)",
            }}
          />

          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                background: "linear-gradient(45deg, #667eea, #764ba2)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                color: "white",
                flexShrink: 0,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3
              style={{
                color: "#e0e6ed",
                fontSize: "18px",
                fontWeight: "600",
                letterSpacing: "0.5px",
                margin: 0,
              }}
            >
              {title}
            </h3>
          </div>

          {/* Message */}
          <p
            style={{
              color: "#b8c5d1",
              fontSize: "16px",
              lineHeight: "1.6",
              marginBottom: "25px",
              textAlign: "center",
              margin: "0 0 25px 0",
            }}
          >
            {message}
          </p>

          {/* Button */}
          <button
            onClick={onClose}
            style={{
              width: "100%",
              padding: "14px 24px",
              background: "linear-gradient(45deg, #667eea, #764ba2)",
              border: "none",
              borderRadius: "12px",
              color: "white",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 10px 20px rgba(102, 126, 234, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            OK
          </button>
        </div>
      </div>
    </>
  );
};

// Custom Confirm Component
const CustomConfirm = ({
  isOpen,
  message,
  onConfirm,
  onCancel,
  title = "ToDoListApp memperingatkan",
}) => {
  const confirmRef = useRef();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onCancel();
      }
    };

    const handleClickOutside = (e) => {
      if (confirmRef.current && e.target === confirmRef.current) {
        onCancel();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(50px) scale(0.9);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>
      <div
        ref={confirmRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(5px)",
          animation: "fadeIn 0.3s ease-out",
        }}
      >
        <div
          style={{
            background: "linear-gradient(145deg, #2a2d3a, #1e1e2e)",
            borderRadius: "20px",
            padding: "30px",
            width: "90%",
            maxWidth: "420px",
            boxShadow:
              "0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            position: "relative",
            animation: "slideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          }}
        >
          {/* Glow effect */}
          <div
            style={{
              position: "absolute",
              top: "-2px",
              left: "-2px",
              right: "-2px",
              bottom: "-2px",
              background: "linear-gradient(45deg, #4facfe, #00f2fe, #4facfe)",
              borderRadius: "22px",
              zIndex: -1,
              opacity: 0.6,
              filter: "blur(8px)",
            }}
          />

          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                background: "linear-gradient(45deg, #f56565, #e53e3e)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                color: "white",
                flexShrink: 0,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </div>
            <h3
              style={{
                color: "#e0e6ed",
                fontSize: "18px",
                fontWeight: "600",
                letterSpacing: "0.5px",
                margin: 0,
              }}
            >
              {title}
            </h3>
          </div>

          {/* Message */}
          <p
            style={{
              color: "#b8c5d1",
              fontSize: "16px",
              lineHeight: "1.6",
              marginBottom: "25px",
              textAlign: "center",
              margin: "0 0 25px 0",
            }}
          >
            {message}
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "12px" }}>
            {/* Cancel Button */}
            <button
              onClick={onCancel}
              style={{
                flex: 1,
                padding: "14px 24px",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "12px",
                color: "#b8c5d1",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.15)";
                e.target.style.color = "#e0e6ed";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.1)";
                e.target.style.color = "#b8c5d1";
              }}
            >
              Cancel
            </button>

            {/* OK/Delete Button */}
            <button
              onClick={onConfirm}
              style={{
                flex: 1,
                padding: "14px 24px",
                background: "linear-gradient(45deg, #667eea, #764ba2)",
                border: "none",
                borderRadius: "12px",
                color: "white",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 10px 20px rgba(245, 101, 101, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

function App() {
  const newTask = useRef("");
  const STORAGE = "TODOLIST_APP";
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem(STORAGE)) || [];
  });

  const [taskCompleted, setTaskCompleted] = useState(0);
  const [currentFilter, setCurrentFilter] = useState("all");

  // Alert state
  const [alertConfig, setAlertConfig] = useState({
    isOpen: false,
    message: "",
    title: "",
  });

  // Confirm state
  const [confirmConfig, setConfirmConfig] = useState({
    isOpen: false,
    message: "",
    title: "",
    onConfirm: null,
  });

  // Alert helper functions
  const showAlert = (message, title = "ToDoListApp memperingatkan") => {
    setAlertConfig({
      isOpen: true,
      message,
      title,
    });
  };

  const closeAlert = () => {
    setAlertConfig((prev) => ({ ...prev, isOpen: false }));
  };

  // Confirm helper functions
  const showConfirm = (
    message,
    onConfirmCallback,
    title = "ToDoListApp memperingatkan"
  ) => {
    setConfirmConfig({
      isOpen: true,
      message,
      title,
      onConfirm: onConfirmCallback,
    });
  };

  const handleConfirm = () => {
    if (confirmConfig.onConfirm) {
      confirmConfig.onConfirm();
    }
    setConfirmConfig((prev) => ({ ...prev, isOpen: false }));
  };

  const handleCancel = () => {
    setConfirmConfig((prev) => ({ ...prev, isOpen: false }));
  };

  // Filter tasks based on current filter
  const filteredTasks = tasks.filter((task) => {
    if (currentFilter === "active") {
      return !task.completed;
    } else if (currentFilter === "completed") {
      return task.completed;
    }
    return true; // 'all' filter
  });

  useEffect(() => {
    localStorage.setItem(STORAGE, JSON.stringify(tasks));
    const complete = tasks.filter((item) => item.completed === true).length;
    setTaskCompleted(complete);
  }, [tasks]);

  function setId() {
    if (tasks.length === 0) {
      return 1;
    } else {
      return Math.max(...tasks.map((task) => task.id)) + 1;
    }
  }

  function addTask(event) {
    event.preventDefault();
    if (newTask.current.value === "") {
      showAlert("Silakan masukkan hal yang akan kamu kerjakan");
      return false;
    }
    const data = {
      id: setId(),
      task: newTask.current.value,
      completed: false,
    };
    newTask.current.value = "";
    setTasks([data, ...tasks]); // Menambahkan task baru di awal array
  }

  // ENHANCED setCompleted function - Task yang sudah complete tidak bisa diubah lagi
  function setCompleted(id) {
    const task = tasks.find((item) => item.id === id);
    
    // Jika task sudah completed, tidak bisa diubah lagi
    if (task && task.completed) {
      showAlert("Task yang sudah selesai tidak dapat diubah statusnya lagi");
      return;
    }

    // Jika task belum completed, bisa diubah menjadi completed
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  // ENHANCED editTask function - Task yang sudah complete tidak bisa diedit
  function editTask(id, newTaskText) {
    const task = tasks.find((item) => item.id === id);
    
    // Jika task sudah completed, tidak bisa diedit
    if (task && task.completed) {
      showAlert("Task yang sudah selesai tidak dapat diedit lagi");
      return;
    }

    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, task: newTaskText } : item
      )
    );
  }

  // FIXED MOVE FUNCTION - Task completed tidak bisa dipindah
  function move(taskId, direction) {
    const task = tasks.find((item) => item.id === taskId);
    
    // Jika task sudah completed, tidak bisa dipindah
    if (task && task.completed) {
      showAlert("Task yang sudah selesai tidak dapat dipindah lagi");
      return;
    }

    const currentIndex = tasks.findIndex((task) => task.id === taskId);
    const newIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;

    // Validasi batas
    if (newIndex < 0 || newIndex >= tasks.length) return;

    // Buat copy array baru
    const newTasks = [...tasks];

    // Tukar posisi
    [newTasks[currentIndex], newTasks[newIndex]] = [
      newTasks[newIndex],
      newTasks[currentIndex],
    ];

    setTasks(newTasks);
  }

  function remove(id) {
    showConfirm("Yakin akan hapus data ini?", () => {
      setTasks(tasks.filter((item) => item.id !== id));
    });
  }

  return (
    <>
      <Form
        addTask={addTask}
        newTask={newTask}
        taskCompleted={taskCompleted}
        tasks={tasks}
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
      <ToDoList
        tasks={filteredTasks}
        allTasks={tasks} // Pass original tasks untuk checking move boundaries
        setCompleted={setCompleted}
        move={move}
        remove={remove}
        editTask={editTask}
        showAlert={showAlert}
        currentFilter={currentFilter} // Pass current filter to ToDoList
      />

      {/* Custom Alert */}
      <CustomAlert
        isOpen={alertConfig.isOpen}
        message={alertConfig.message}
        title={alertConfig.title}
        onClose={closeAlert}
      />

      {/* Custom Confirm */}
      <CustomConfirm
        isOpen={confirmConfig.isOpen}
        message={confirmConfig.message}
        title={confirmConfig.title}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </>
  );
}

export default App;