import React from "react";

type LabelProps = {
  title: string;
};
export function Label(props: LabelProps) {
  return (
    <label className="block text-gray-700 text-sm font-bold mb-2">
      {props.title}
    </label>
  );
}
