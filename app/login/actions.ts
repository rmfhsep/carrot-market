"use server";
export async function handleForm(prevState: any, formData: FormData) {
  "use server";
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return {
    errors: "wrong!",
  };
}
