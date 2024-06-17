import FormInput from "@/components/FormInput";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import FormButton from "@/components/FormButton";
import SocialLogin from "@/components/SocialLogin";

const SmsLogin = () => {
  return (
    <>
      <div className="flex flex-col gap-10 py-8 px-6">
        <div className="flex flex-col gap-2 *:font-medium">
          <h1 className="text-2xl">SMS Login</h1>
          <h2 className="text-xl">Verify your phone number</h2>
        </div>

        <form className="flex flex-col gap-3">
          <FormInput
            type="number"
            placeholder="phone number"
            required={true}
            error={[]}
          />
          <FormInput
            type="number"
            placeholder="verification code"
            required={true}
            error={[]}
          />
        </form>
        <FormButton text="Send message" loading={false} />
      </div>
    </>
  );
};

export default SmsLogin;
