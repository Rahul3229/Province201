import Card from "../Components/Card";

import B1 from "../assets/B1.jpg";

import {useState,useEffect} from 'react';

import Video from "../Components/Video";
import VideoPlay from "../assets/Baking.mp4";
import Lottie from "lottie-react";

import Food_Walks from "../SVG_Jsons/Food_Walks.json";

import Marquee from "react-fast-marquee";

import Vert1 from "../assets/cus2.jpg";
import Vert2 from "../assets/cus3.jpg";
import Vert3 from "../assets/cus5.jpg";
import Vert4 from "../assets/icecloud.jpg";
import Hor1 from "../assets/chef1.jpg";
import Hor2 from "../assets/chef2.jpg";
import Hor4 from "../assets/cus1.jpg";
import Hor5 from "../assets/bread.jpg";
import Story1 from "../assets/story1.jpg";
import Story2 from "../assets/FoodTruck.jpg";

import Pan from "../SVG_Jsons/Pasta.json";
import Happy_Burger from "../SVG_Jsons/HappyBurger.json";

import SliderComponent from "../Components/SliderComponent";
import TextComponent from "../Components/TextComponent";

import Button from "../Components/Button";

import Sirisha_Sandwich from "../SVG_Jsons/Mr.Sandwich.json";
import SVG1 from "../SVG_Jsons/Fries.json";
import SVG2 from "../SVG_Jsons/Taco.json";
import SVG3 from "../SVG_Jsons/Burger.json";
import SVG4 from "../SVG_Jsons/Kitchen.json";
import SVG5 from "../SVG_Jsons/Coffee_Dog.json";
import SVG6 from "../SVG_Jsons/Bobba.json";
import SVG7 from "../SVG_Jsons/Icecream1.json";
import SVG8 from "../SVG_Jsons/Bread.json";

import Image1 from "../assets/dining1.jpg"; 
import Image2 from "../assets/dining2.jpg"; 
import Image3 from "../assets/Res.jpg"; 
import Image4 from "../assets/Vert7.jpg"; 
import Image5 from "../assets/dining3.jpg"; 


