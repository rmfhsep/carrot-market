"use server";
import { CgPassword } from "react-icons/cg";
import { z } from "zod";

function checkUsername(username: string) {
  username.includes("potato") ? false : true;
}

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "usernmae must ve string",
        required_error: "where is usernmae",
      })
      .min(3, "Way too short!")
      .max(10, "that is too loooong")
      .refine(checkUsername, "custorm Error"),
    email: z.string().email(),
    password: z.string().min(10),
    confirm_password: z.string().min(10),
  })
  .refine(({ password, confirm_password }) => password === confirm_password, {
    message: "Both password should be same!",
    path: ["confirm_password"],
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const res = formSchema.safeParse(data);
  if (!res.success) {
    return res.error.flatten();
  }
}
