import { useNavigate, useParams } from "react-router-dom";
import { useDataApi } from "../../api/hooks/useDataApi";
import TaskList from "../tasks/TaskList";
import { Workspace } from "./workspace.interface";
import WorkspaceCard from "./WorkspaceCard";
import WorkspaceUsersCard from "./WorkspaceUsersCard";

export default function WorkspaceDetailsPage() {
  let { workspaceId } = useParams<string>();
  const [state] = useDataApi<Workspace>(
    {
      id: 0,
      title: "",
      description: "",
      createDate: "",
      updateDate: "",
      creator: { username: "", email: "" },
    },
    `/workspaces/${workspaceId}`
  );

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/workspaces/${workspaceId}/create-task`);
  };
  return (
    <div className="flex flex-col w-full">
      {state.isLoading ? (
        <h1>Loading</h1>
      ) : state.error ? (
        <h1>{state.error}</h1>
      ) : (
        <>
          <h1 className="flex flex-row justify-center text-3xl">
            Welcome to {state.data.title} Workspace
          </h1>
          <div className="flex flex-row justify-center w-full">
            <WorkspaceCard {...state.data} />
            <WorkspaceUsersCard />
          </div>
        </>
      )}
      <div className="flex flex-row justify-center w-full">
        <button
          type="button"
          className=" text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={handleClick}
        >
          Create Task
        </button>
      </div>
      <div className="flex flex-row justify-center w-full px-8">
        <TaskList />
      </div>
    </div>
  );
}
