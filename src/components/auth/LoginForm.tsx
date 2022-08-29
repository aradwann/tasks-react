import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { FormInput } from "../common/form/FormInput";
import { Label } from "../common/form/Label";
import { SubmitButton } from "../common/form/SubmitButton";
import { AuthContext } from "../../context/authContext";
import { ErrorToast } from "../common/toast/ErrorToast";

type LoginValues = {
  username: string;
  password: string;
};

export default function LoginForm() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const formValues = Object.fromEntries(formData);

    ////////////////// AuthContext line ////////////////
    authContext.login(
      formValues.username as string,
      formValues.password as string
    );

    if (authContext.isAuthenticated) {
      navigate("/");
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
          <Label title="Password" />
          <FormInput
            type="password"
            name="password"
            placeholder="Password"
            isRequired={true}
          />
        </div>

        <SubmitButton title="Login" />
      </form>
      {authContext.errorMsg && (
        <ErrorToast
          title="login error"
          message={authContext.errorMsg}
          date={new Date()}
        />
      )}
    </div>
  );
}
