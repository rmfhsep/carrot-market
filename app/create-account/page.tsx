import FormInput from "@/components/FormInput";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import FormButton from "@/components/FormButton";
import SocialLogin from "@/components/SocialLogin";

const CreateAccount = () => {
  return (
    <>
      <div className="flex flex-col gap-10 py-8 px-6">
        <div className="flex flex-col gap-2 *:font-medium">
          <h1 className="text-2xl">안녕하세요!</h1>
          <h2 className="text-xl">Fill in the form below to join!</h2>
        </div>

        <form className="flex flex-col gap-3">
          <FormInput
            type="text"
            placeholder="Username"
            required={true}
            error={["username is too short"]}
          />
          <FormInput
            type="email"
            placeholder="email"
            required={true}
            error={[]}
          />
          <FormInput
            type="password"
            placeholder="password"
            required={true}
            error={[]}
          />
          <FormInput
            type="password"
            placeholder="Confirm password"
            required={true}
            error={[]}
          />
        </form>
        <FormButton text="Create Button" loading={false} />
      </div>
      <SocialLogin />
    </>
  );
};

export default CreateAccount;
