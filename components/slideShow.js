"use client"

import { data } from "@/assets/slideFoodie";
import Image from "next/image";
import classes from "./slideShow.module.css"
import { useEffect, useState } from "react";



export default function SlideShow(){

  const [slidingIndex, setSlidingIndex]  = useState(0)
  useEffect(()=>{
const interval = setInterval(()=>{
setSlidingIndex((prevIndex)=>prevIndex<data.length-1 ? prevIndex+1:0)

},5000)
return ()=> clearInterval(interval)
  },[])


return(
<div className={classes.slideContainer}>
<div className={classes.slideBack}>
 {data.map((item,  index)=>{
 return(
 <div  className={classes.slides}> <Image  key={item.index} src={item.foodimage} className={index===slidingIndex? classes.active:''}  alt={item.alt}/> </div>);
})}
</div>

</div>
    
);
}