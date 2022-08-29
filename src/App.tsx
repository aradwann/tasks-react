import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/header/Navbar";
import SignupForm from "./components/auth/SignupForm";
import LoginForm from "./components/auth/LoginForm";
import { AuthProvider } from "./context/authContext";
import WorkspacesPage from "./components/workspaces/WorkspacesPage";
import CreateWorkspaceForm from "./components/workspaces/CreateWorkspaceForm";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignupForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="workspaces" element={<WorkspacesPage />} />
        <Route path="create-workspace" element={<CreateWorkspaceForm />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
