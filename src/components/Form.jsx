function Form(props) {
  return (
    <div className="wrapper">
      <header className="header-centered">
        <img
          src="/src/img/logotodolist.png"
          alt="TodoList App Logo"
          className="logo-image"
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