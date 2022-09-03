import { useEffect } from "react";
import { Workspace } from "./workspace.interface";

export default function WorkspaceCard(workspace: Workspace) {
  return (
    <div className="flex justify-center">
      <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {workspace.title}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {workspace.description}
          </p>
          <p className="text-gray-900 text-xl font-medium mb-2">
            created by username {workspace.creator.username} email
            {workspace.creator.email}
          </p>
        </div>
        <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            Created On {new Date(workspace.createDate).toDateString()}
          </h5>
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            Updated On {new Date(workspace.updateDate).toDateString()}
          </h5>
        </div>
      </div>
    </div>
  );
}
