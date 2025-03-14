"use server"


import { redirect } from "next/navigation"
import { saveMealBase } from "./route"
import { revalidatePath } from "next/cache"



export async function submitServer(pprevState, formData){

    function isCheck(text){
 return !text || text.trim()===""
    }

const meal = {
    title:formData.get('title'),
    summary:formData.get("summary"),
    creator:formData.get("creator"),
    image:formData.get("image"),
    creatoremail:formData.get("email")
}


if(isCheck(meal.title) || isCheck(meal.summary) || isCheck(meal.creator)|| isCheck(meal.creatoremail) || !meal.image || meal.image === 0 || !meal.creatoremail.includes('@')){
 {
   return{
    message:'invalid input.'
   }
}
}

await saveMealBase(meal);
revalidatePath('/meals', 'page');
redirect('/meals');
}