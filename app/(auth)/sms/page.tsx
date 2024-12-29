"use client";

import Input from "@/components/Input";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import Button from "@/components/Button";
import SocialLogin from "@/components/SocialLogin";
import { smsLogin } from "./actions";
import { useFormState } from "react-dom";

const initialState = {
  token: false,
  error: undefined,
};

const SmsLogin = () => {
  const [state, dispatch] = useFormState(smsLogin, initialState);
  return (
    <>
      <div className="flex flex-col gap-10 py-8 px-6">
        <div className="flex flex-col gap-2 *:font-medium">
          <h1 className="text-2xl">SMS Login</h1>
          <h2 className="text-xl">Verify your phone number</h2>
        </div>

        <form action={dispatch} className="flex flex-col gap-3">
          {state?.token ? (
            <Input
              key="token"
              name="token"
              type="number"
              placeholder="verification code"
              required={true}
              min={100000}
              max={999999}
            />
          ) : (
            <Input
              key="phone"
              name="phone"
              type="text"
              placeholder="phone number"
              required={true}
              error={state.error?.formErrors}
            />
          )}
          <Button
            text={state.token ? "Verify Token" : "Send Verification SMS"}
          />
        </form>
      </div>
    </>
  );
};

export default SmsLogin;
