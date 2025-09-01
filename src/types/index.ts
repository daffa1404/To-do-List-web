export interface Task {
  id: number;
  task: string;
  completed: boolean;
}

export type FilterType = "all" | "active" | "completed";

export interface FormProps {
  addTask: (event: React.FormEvent<HTMLFormElement>) => void;
  newTask: React.RefObject<HTMLInputElement>;
  taskCompleted: number;
  tasks: Task[];
  currentFilter: FilterType;
  setCurrentFilter: (filter: FilterType) => void;
}

export interface ToDoListProps {
  tasks: Task[];
  allTasks: Task[];
  setCompleted: (id: number) => void;
  move: (taskId: number, direction: "up" | "down") => void;
  remove: (id: number) => void;
  editTask: (id: number, newTaskText: string) => void;
  showAlert: (message: string, title?: string) => void;
  currentFilter: FilterType;
  searchQuery: string;
}

export interface DeleteAllButtonProps {
  onDeleteAll: () => void;
  hasTasks: boolean;
  currentFilter: FilterType;
  tasksCount: number;
}

export interface SearchProgressBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  currentFilter: FilterType;
  completed: number;
  total: number;
  percentage: number;
}