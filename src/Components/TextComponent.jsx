import Lottie from "lottie-react";

export default function TextComponent({ImageSRC,SVGSource,Line1,Line2,Line3,Text,Condition})
{
    return (
        <>
        {
            Condition?(
                <div class="h-[100vh] w-[95vw] border-2 border-black m-auto flex">
        <div class="h-[100%] w-[40%] border-2 border-black border-dotted flex flex-col items-center justify-center ml-[3%]">
            <div class="w-[40vw] h-[50vh]  ">
            <img src={ImageSRC} class="h-[170%] w-[110%] object-cover rounded-2xl rotate-5"></img>
            </div>
            <div class="w-[35%]">
            <Lottie animationData={SVGSource} loop={true} />
            </div>
        </div>
        <div class="h-[100%] w-[60%] border-2 border-black border-dotted flex flex-col items-start justify-center text-left">
            
        <h class="Heading text-7xl text-black text-left border-black border-2 ml-[14%]">{Line1}<br/>{Line2}<br/><span class="Logo">{Line3}</span></h> 
        <br /><br />
        <p class="xl:text-[1.3rem] lg:text-[1.1rem] leading-6 text-black font-medium w-[70%] text-left border-black border-2 ml-[14%]">{Text}</p>  
        </div>
         
        </div>
            ):(
                <div class="h-[100vh] w-[95vw] border-2 border-black m-auto flex flex-row-reverse">
        <div class="h-[100%] w-[40%] border-2 border-black border-dotted flex flex-col items-center justify-center mr-[3%]">
            <div class="w-[40vw] h-[50vh]  ">
            <img src={ImageSRC} class="h-[170%] w-[110%] object-cover rounded-2xl -rotate-5"></img>
            </div>
            <div class="w-[35%]">
            <Lottie animationData={SVGSource} loop={true} />
            </div>
        </div>
        <div class="h-[100%] w-[60%] border-2 border-black border-dotted flex flex-col items-start justify-center text-left">
            
        <h class="Heading text-7xl text-black text-left border-black border-2 ml-[0%]">{Line1}<br/>{Line2}<br/><span class="Logo">{Line3}</span></h> 
        <br /><br />
        <p class="xl:text-[1.3rem] lg:text-[1.1rem] leading-6 text-black font-medium w-[70%] text-left border-black border-2 ml-[0%]">{Text}</p>  
        </div>
         
        </div>
            )
        }
        
        </>
    )
}