


const sql = require('better-sqlite3')
const db = sql('foods.db') 


const mealsFoods = [
    {
        id:1,
        image:"/image/dataBeef.jpg",
        slug:"Handmade-Beef",
        title:"Handmade Beef",
        creator:"By Dangote",
        summary:"Creamy and cheesy Beef, a comforting classic that's always a crowd-pleaser.",
        creatoremail: 'abdullahiabdulkereem0@gmail.com',
    },
    {
        id:2,
        image:"/image/dataBurger.avif",
        slug:"Handmade-Burger",
        creator:"By Abu-Hanifa",
        title:"Handmade Burger",
        summary:" Delicious Burger, a comforting classic that's always a crowd-pleaser.",
        creatoremail: 'jgiver@gmail.com',
    },
    
    {
        id:3,
        image:"/image/dataSalad.avif", 
        slug:"Delicious-Salad",
         creator:"By item7",
         title:"Handmade Salad",
         summary:"Very honey Salad, a comforting classic that's always a crowd-pleaser.",
         creatoremail: 'item7@gmail.com',
    }
    ]


db.prepare(`
    CREATE TABLE IF NOT EXISTS foods(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    image TEXT NOT NULL,
    creator TEXT NOT NULL,
    title TEXT NOT NULL ,
    summary TEXT NOT NULL,
    creatoremail TEXT NOT NULL
    )
`).run()


async function initial(){
const getting = db.prepare(`
    INSERT OR IGNORE INTO foods VALUES(
    @id,
    @slug,
    @image,
    @creator,
    @title,
    @summary,
    @creatoremail
    )
`)

for (const foods of mealsFoods ){
getting.run(foods)
}

}
initial()