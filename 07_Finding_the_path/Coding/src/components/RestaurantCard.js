import CDN_URL from "../utils/constant";


const RestaurantCard = (props) => {
    // const {resName, cuisine} = props;
    // console.log(props)
    const {item} = props
    const { name, avgRating, cuisines,costForTwo,   cloudinaryImageId } = item || {};
    const imgsrc = `${CDN_URL}/${cloudinaryImageId}`;

    const styleCard = {
        backgroundColor:"#f0f0f0"
    }
    return (
        <div className="res-card" style={styleCard}>
            <img src={imgsrc} alt="res-logo" className="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisines && cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;