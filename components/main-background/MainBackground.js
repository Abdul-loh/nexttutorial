import background from "./MainBackground.module.css";
import backsvg from "@/assets/wave.svg"
export default function MainBackground() {
    return (<div className={background.mainbackground}>
        <img className={background.mainback} src={backsvg.src} alt="wave" />
    </div>);

}