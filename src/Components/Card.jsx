import B1 from "../assets/B1.jpg";


export default function Card({CardImage,FoodName,FoodPrice})
{
    return(
        <div class="border-2 border-solid border-black w-[25vw] h-[75vh] m-auto overflow-hidden relative">
            <div class="border-b-2 border-solid border-black w-[100%] h-[10%] flex items-center p-0">
                <h class="Heading 2xl:text-[2.0rem] xl:text-[1.8rem] lg:text-[1.5rem] font-extrabold text-6xl text-black mt-[-0%]">{FoodName}</h>
            </div>
            <div class="border-b-2 border-solid border-black w-[100%] h-[2vh] flex items-center ">
                <p class="2xl:text-[0.7rem] 2xl:mt-[-0.25%] xl:text-[0.7rem] xl:mt-[-0.5%] lg:text-[0.7rem] text-black font-medium ">here comes your man!</p>
            </div>
            <div class="flex w-[100%] h-[10%] 2xl:h-[8%] border-b-2 border-black">

                <div class='w-[50%]  border-r-2 border-black flex items-center'><h class="Heading font-extrabold 2xl:mt-[0%] 2xl:text-[1.6rem] lg:text-[1.7rem] text-4xl text-black mt-[-1%]">{FoodPrice}</h></div>
                <div class="w-[50%] flex items-center"><h class=" 2xl:text-[1.3rem] xl:text-[1.2rem] lg:text-[1.1rem] text-black font-bold text-2xl cursor-pointer">ADD TO CART </h></div>
            </div>
            <div class="h-[78%] w-[100%] 2xl:h-[80%]   flex justify-center items-center">
            <div class="h-[78%] w-[72%]    rounded-2xl overflow-hidden">
            <img src={CardImage} class="h-[100%] w-[100%]  object-cover"></img> 
            </div>
            </div>
        </div>
    )
}