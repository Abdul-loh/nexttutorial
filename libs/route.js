import sql from 'better-sqlite3';
import slugify from 'slugify';
import fs from "node:fs"


const db = sql("foods.db");

export async function getFoods(){
   await new Promise((resolve) => setTimeout(resolve, 3000))
    return db.prepare('SELECT * FROM foods').all();

}

export async function getFood(slug){    
 return db.prepare('SELECT * FROM foods WHERE slug  = ?').get(slug);
}


export async function saveMealBase(meal){
meal.slug = slugify(meal.title, {lower:true});

const extension = meal.image.name.split('.').pop();

const fileName = `${meal.slug}.${extension}`
const stream = fs.createWriteStream(`public/image/${fileName}`)
const  imageByte = await meal.image.arrayBuffer()

stream.write(Buffer.from(imageByte), (error)=>{
    if (error){
        throw new Error("saving image failed")
    }
})


meal.image = `/image/${fileName}`

db.prepare(`
    INSERT INTO foods
    (title, summary, creator, image, creatoremail, slug)
    VALUES(
    @title,
    @summary, 
    @creator,
    @image,
    @creatoremail,
    @slug
    )
`).run(meal)
}



 




