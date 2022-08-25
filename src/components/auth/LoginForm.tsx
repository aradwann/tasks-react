import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import API from "../../api/api";
import { FormInput } from "../common/form/FormInput";
import { Label } from "../common/form/Label";
import { SubmitButton } from "../common/form/SubmitButton";
import { AuthContext } from "../../context/authContext";

export default function LoginForm() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const formValues = Object.fromEntries(formData);

    const response = await API.post("auth/login", formValues);

    if (response.status === 200) {
      const accessToken = response.data.access_token;
      localStorage.setItem("jwt", accessToken);
      ////////////////// AuthContext line ////////////////
      authContext.login(
        formValues.username as string,
        formValues.password as string
      );
      navigate("/");
    } else {
      alert("you are not logged in ");
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
    </div>
  );
}
