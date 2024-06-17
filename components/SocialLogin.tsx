import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <>
      <div className="w-full h-px  bg-neutral-500 " />
      <div className="flex flex-col gap-3 mt-10">
        <Link
          className="primary-btn flex h-10 items-center justify-center gap-3"
          href={"/github/start"}
        >
          <span>
            <FaGithub className="h-7 w-7 " />
          </span>
          <span>Countinue with Github</span>
        </Link>
        <Link
          className="primary-btn flex h-10 items-center justify-center gap-3"
          href={"/sms"}
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="h-7 w-7 " />
          </span>

          <span>Countinue with SMS</span>
        </Link>
      </div>
    </>
  );
};

export default SocialLogin;
