
import Link from "next/link";
import product from "./mealsFood.module.css"
import Image from "next/image";

export default function MealsFood({ slug, title, image, summary, creator, }) {
    return (
        <article className={product.mealsProducts}>

            <div className={product.container}>

                   
                <Image src={image} alt={title} width={100} height={100} />
                <div className={product.mealType}>
                    <h3>{slug}</h3>
                    <p className={product.by}>{creator}</p>
                
                <p className={product.aboutSummary}>{summary}</p>
                </div>
                <div className={product.mealDetails}>
                    <Link className={product.details} href={`/meals/${slug}`}>
                        View Details
                    </Link>
                </div>
            
            </div>


        </article>
    )
}