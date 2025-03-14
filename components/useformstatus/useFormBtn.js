"use client"
import sharing from "./useForm.module.css"
import { useFormStatus } from "react-dom";


export default function MenuForm(){
   const {pending} =  useFormStatus()
   

   return <div className={sharing.shareBtn}> <button className={sharing.sharebtm} type="submit" disabled={pending}>
{pending?"Submitting.....":"Share meal"}
   </button>
   </div>

}
