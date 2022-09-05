import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/header/Navbar";
import SignupForm from "./components/auth/SignupForm";
import LoginForm from "./components/auth/LoginForm";
import { AuthProvider } from "./context/authContext";
import WorkspacesPage from "./components/workspaces/WorkspacesPage";
import WorkspaceDetailsPage from "./components/workspaces/WorkspaceDetailsPage";
import CreateTaskForm from "./components/tasks/CreateTaskForm";
import CreateWorkspaceForm from "./components/workspaces/CreateWorkspaceForm";
import WorkspacesRouteContainer from "./components/workspaces/WorkspacesRouteContainer";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="home" element={<Home />} />
          <Route path="signup" element={<SignupForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="workspaces" element={<WorkspacesRouteContainer />}>
            <Route path="" element={<WorkspacesPage />} />
            <Route path="create" element={<CreateWorkspaceForm />} />
            <Route path=":workspaceId" element={<WorkspaceDetailsPage />} />
            <Route
              path=":workspaceId/create-task"
              element={<CreateTaskForm />}
            />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
