export default function Video ({VideoSrc})
{
    return (
        <>
        <div class="h-[80vh] w-[95vw]  m-auto mt-[2%]  overflow-hidden">
        <video src={VideoSrc} loop autoPlay muted class="h-[100%] w-[120%] object-cover border-4 border-black rounded-2xl"/>
        </div>
        </>
    )
}