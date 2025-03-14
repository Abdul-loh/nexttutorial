import MealsFood from "../meals-food/mealsFood";
import style from "./maingrid.module.css"

export default function MainGrid({ foods }) {
    return<ul className={style.mainsgrid} >
        {foods.map((foods) => <li key={foods.id}>
            <MealsFood {...foods}/> 

        </li>)}
    </ul>



}