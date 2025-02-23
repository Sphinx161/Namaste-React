import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    // props is a JavaScript Object
    // as it is Javascript the props.key must be enclosed in "{}" {props.key}
    // console.log(props); 
    // Destructing of props object :
    // const {resName, cuisine, rating, delTime} = props


    const {resInfo} = props;
    const {info} = resInfo;
    const {name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId} = info;
    // console.log({resInfo.name}); // Not working ?
    console.log({cloudinaryImageId});
    return (
        <div className="res-card" style={{ backgroundColor : "#E6E9F0"}}>
            <img 
                className="res-logo" 
                alt="res-logo" 
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}

                style={{
                    width: "200px",   // Set a fixed width
                    height: "150px",  // Set a fixed height
                    objectFit: "cover", // Ensures the image fills the space without distortion
                    borderRadius: "10px" // Optional: Rounded corners for better UI
                }}
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>⭐ {avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
};

export default RestaurantCard;