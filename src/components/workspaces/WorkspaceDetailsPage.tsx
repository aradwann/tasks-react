import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDataApi } from "../../api/hooks/useDataApi";
import { Workspace } from "./workspace.interface";
import WorkspaceCard from "./WorkspaceCard";
import WorkspaceList from "./WorkspaceList";

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
    navigate("/create-task");
  };
  return (
    <div className="flex flex-col">
      <h1 className="flex flex-row justify-center">Welcome to Workspace</h1>
      {state.isLoading ? (
        <h1>Loading</h1>
      ) : state.error ? (
        <h1>{state.error}</h1>
      ) : (
        <WorkspaceCard {...state.data} />
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
      <div className="flex flex-row justify-center w-full px-8"></div>
    </div>
  );
}
