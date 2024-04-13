import CardCategory from "./CardCategory";
import carpinteriaLogo from "../assets/categoryLogos/carpinteriaLogo.jpg"
import plomeriaLogo from "../assets/categoryLogos/plomeriaLogo.jpg"
import gasistaLogo from "../assets/categoryLogos/gasistaLogo.png"
import electricistaLogo from "../assets/categoryLogos/electricistaLogo.jpg"
import cerrajeroLogo from "../assets/categoryLogos/cerrajeroLogo.jpg"
import mecanicoLogo from "../assets/categoryLogos/mecanicoLogo.webp"
import albanilLogo from "../assets/categoryLogos/albanilLogo.webp"
import herreroLogo from "../assets/categoryLogos/herreroLogo.webp"
import pintorLogo from "../assets/categoryLogos/pintorLogo.jpeg"
import jardineroLogo from "../assets/categoryLogos/jardineroLogo.jpg"
import otrosLogo from "../assets/categoryLogos/otrosLogo.jpg"

const CategoryGrid = () => {
    return (
        <div className="gridCategory mb-5">
            <CardCategory imagen={carpinteriaLogo} nombre={"Carpinteros"}></CardCategory>
            <CardCategory imagen={gasistaLogo} nombre={"Gasistas"}></CardCategory>
            <CardCategory imagen={cerrajeroLogo} nombre={"Cerrajeros"}></CardCategory>
            <CardCategory imagen={mecanicoLogo} nombre={"Mecánicos"}></CardCategory>
            <CardCategory imagen={electricistaLogo} nombre={"Electricistas"}></CardCategory>
            <CardCategory imagen={albanilLogo} nombre={"Albañiles"}></CardCategory>
            <CardCategory imagen={plomeriaLogo} nombre={"Plomeros"}></CardCategory>
            <CardCategory imagen={pintorLogo} nombre={"Pintores"}></CardCategory>
            <CardCategory imagen={herreroLogo} nombre={"Herreros"}></CardCategory>
            <CardCategory imagen={jardineroLogo} nombre={"Jardineros"}></CardCategory>
            <CardCategory imagen={otrosLogo} nombre={"Otros"}></CardCategory>
        </div>
    );
};

export default CategoryGrid;