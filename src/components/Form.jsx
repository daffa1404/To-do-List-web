function Form(props) {
  // Function untuk handle context menu (right-click) pada logo
  const handleLogoContextMenu = (e) => {
    e.preventDefault();
    return false;
  };

  // Function untuk handle drag start pada logo
  const handleLogoDragStart = (e) => {
    e.preventDefault();
    return false;
  };

  // Function untuk handle select start pada logo
  const handleLogoSelectStart = (e) => {
    e.preventDefault();
    return false;
  };

  // Function untuk handle mouse down pada logo
  const handleLogoMouseDown = (e) => {
    e.preventDefault();
    return false;
  };

  // Function untuk handle touch start pada mobile
  const handleLogoTouchStart = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <div className="wrapper">
      <header className="header-centered">
        <img
          src="/logotodolist.png"
          alt="TodoList App Logo"
          className="logo-image"
          
          // Desktop Protection Events
          onContextMenu={handleLogoContextMenu}
          onDragStart={handleLogoDragStart}
          onSelectStart={handleLogoSelectStart}
          onMouseDown={handleLogoMouseDown}
          
          // Mobile Protection Events
          onTouchStart={handleLogoTouchStart}
          
          // HTML Attributes
          draggable={false}
        />
        <div className="task-counter">
          <span>
            {props.taskCompleted || "0"} / {props.tasks.length}
          </span>
        </div>
      </header>

      <form className="input-box" onSubmit={props.addTask}>
        <input
          type="text"
          ref={props.newTask}
          placeholder="Add Your Task"
          autoComplete="off"
        />
        <button type="submit">Add Task</button>
      </form>

      {/* Filter Buttons */}
      <div className="filter-container">
        <button
          type="button"
          className={`filter-btn ${
            props.currentFilter === "all" ? "active" : ""
          }`}
          onClick={() => props.setCurrentFilter("all")}
        >
          All
        </button>
        <button
          type="button"
          className={`filter-btn ${
            props.currentFilter === "active" ? "active" : ""
          }`}
          onClick={() => props.setCurrentFilter("active")}
        >
          Active
        </button>
        <button
          type="button"
          className={`filter-btn ${
            props.currentFilter === "completed" ? "active" : ""
          }`}
          onClick={() => props.setCurrentFilter("completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default Form;