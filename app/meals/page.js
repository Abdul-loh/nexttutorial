
import MainGrid from "@/components/meals/main-grid";
import meals from "./page.module.css"
import Link from 'next/link'
import { getFoods } from "@/libs/route";
import { Suspense } from "react";

export const metadata = {
    title: "All meals",
    description: "Browse the delicious meals shared by our vibrant community.",
  };

async function Meal(){
const foods = await getFoods()
return <MainGrid foods={foods} />

}

export default function MealsPage() {
  
return (

        <>
            <header className={meals.recipeAdvice}>
                <h3>Delicious meals, created <span className={meals.recipe}>by you<span></span></span></h3>
                <div className={meals.recipeMeals}><p>Choose your favorite recipe and cool it yourself. it is easy and fun</p>
                    <Link className={meals.recipeShare} href={"./meals/share"}>Share Your Favorite Recipe</Link>
                </div>
            </header>

            <main className={meals.mains}>
            <Suspense fallback={<div className={meals.loadme}> <p >Loading......</p></div>}> 
            <Meal/>
            </Suspense>

            </main>

        </>

    );
}