export default function Landing()
{

    const Line1="EVERYBODY"
    const Line2="LOVES A"
    const Line3="GOOD STORY"
    const Text1="Steve Cabalar was no ordinary high school graduate. He finished high school at the age of 12, leaving everyone in awe of his genius and ambition. At 14, he conquered culinary arts school and opened Lancaster’s beloved burger spot, Cabalar Meat Co. in 2018. Or at least that is what the legends say."


    const Line4="BRING JOY TO"
    const Line5="WHERE EVER"
    const Line6="YOU ARE"
    const Text2="The Cabalar Food Truck brings handheld happiness to your special event. Whatever the occasion, our smash burgers, chicken sandwiches, and milkshakes are sure to please any crowd."

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    
      useEffect(() => {
        // Function to update state when window is resized
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
          });
        };
    
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);


    return (
        <>

        <div class="fixed m-auto left-100 top-[30vh] w-[15vw] bg-amber-900 z-5 flex items-center justify-center">
        <h class="text-2xl font-bold">Viewport Resolution</h>
        <p>Width: {windowSize.width}px</p>
        <p>Height: {windowSize.height}px</p>
        </div>

        <div class="relative">

        <Video VideoSrc={VideoPlay }/>
        

        <div class="h-[60vh] w-[95%]  m-auto mt-[3%] flex justify-between">
        <div class="w-[55%] h-[100%]  flex items-center">
        <p class=" font-bold text-black 2xl:text-4xl xl:text-4xl lg:text-4xl leading-9">Province201 is the happiest place on earth, or at least in Fairborn City. As a combination butchery meets burger spot with a real happy bar, we pair our mouthwatering burgers, sandwiches, fries, and sides with some mighty tasty bevvies, all made with the best ingredients!</p>
        </div>
        <div class=" w-[35%] h-[100%] flex items-center justify-center">
        <p class="absolute mt-[1.5%] text-black font-medium text-2xl leading-7">Hours of Operation:<br />Monday-Friday:11:00AM-9:00PM<br />Saturday-Sunday:Closed (We play Sequence)</p>
        <div class="w-[40vw]">
        <Lottie animationData={Food_Walks} loop={true} />
        </div>
        </div>
        </div>

        <Marquee speed={120} gradient={false} direction="right">

        <div class=" flex items-center ">
        
        <SliderComponent Condition={true} ImageSRC={Vert1}/>
        <SliderComponent Condition={false} ImageSRC={Hor1}/>
        <SliderComponent Condition={true} ImageSRC={Vert2}/>
        <SliderComponent Condition={false} ImageSRC={Hor2}/>
        <SliderComponent Condition={true} ImageSRC={Vert3}/>
        <SliderComponent Condition={false} ImageSRC={Hor4}/>

        </div>

        </Marquee>


        <TextComponent ImageSRC={Story1} SVGSource={Pan} Line1={Line1} Line2={Line2} Line3={Line3} Text={Text1} Condition={true}/>
        <TextComponent ImageSRC={Story2} SVGSource={Happy_Burger} Line1={Line4} Line2={Line5} Line3={Line6} Text={Text2} Condition={false}/>


        <div class="m-auto leading-0.02 flex flex-col items-center border-2 border-black">
        <div>
        <p class="text-6xl text-black border-2 border-black">Try Our</p><br />
        <p class="Heading1 text-4xl text-black font-bold border-2 border-black leading-0">DIVERSE ARRAY OF<br />FOODS</p>
        </div>
        </div>


        <div class="border-2 border-black flex justify-evenly">
        <Card CardImage={B1} FoodName="Dukie Patty" FoodPrice="$4.99"/>
        <Card CardImage={B1} FoodName="Dukie Patty" FoodPrice="$4.99"/>
        <Card CardImage={B1} FoodName="Dukie Patty" FoodPrice="$4.99"/>
        </div>

       
        <div class="m-auto mt-[5%] leading-0.02 flex flex-col items-center border-2 justify-center border-black">
            <div>
            <p class=" text-4xl text-black font-medium leading-0">EXPLORE OUR</p><br/>
            <Button ButtonText="Menu"/>
            <div class="w-[15vw]">
            <Lottie animationData={Sirisha_Sandwich} loop={true} />
            </div>
            </div>
        </div>


        <div class="border-2 border-black flex justify-evenly">
        <Card CardImage={B1} FoodName="Dukie Patty" FoodPrice="$4.99"/>
        <Card CardImage={B1} FoodName="Dukie Patty" FoodPrice="$4.99"/>
        <Card CardImage={B1} FoodName="Dukie Patty" FoodPrice="$4.99"/>
        </div>


        <div class="h-[100vh] w-[100w] border-2 border-black flex flex-wrap">
        <div class="w-1/6">
        <Lottie animationData={SVG1} loop={true} />
        </div>
        <div class="w-1/4">
        <Lottie animationData={SVG2} loop={true} />
        </div>
        <div class="w-1/6">
        <Lottie animationData={SVG3} loop={true} />
        </div>
        <div class="w-1/3 ml-10">
        <Lottie animationData={SVG4} loop={true} />
        </div>
        <div class="w-1/3">
        <Lottie animationData={SVG5} loop={true} />
        </div>
        <div class="w-1/4">
        <Lottie animationData={SVG6} loop={true} />
        </div>
        <div class="w-1/6">
        <Lottie animationData={SVG7} loop={true} />
        </div>
        <div class="w-1/4">
        <Lottie animationData={SVG8} loop={true} />
        </div>
        <div>
        </div>
        </div>


        <div class="mt-[15%] ml-[1.5%]">
        <h class="Heading text-7xl Logo">ARTISANAL SWEET, <br/> AUTHENTIC TASTE,<br/><span class="text-black Logo1">GUARANTEED WELL-BEING.</span></h>
        </div>
        <div  className="Circluar">
            <svg width="10%" height="10%" viewBox="0 0 400 400" className="circleSvg" >
                <path id="circlePath" d="M 30 200 a 120, 120 0 1, 1 320, 0 a 120, 120 0 1, 1 -320, 0" fill="rgb(255, 240, 194)"></path>
            <text className="textCircle">
                <textPath href="#circlePath">
                 * willy * wonka * certified * fresh * candy * golden * tickets *   
                </textPath>
            </text>
            </svg>
        </div>

        <div class="h-[100vh] w-[100vw] border-2 border-black flex items-center">
            <div class="h-[20vh] w-[30vw]">
            <img src={Image1} class="rounded-2xl"></img>
            </div>
            <div class="h-[15vh] w-[25vw]">
            <img src={Image2} class="rounded-2xl h-[200%] w-[100%] object-cover"></img>
            </div>
            <div class="h-[55vh] w-[50vw]">
            <img src={Image5} class="rounded-2xl h-[100%] w-[100%] object-cover"></img>
            </div>
            <div class="h-[40vh] w-[35vw]">
            <img src={Image3} class="rounded-2xl h-[100%] w-[100%] object-cover"></img>
            </div>
            <div class="h-[20vh] w-[30vw]">
            <img src={Image4} class="rounded-2xl"></img>
            </div>
        </div>

            <div class="h-[100vh] w-[100vw] border-2 border-black flex items-center flex-col justify-center bg-black ">

            <div>
            <h class="Heading text-amber-50 text-[10rem]">PROVINCE201</h>
            </div>
            <Button ButtonText="FaceBook" />

        </div>


</div>



        </>
    )
}