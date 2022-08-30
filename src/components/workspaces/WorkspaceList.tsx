import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import API from "../../api/api";
import { Workspace } from "./workspace.interface";
import WorkspaceListItem from "./WorkspaceListItem";

export default function WorkspaceList() {
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await API.get<Workspace[]>("/workspaces/me");
      const workspaces = response.data;
      setWorkspaces(workspaces);
    } catch (error: any) {
      setError(error.response.data.message);
    }

    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const workspacesListItems = workspaces.map((workspace) => (
    <WorkspaceListItem
      id={workspace.id}
      title={workspace.title}
      description={workspace.description}
    />
  ));

  return (
    <div className="flex flex-col justify-center w-full">
      <button onClick={fetchData} className="bg-green-800 rounded-lg">
        Refresh
      </button>
      {isLoading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <ul className="flex flex-col w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
          {workspacesListItems}
        </ul>
      )}
    </div>
  );
}
