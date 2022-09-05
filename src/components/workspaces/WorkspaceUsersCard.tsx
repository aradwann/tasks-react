import { useParams } from "react-router-dom";
import { useDataApi } from "../../api/hooks/useDataApi";

interface User {
  id: number;
  username: string;
  email: string;
}

export default function WorkspaceUsersCard() {
  let { workspaceId } = useParams<string>();
  const [state, fetchData] = useDataApi<User[]>(
    [],
    `/workspaces/${workspaceId}/users`
  );
  const usersListItems = state.data.map((user) => (
    <li
      key={user.id}
      className="py-3 px-6 border-t border-gray-300 text-gray-600"
    >
      <button className=" text-gray-900 text-md font-medium mb-2">
        username {user.username}
      </button>
    </li>
  ));

  return (
    <div className="flex justify-center">
      <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
        <ul>{usersListItems}</ul>
      </div>
    </div>
  );
}
