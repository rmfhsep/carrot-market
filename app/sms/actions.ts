"use server";
import { z } from "zod";
import validator from "validator";
import { redirect } from "next/navigation";

const phoneSchema = z.string().trim();
//   .refine((phone) => {
//     validator.isMobilePhone(phone, "ko-KR"), "wrong phone number";
//   });
const tokenSchema = z.coerce.number().min(100000).max(999999);

interface ActionState {
  token: boolean;
}

export async function smsLogin(prevState: ActionState, formData: FormData) {
  const phone = formData.get("phone");
  const token = formData.get("token");

  if (!prevState.token) {
    const res = phoneSchema.safeParse(phone);
    console.log(res.error);
    if (!res.success) {
      return {
        token: false,
        error: res.error.flatten(),
      };
    } else {
      return {
        token: true,
      };
    }
  } else {
    //   token true
    const res = tokenSchema.safeParse(token);
    if (!res.success) {
      return {
        token: true,
        error: res.error.flatten(),
      };
    } else {
      redirect("/");
    }
  }

  console.log(formData);
  console.log(typeof formData.get("token"));

  console.log(typeof tokenSchema.parse(formData.get("token")));
}
