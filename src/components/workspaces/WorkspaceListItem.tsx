import { useNavigate } from "react-router-dom";
import { Workspace } from "./workspace.interface";

export default function WorkspaceListItem(props: Workspace) {
  const navigate = useNavigate();
  const handleClick = (e: any) => {
    e.preventDefault();
    const id = e?.target?.id;
    console.log(id);
    navigate(`${id}`);
  };

  return (
    <li key={props.id}>
      <button
        id={`${props.id}`}
        type="button"
        className="flex flex-col align-middle items-center py-2 px-8 w-full text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        onClick={handleClick}
      >
        <h6>{props.title}</h6> <p>{props.description}</p>
      </button>
    </li>
  );
}
