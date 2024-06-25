"use client";

import Input from "@/components/Input";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import Button from "@/components/Button";
import SocialLogin from "@/components/SocialLogin";
import { useFormState } from "react-dom";
import { createAccount } from "./action";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

const CreateAccount = () => {
  const [state, trigger] = useFormState(createAccount, null);
  return (
    <>
      <div className="flex flex-col gap-10 py-8 px-6">
        <div className="flex flex-col gap-2 *:font-medium">
          <h1 className="text-2xl">안녕하세요!</h1>
          <h2 className="text-xl">Fill in the form below to join!</h2>
        </div>

        <form action={trigger} className="flex flex-col gap-3">
          <Input
            name="username"
            type="text"
            placeholder="Username"
            required={true}
            error={state?.fieldErrors.username}
            minLength={3}
            maxLength={10}
          />
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
            placeholder="password"
            required={true}
            minLength={PASSWORD_MIN_LENGTH}
            error={state?.fieldErrors.password}
          />
          <Input
            name="confirm_password"
            type="password"
            placeholder="Confirm password"
            minLength={PASSWORD_MIN_LENGTH}
            required={true}
            error={state?.fieldErrors.confirm_password}
          />
          <Button text="Create Button" />
        </form>
      </div>
      <SocialLogin />
    </>
  );
};

export default CreateAccount;
