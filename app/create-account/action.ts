"use server";
import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "@/lib/constants";
import db from "@/lib/db";
import { CgPassword } from "react-icons/cg";
import { z } from "zod";
import bcrypt from "bcrypt";

const passwordRegex = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).+$/
);

function checkUsername(username: string) {
  return !username.includes("potato");
}

const checkUniaueUserName = async (userName: string) => {
  const user = await db.user.findUnique({
    where: {
      username: userName,
    },
    select: {
      id: true,
    },
  });
  return !Boolean(user);
};

const checkUniqueUseremail = async (email: string) => {
  const userEmail = await db.user.findUnique({
    where: {
      email: email,
    },
    select: {
      id: true,
    },
  });
  return !Boolean(userEmail);
};

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "usernmae must ve string",
        required_error: "where is usernmae",
      })
      .min(3, "Way too short!")
      .max(10, "that is too loooong")
      .toLowerCase()
      .trim()
      .refine(checkUsername, "No Potato")
      .refine(checkUniaueUserName, "this username already taken"),
    email: z
      .string()
      .email()
      .trim()
      .toLowerCase()
      .refine(checkUniqueUseremail, "already Email"),
    password: z.string().min(PASSWORD_MIN_LENGTH),
    // .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    confirm_password: z.string().min(4),
  })
  .refine(({ password, confirm_password }) => password === confirm_password, {
    message: "Both password should be same!",
    path: ["confirm_password"], // 에러 표시할 주체
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const res = await formSchema.safeParseAsync(data);
  if (!res.success) {
    return res.error.flatten();
  } else {
    const hashedPassword = await bcrypt.hash(res.data.password, 12);

    const user = await db.user.create({
      data: {
        username: res.data.username,
        email: res.data.email,
        password: hashedPassword,
      },
    });
    console.log(user);
    // check if username is taken
    // check if email is already used
    // hash password
    // save the user to db
    // log the user in
    // redirect "/home"
  }
}
