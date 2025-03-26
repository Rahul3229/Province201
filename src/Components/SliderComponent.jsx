export default function SliderComponent({ImageSRC,Condition})
{
    return (
        <>
        {
            Condition?
            (            <div class="h-[90vh] w-[30vw]  p-2.5">
                         <img src={ImageSRC} class="h-[100%] w-[100%] object-cover rounded-2xl"></img>   
                         </div>)            
            :
            (            <div class="h-[50vh] w-[45vw]  p-2.5">
                         <img src={ImageSRC} class="h-[100%] w-[100%] object-cover rounded-2xl"></img>  
                         </div>)
            
        }
        </>
    )
}