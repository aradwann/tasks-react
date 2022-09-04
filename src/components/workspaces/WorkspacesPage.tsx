import { useNavigate } from "react-router-dom";
import  WorkspaceList  from "./WorkspaceList";

export default function WorkspacesPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/create-workspace");
  };
  return (
    <div className="flex flex-col">
      <h1 className="flex flex-row justify-center text-5xl">
        Welcome to your workspaces
      </h1>
      <div className="flex flex-row justify-center w-full p-4">
        <button
          type="button"
          className=" text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={handleClick}
        >
          Create Workspace
        </button>
      </div>
      <div className="flex flex-row justify-center w-full px-8">
        <WorkspaceList />
      </div>
    </div>
  );
}
