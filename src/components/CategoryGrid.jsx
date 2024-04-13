import CardCategory from "./CardCategory";
import carpinteriaLogo from "../assets/categoryLogos/carpinteriaLogo.jpg"
import plomeriaLogo from "../assets/categoryLogos/plomeriaLogo.jpg"
import gasistaLogo from "../assets/categoryLogos/gasistaLogo.png"
import electricistaLogo from "../assets/categoryLogos/electricistaLogo.jpg"


const CategoryGrid = () => {
    return (
        <div className="gridCategory">
            <CardCategory imagen={carpinteriaLogo} nombre={"Carpinteria"}></CardCategory>
            <CardCategory imagen={plomeriaLogo} nombre={"Plomeria"}></CardCategory>
            <CardCategory imagen={gasistaLogo} nombre={"Gasista"}></CardCategory>
            <CardCategory imagen={electricistaLogo} nombre={"Electricista"}></CardCategory>

        </div>
    );
};

export default CategoryGrid;