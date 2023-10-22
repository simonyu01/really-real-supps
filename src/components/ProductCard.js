/*
Product:

id int
name string
price double
nutrition


product ID format:


*/
import { Link } from 'react-router-dom';
import Pre from "../components/Pre";
import Pill from "../components/Pill";
import Pro from "../components/Pro";
import Bundle from "./Bundle";

const routeNames = {
    0: "pre_workout",
    1: "whey_isolate",
    2: "clear_whey",
    3: "creatine",
    4: "multivitamins",
    5: "the_starter",
    6: "the_post",
    7: "the_essential",
}

function ProductCard({id, color, className}) {

    let prodImg;

    if(Number(id) === 0) {
        prodImg = <Pre color = {color} className={className}/>
    }
    else if(Number(id) === 1) {
        prodImg = <Pro color = {color} className={className}/>
    }
    else if(Number(id) === 2){
        prodImg = <Pill color = {color} className={className}/>
    }
    else if(Number(id) === 3) {
        prodImg = <Bundle id = {0} className={className}/>
    }
    else if(Number(id) === 4) {
        prodImg = <Bundle id = {1} className={className}/>
    }
    else {
        prodImg = <Bundle id = {2} className={className}/>
    }

    // console.log(`card id: ${id}`);

    const routeName = routeNames[id % 6];
    let newClassName = "";
    className !== undefined ? newClassName = "big-product-card" : newClassName = "product-card";
    if(className === undefined) {
        return (
            <Link to = {`/products/${routeName}_${id}`} className = {newClassName}>
                {prodImg}
            </Link>
        )
    }
    else {
        return (
            <div className = {newClassName}>
                {prodImg}
            </div>
        )
    }
   
}



export default ProductCard;