import CardCategory from "./CardCategory";
import carpinteriaLogo from "../assets/categoryLogos/carpinteriaLogo.jpg"
import plomeriaLogo from "../assets/categoryLogos/plomeriaLogo.jpg"
import gasistaLogo from "../assets/categoryLogos/gasistaLogo.png"
import electricistaLogo from "../assets/categoryLogos/electricistaLogo.jpg"


const CategoryGrid = () => {
    return (
        <div className="gridCategory mb-5">
            <CardCategory imagen={carpinteriaLogo} nombre={"Carpinteria"}></CardCategory>
            <CardCategory imagen={plomeriaLogo} nombre={"Plomeria"}></CardCategory>
            <CardCategory imagen={gasistaLogo} nombre={"Gasista"}></CardCategory>
            <CardCategory imagen={electricistaLogo} nombre={"Electricista"}></CardCategory>
            <CardCategory imagen={carpinteriaLogo} nombre={"Carpinteria"}></CardCategory>
            <CardCategory imagen={plomeriaLogo} nombre={"Plomeria"}></CardCategory>
            <CardCategory imagen={gasistaLogo} nombre={"Gasista"}></CardCategory>
            <CardCategory imagen={electricistaLogo} nombre={"Electricista"}></CardCategory>
            <CardCategory imagen={carpinteriaLogo} nombre={"Carpinteria"}></CardCategory>
            <CardCategory imagen={plomeriaLogo} nombre={"Plomeria"}></CardCategory>
            <CardCategory imagen={gasistaLogo} nombre={"Gasista"}></CardCategory>
        </div>
    );
};

export default CategoryGrid;