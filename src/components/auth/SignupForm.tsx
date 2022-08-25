import React from "react";
import API from "../../api/api";
import { FormInput } from "../common/form/FormInput";
import { Label } from "../common/form/Label";
import { SubmitButton } from "../common/form/SubmitButton";

export default function SignupForm() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const formValues = Object.fromEntries(formData);

    try {
      const response = await API.post("/users", formValues);
      if (response.status === 201) {
        alert("your account has been created ");
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
          <Label title="Username" />
          <FormInput
            name="username"
            type="text"
            placeholder="username"
            isRequired={true}
          />
        </div>

        <div>
          <Label title="Email" />
          <FormInput
            type="email"
            name="email"
            placeholder="Email"
            isRequired={true}
          />
        </div>

        <div>
          <Label title="Password" />
          <FormInput
            type="password"
            name="password"
            placeholder="Password"
            isRequired={true}
          />
        </div>

        <SubmitButton title="Create Account" />
      </form>
    </div>
  );
}
