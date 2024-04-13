import CardCategory from "./CardCategory";
import carpinteria from "../assets/carpinteriaLogo.png"


const CategoryGrid = () => {
    return (
        <div className="gridCategory">
            <CardCategory imagen={carpinteria}></CardCategory>
            <CardCategory imagen={carpinteria}></CardCategory>
            <CardCategory imagen={carpinteria}></CardCategory>

        </div>
    );
};

export default CategoryGrid;