import React from "react";

export default function Home() {
  return (
    <div className=" grid ">
      <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl ">
        <img className="h-10" src="img/logo.png" alt="tasks logo" />
        <img
          className="rounded-3xl mt-6 sm:mt-8 shadow-xl h-100 w-100 "
          src="img/team.jpg"
          alt="team working on tasks"
        ></img>
        <h1 className="mt-6 sm:mt-8 text-2xl sm:text-4xl  text-center font-bold lg:text-2xl">
          you can manage your <span className=" text-blue-500">tasks</span> with
          you team smoothly
        </h1>
      </div>
    </div>
  );
}
