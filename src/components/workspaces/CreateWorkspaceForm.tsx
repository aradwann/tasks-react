import React from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/api";
import { FormInput } from "../common/form/FormInput";
import { Label } from "../common/form/Label";
import { SubmitButton } from "../common/form/SubmitButton";

export default function CreateWorkspaceForm() {
  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const formValues = Object.fromEntries(formData);

    try {
      const response = await API.post("/workspaces", formValues);
      if (response.status === 201) {
        navigate("/workspaces");
      } else if (response.status === 500) {
        alert("there is something wrong with the server ");
      } else {
        alert(JSON.stringify(response.data.message));
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-row justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
      >
        <div>
          <Label title="Title" />
          <FormInput
            name="title"
            type="text"
            placeholder="title"
            isRequired={true}
          />
        </div>
        <div>
          <Label title="Description" />
          <FormInput
            name="description"
            type="text"
            placeholder="description"
            isRequired={true}
          />
        </div>

        <SubmitButton title="Create Workspace" />
      </form>
    </div>
  );
}
