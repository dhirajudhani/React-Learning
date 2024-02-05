import CDN_URL from "../utils/constant";

const RestaurantCard = (props) => {
    // const {resName, cuisine} = props;
    console.log(props)
    const {resData} = props
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.data;
    
    const styleCard = {
        backgroundColor:"#f0f0f0"
    }
    return (
        <div className="res-card" style={styleCard}>
            <img src={CDN_URL+cloudinaryImageId} alt="res-logo" className="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>₹{costForTwo / 100} FOR TWO</h4>
        </div>
    )
}

export default RestaurantCard;