import { useEffect } from "react";
import { useDataApi } from "../../api/hooks/useDataApi";
import { Workspace } from "./workspace.interface";
import WorkspaceListItem from "./WorkspaceListItem";

export default function WorkspaceList() {
  const [joinedWorkspacesState, fetchJoinedWorkspaces] = useDataApi<
    Workspace[]
  >([], "/workspaces/joined");
  const [createdWorkspacesState, fetchCreatedWorkspaces] = useDataApi<
    Workspace[]
  >([], "/workspaces/created");

  useEffect(() => {
    fetchCreatedWorkspaces();
    fetchJoinedWorkspaces();
  }, [fetchCreatedWorkspaces, fetchJoinedWorkspaces]);
  
  const joinedWorkspacesListItems = joinedWorkspacesState.data.map(
    (workspace) => <WorkspaceListItem {...workspace} key={workspace.id} />
  );
  const createdWorkspacesListItems = createdWorkspacesState.data.map(
    (workspace) => <WorkspaceListItem {...workspace} key={workspace.id} />
  );

  return (
    <div className="flex flex-col justify-center w-full">
      <div className="flex flex-col justify-center w-full">
        <h2 className="flex flex-row justify-center text-3xl">
          Created Workspaces
        </h2>
        <button
          onClick={fetchCreatedWorkspaces}
          className="bg-green-800 rounded-lg"
        >
          Refresh
        </button>
        {createdWorkspacesState.isLoading ? (
          <h1>Loading</h1>
        ) : createdWorkspacesState.error ? (
          <h1>{createdWorkspacesState.error}</h1>
        ) : (
          <ul className="flex flex-col w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
            {createdWorkspacesListItems}
          </ul>
        )}
      </div>
      <div className="flex flex-col justify-center w-full">
        <h2 className="flex flex-row justify-center text-3xl">
          Joined Workspaces
        </h2>
        <button
          onClick={fetchJoinedWorkspaces}
          className="bg-green-800 rounded-lg"
        >
          Refresh
        </button>
        {joinedWorkspacesState.isLoading ? (
          <h1>Loading</h1>
        ) : joinedWorkspacesState.error ? (
          <h1>{joinedWorkspacesState.error}</h1>
        ) : (
          <ul className="flex flex-col w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
            {joinedWorkspacesListItems}
          </ul>
        )}
      </div>
    </div>
  );
}
