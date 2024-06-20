"use client";

import FormInput from "@/components/FormInput";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import FormButton from "@/components/FormButton";
import SocialLogin from "@/components/SocialLogin";
import { useFormState } from "react-dom";
import { createAccount } from "./action";

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
          <FormInput
            name="username"
            type="text"
            placeholder="Username"
            required={true}
            error={state?.fieldErrors.username}
          />
          <FormInput
            name="email"
            type="email"
            placeholder="email"
            required={true}
            error={state?.fieldErrors.email}
          />
          <FormInput
            name="password"
            type="password"
            placeholder="password"
            required={true}
            error={state?.fieldErrors.password}
          />
          <FormInput
            name="confirm_password"
            type="password"
            placeholder="Confirm password"
            required={true}
            error={state?.fieldErrors.confirm_password}
          />
          <FormButton text="Create Button" />
        </form>
      </div>
      <SocialLogin />
    </>
  );
};

export default CreateAccount;
