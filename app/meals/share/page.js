"use client"

import ImagePicker from "@/components/imagePicker/imagePicker";
import sharing from "./ShareFood.module.css"
import MenuForm from "@/components/useformstatus/useFormBtn";
import { submitServer } from "@/libs/submitServer";
import { useActionState } from "react";





export default function ShareFood() {
const [state, actionState]= useActionState(submitServer, {message:null});

    return (
        <div className={sharing.formContainer}>
            <h1>Share your <span>favorite meal</span></h1>
            <p>or any other meal you fell neeeds sharing!</p>

            <form className={sharing.myForm} action={actionState}>
                <div className={sharing.formName}>
                    <p>
                        <label htmlFor="name">YOUR NAME</label>
                        <input type="text" id="name" name="name" required />
                    </p>

                    <p>
                        <label htmlFor="email">YOUR EMAIL</label>
                        <input type="email" id="email" name="email" required />
                    </p>

                </div>

        
                <p>
                    <label htmlFor="title">TITLE</label>
                    <input type="text" id="title" name="title" required />
                </p>

                <p>
                    <label htmlFor="creator">ABOUT CREATOR</label>
                    <input type="text" id="creator" name="creator" required />
                </p>

                <p>
                    <label htmlFor="summary">SHORT SUMMARY</label>
                    <input  type="text" id="summary" name="summary" required />

                </p>

                <ImagePicker name="image" label="YOUR IMAGE"/>

 {state.message && <p className={sharing.message}>{state.message}</p> }
                <div className={sharing.shareBtn}>

                 < MenuForm />
                </div>
            </form>

        </div>
    );
}