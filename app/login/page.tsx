"use client";

import FormInput from "@/components/FormInput";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import FormButton from "@/components/FormButton";
import SocialLogin from "@/components/SocialLogin";
import { useFormState } from "react-dom";
import { handleForm } from "./actions";
const Login = () => {
  const [state, action] = useFormState(handleForm, null as any);

  return (
    <>
      <div className="flex flex-col gap-10 py-8 px-6">
        <div className="flex flex-col gap-2 *:font-medium">
          <h1 className="text-2xl">안녕하세요!</h1>
          <h2 className="text-xl">Login in with email and password.</h2>
        </div>

        <form action={action} className="flex flex-col gap-3">
          <FormInput
            name="email"
            type="email"
            placeholder="email"
            required={true}
          />
          <FormInput
            name="password"
            type="password"
            placeholder="password"
            required={true}
          />
          <FormButton text="Create Button" />
        </form>
      </div>
      <SocialLogin />
    </>
  );
};

export default Login;
