import { getFood } from "@/libs/route";
import Image from "next/image";
import each from "./eachmeal.module.css"
import Unfound from "../unfound";


export async function generatedMetadata(){
  const meals = getFood(params.mealSlug);

  if(!meals){
    return <Unfound/>
    }
  return{
    title:meals.title,
    description:meals.description,
  }
}
export  default async  function EachMeal({params}){
const meals =  await getFood(params.mealSlug);


    return(
    <>
    <header className={each.eachMeal}>
    <figcaption> <Image  className={each.img} src={meals.image} alt={meals.title} width={350} height={350}/> <figure></figure>  <h1>{meals.slug}</h1> </figcaption>
   
      <div className={each.aboutCreator}>
    
    <div className={each.mail}>mails us on: <a href={`mailto:${meals.creatoremail}`}> {meals.creator}</a></div>
      </div>
      <div className={each.sum}>
     <h3>{meals.summary}</h3>   
      </div>
    </header> 

 
    </>
    );
      
    
}

