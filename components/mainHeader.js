
"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

import food from "@/assets/foodie.jpg";
import beaf from "@/assets/beefmeat.jpg";
import burg from "@/assets/burger.jpg";
import rabbit from "@/assets/rabbitmeat.jpg";
import salad from "@/assets/beefmeat.jpg";

import slide from "./mainHeader.module.css"

const assets = [
    { image: food },
    { image: beaf  },
    { image: burg },
    { image: rabbit },
    { image: salad },
  ];

export default function SlideImage(){

   
    return(
<div className={slide["slideshow"]}>

 { assets.map((item, index)=>(
    <Image key={index} src={item.image} 
    alt={item.alt} width={20} height={20}/>
 ))}   


</div>
       
    );
}

