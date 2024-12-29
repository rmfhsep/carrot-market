import {ReactNode} from "react";
import TabBar from "@/components/TabBar"
export default function TabLayout   ({children}: {children: ReactNode}) {
    return <div>
        {children}
        <TabBar />
    </div>

}