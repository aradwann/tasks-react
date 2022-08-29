import { useEffect, useState } from "react";
import API from "../../api/api";
import { Workspace } from "./workspace.interface";
import WorkspaceListItem from "./WorkspaceListItem";

export default function WorkspaceList() {
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const fetchData = async () => {
    const response = await API.get<Workspace[]>("/workspaces/me");
    const workspaces = response.data;
    setWorkspaces(workspaces);
    console.log(workspaces);
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
    <ul className="flex flex-col w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
      {workspacesListItems}
    </ul>
  );
}
