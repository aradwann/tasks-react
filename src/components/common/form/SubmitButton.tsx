import React from "react";

type SubmitButtonProps = {
  title: string;
};
export function SubmitButton(props: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
    >
      {props.title}
    </button>
  );
}
