import Image from "next/image";
import style from "./page.module.css"
import recipe from "@/assets/foodBuying.png"
import recipe1 from "@/assets/recipeimages.jpg"
import recipe2 from "@/assets/meatIcon2.jpg"
import recipe3 from "@/assets/meatIcon3.jpg"
import recipe4 from "@/assets/meatIcon4.jpg"
import recipe5 from "@/assets/meatIcon5.jpg"
export default function CommunityPage() {
    return (
        <>
            <header className={style.foodCommunity}>
                <h2>one shared passion: <span>Food</span></h2>
                <p>Join our community and share your favorite recipes!</p>
            </header>

            <main className={style.CommunityRecipe}>
                <h3>Community Perks</h3>

                <div className={style.foodRecipe}>
                    <Image src={recipe1} alt="Recipe" />
                    <p>share and discover recipe</p>
                </div>


                <div className={style.meatrecipe}>
                    <Image src={recipe} alt="Recipe" />
                    <p>Find new friends to enjoy your meat together</p>
                </div>


                <div className={style.comPerks}>
                    <Image src={recipe3} alt="Recipe" />
                    <p>Find new friends & like-minded people</p>
                </div>


            </main>
        </>
    );
}