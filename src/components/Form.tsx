import { FormProps } from "../types";

function Form(props: FormProps): JSX.Element {
  const handleLogoContextMenu = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    return false;
  };

  const handleLogoDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();
    return false;
  };

  const handleLogoSelectStart = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.preventDefault();
    return false;
  };

  const handleLogoMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    return false;
  };

  const handleLogoTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
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
          onContextMenu={handleLogoContextMenu}
          onDragStart={handleLogoDragStart}
          onSelectStart={handleLogoSelectStart}
          onMouseDown={handleLogoMouseDown}
          onTouchStart={handleLogoTouchStart}
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

      <div className="filter-container">
        <button
          type="button"
          className={`filter-btn ${props.currentFilter === "all" ? "active" : ""}`}
          onClick={() => props.setCurrentFilter("all")}
        >
          All
        </button>
        <button
          type="button"
          className={`filter-btn ${props.currentFilter === "active" ? "active" : ""}`}
          onClick={() => props.setCurrentFilter("active")}
        >
          Active
        </button>
        <button
          type="button"
          className={`filter-btn ${props.currentFilter === "completed" ? "active" : ""}`}
          onClick={() => props.setCurrentFilter("completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default Form;