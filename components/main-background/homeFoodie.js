'use client'

import  foodieLogo  from '@/assets/foodie.jpg'

import Link from 'next/link';

import  './homeFoodie.css';


import MainBackground from './MainBackground';
import { usePathname } from 'next/navigation';

export default function HomeFoodie(){

    const path = usePathname();
    return(

        <>
       <div>
        <MainBackground/>
       </div>
        <header className="container">
            <Link  className="foodieContainer"  href="/">
            <img className="containerImg" src={foodieLogo.src} alt="food"/>
           <span className='imgspan'>NextLevel Food</span> 
            </Link>
            <nav>
                <ul>

                    <li><Link className={path.startsWith("/meals")?"active":undefined} href="/meals">Browse Meals</Link></li>
                    <li><Link  className={path.startsWith("/community")?"active":undefined} href="/community">Foodies Community</Link></li>
                </ul>
            </nav>

        </header>
        </>
    );
} 