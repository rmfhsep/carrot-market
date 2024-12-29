"use client";

import Input from "@/components/Input";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import Button from "@/components/Button";
import SocialLogin from "@/components/SocialLogin";
import { useFormState } from "react-dom";
import { login } from "./actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";
const Login = () => {
  const [state, dispatch] = useFormState(login, null as any);

  return (
    <>
      <div className="flex flex-col gap-10 py-8 px-6">
        <div className="flex flex-col gap-2 *:font-medium">
          <h1 className="text-2xl">안녕하세요!</h1>
          <h2 className="text-xl">Login in with email and password.</h2>
        </div>

        <form action={dispatch} className="flex flex-col gap-3">
          <Input
            name="email"
            type="email"
            placeholder="email"
            required={true}
            error={state?.fieldErrors.email}
          />
          <Input
            name="password"
            type="password"
            minLength={PASSWORD_MIN_LENGTH}
            placeholder="password"
            required={true}
            error={state?.fieldErrors.password}
          />
          <Button text="Create Button" />
        </form>
      </div>
      <SocialLogin />
    </>
  );
};

export default Login;
