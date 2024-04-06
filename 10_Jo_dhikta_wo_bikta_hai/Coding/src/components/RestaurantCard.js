import {CDN_URL} from "../utils/constant";


const RestaurantCard = (props) => {
    // const {resName, cuisine} = props;
    // console.log(props)
    const {item} = props;
    const { name, avgRating, cuisines,costForTwo,   cloudinaryImageId } = item || {};
    const imgsrc = `${CDN_URL}/${cloudinaryImageId}`;

    const styleCard = {
        backgroundColor:"#f0f0f0"
    }
    return (
        <div className="m-4 p-4 w-[300px] bg-gray-100 hover:bg-gray-200 rounded-lg" >
            <img src={imgsrc} alt="res-logo" className="rounded-xl h-56 w-72 bg-cover" />
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{cuisines && cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        <div>
            
            <label >Promoted</label>
            <RestaurantCard {...props}/>
        </div>
    }
}


export default RestaurantCard;