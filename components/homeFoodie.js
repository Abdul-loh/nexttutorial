
import  foodieLogo  from '@/assets/foodie.jpg'

import Link from 'next/link';
import classes from "./homeFoodie.css"
export default function HomeFoodie(){
    return(
        <header className="container">
            <Link  className="foodieContainer"  href="/">
            <img className="containerImg" src={foodieLogo.src} alt="food"/>
            NextLevel Food
            </Link>
            <nav>
                <ul>
                    
                    <li><Link href="/meals">Browse Meals</Link></li>
                    <li><Link href="/community">Foodies Community</Link></li>
                </ul>
            </nav>

        </header>
    );
} 