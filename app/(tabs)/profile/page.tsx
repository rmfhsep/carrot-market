import React from "react";
import getSession from "@/lib/session";
import db from "@/lib/db";
import {notFound, redirect} from "next/navigation";

async function getUser() {
    const session = await getSession()
    if (session.id) {
        const user = await db.user.findUnique({
            where: {
                id: session.id,
            },

        })
        if (user) {
            return user
        }
    }
    notFound();


}

const Profile = async () => {
    const user = await getUser()

    const logOut = async () => {
        "use server"
        const session = await getSession()
        await session.destroy();

        redirect('/')
    }

    return <div>
        <div>Welcome {user.username}</div>
        <form action={logOut}>
            <button>로그아웃</button>
        </form>
    </div>
};

export default Profile;
