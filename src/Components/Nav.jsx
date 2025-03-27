import Button1 from "./Button";
import Logo from "./Logo";
// import Nav from "../assets/nav.svg";

import Nav1 from "../assets/nav.svg";
import Button from "./Button";

import  {useState, useEffect} from "react";

export default function Nav()
{

    const [navcondition,setnavcondition]=useState(false);

    const clickEvent=()=>{
        setnavcondition(!navcondition);
        console.log(navcondition);
        console.log("here");
    }

    return (
        <>
        <div class="h-[9vh] w-[100vw]   mt-[1.5%]">
        <div class="h-[100%] w-[95%] border-amber-700  m-auto flex justify-between items-center p-0">
        <Logo />
  

            <div class={ `w-[3vw] h-[5vh]  relative z-11 flex  justify-between flex-col ${navcondition?'NavBarsActive':'NavBarsInActive'}`} onClick={clickEvent}>
            <div class={`h-[25%] w-[100%] bg-black ${navcondition?'NavBoxActive':'NavBoxInActive'}`}></div>
            <div class={`h-[25%] w-[100%] bg-black ${navcondition?'NavBoxActive':'NavBoxInActive'}`}></div>
            <div class={`h-[25%] w-[100%] bg-black ${navcondition?'NavBoxActive':'NavBoxInActive'}`}></div>

            </div>
            
        </div>
        <div className={`mt-[1%] h-[103vh] w-[100vw] bg-[rgba(0,0,0,0.9)] flex flex-col justify-evenly relative z-10 top-[-15vh] ${navcondition?'Active':'Inactive'}`}>

        <button class="text-2xl text-amber-50 border-0 bg-none">Home</button>
        <button class="text-2xl text-amber-50 border-0 bg-none">Menu</button>
        <button class="text-2xl text-amber-50 border-0 bg-none">Reservations</button>
        <button class="text-2xl text-amber-50 border-0 bg-none">Events</button>
        <button class="text-2xl text-amber-50 border-0 bg-none">Account</button>

        </div>

        </div>
        </>
    )
}