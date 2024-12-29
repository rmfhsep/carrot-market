import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface SessionContent {
  id?: number;
}

export default async function getSession() {
  return await getIronSession<SessionContent>(cookies(), {
    cookieName: "delicious-carrort",
    password: 'asdasdw1929dkaskdaisjda9djaksldjkad9',
    // password: process.env.COOKIE_PASSWORD!,
  });
}
