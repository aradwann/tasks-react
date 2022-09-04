import { useParams } from "react-router-dom";
import { useDataApi } from "../../api/hooks/useDataApi";
import Task from "./task.interface";
import TaskListItem from "./TaskListItem";

export default function TaskList() {
  const { workspaceId } = useParams<string>();
  const [state, fetchData] = useDataApi<Task[]>(
    [],
    `/workspaces/${workspaceId}/tasks`
  );

  const tasksListItems = state.data.map((task) => (
    <TaskListItem {...task} key={task.id} />
  ));

  return (
    <div className="flex flex-col justify-center w-full">
      <button onClick={fetchData} className="bg-green-800 rounded-lg">
        Refresh
      </button>
      {state.isLoading ? (
        <h1>Loading</h1>
      ) : state.error ? (
        <h1>{state.error}</h1>
      ) : (
        <ul className="flex flex-col w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
          {tasksListItems}
        </ul>
      )}
    </div>
  );
}
