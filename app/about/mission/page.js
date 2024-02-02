// "use client";

import Button from "@/app/components/Button";
import Image from "next/image";

function MissionPage(){
    return (
        <main className="mt-10">
            <div>About Mission us Page</div>
            <Button/>
            <div className="w-[400px]">
            <Image placeholder="blur" className="mt-2" src={`/images/mohib.jpg`} alt="myImg" />
            

            </div>
        </main>
    )
}

export default MissionPage;