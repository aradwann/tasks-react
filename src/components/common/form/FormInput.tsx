import React from "react";

type FormInputProps = {
  name: string;
  type: string;
  placeholder: string;
  isRequired: boolean;
};
export function FormInput(props: FormInputProps) {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      required
      className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  );
}
