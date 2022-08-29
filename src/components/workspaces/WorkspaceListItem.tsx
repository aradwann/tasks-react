import { Workspace } from "./workspace.interface";

type WorkspaceProps = Workspace;
export default function WorkspaceListItem(props: WorkspaceProps) {
  return (
    <li key={props.id}>
      <button
        type="button"
        className="flex flex-col align-middle items-center py-2 px-8 w-full text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        <h6>{props.title}</h6> <p>{props.description}</p>
      </button>
    </li>
  );
}