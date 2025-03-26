import Button1 from "./Button";
import Logo from "./Logo";


export default function Nav()
{
    return (
        <>
        <div class="h-[9vh] w-[100vw]   mt-[1.5%]">
        <div class="h-[100%] w-[95%] border-amber-700  m-auto flex justify-between items-center p-0">
        <Logo />
        <Button1 ButtonText="Home" />
        <Button1 ButtonText="Menu" />
        <Button1 ButtonText="Events" />
        <Button1 ButtonText="About Us" />
        <Button1 ButtonText="Account" />

        </div>

        </div>
        </>
    )
}