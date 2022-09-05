import { Outlet } from "react-router-dom";

export default function WorkspacesRouteContainer() {
  return (
    <div className="flex flex-col">
      <Outlet />
    </div>
  );
}
