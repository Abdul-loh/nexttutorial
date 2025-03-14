"use client"

import { useRef, useState } from "react";
import picker from "./imagePicker.module.css"
import Image from "next/image";
import uploads from "@/assets/upload.png";

export default function ImagePicker({ label, name }) {
    const [saveImage, setSaveImage] =useState(false)


    
    const connectInput = useRef();
    const onclickMe = () => {
        connectInput.current.click();
    }
    

    
    return (

        <div>
            <p>
                <label htmlFor={name}>{label}</label>
                <input onChange={(e)=>setSaveImage(e.target.files[0])} ref={connectInput} type="file" id={name} name={name} accept="image/jpeg, image/png" required hidden />
            </p>

<div className={picker.UploasImage} >

   { !saveImage? <Image src={uploads}  alt="image picked by user" width={100} height={100}/>:<Image className={picker.urlImg} src={URL.createObjectURL(saveImage)}  alt="image picked by user" width={100} height={100} style={{objectFit:"cover"}}/>}

         <div>
               <button onClick={onclickMe} className={picker.pickerBtn} type="button">ImagePicker</button>
            
        </div>
</div>

</div>
    );
}
