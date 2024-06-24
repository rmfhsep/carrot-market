import React, { InputHTMLAttributes } from "react";

interface InputProps {
  error?: string[];
  name: string;
}

const FormInput = ({
  error = [],
  name,
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) => {
  console.log(rest);
  return (
    <div>
      <div className="flex flex-col gap-2">
        <input
          name={name}
          className="bg-transparent rounded-md w-full
            h-10 focus:outline-none ring-1 focus:ring-4 transition ring-neutral-200 focus:ring-orange-500
             border-none placeholder:text-neutral-400"
          {...rest}
        />
        {error.map((err, idx) => {
          return (
            <span className="text-red-500 font-medium" key={idx}>
              {err}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default FormInput;
