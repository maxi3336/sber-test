export type Todo = {
  id: string;
  content: string;
  isChecked: boolean;
};

export type Keep = {
  id: string;
  title: string;
  todos: Todo[];
};

export interface Keeps {
  keeps: { keeps: Keep[]; editedKeep: Keep; isEdit: boolean };
}
