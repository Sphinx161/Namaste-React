const RestaurantCard = (props) => {
    // props is a JavaScript Object
    // as it is Javascript the props.key must be enclosed in "{}" {props.key}
    console.log(props); 
    // Destructing of props object :
    // const {resName, cuisine, rating, delTime} = props
    const {resInfo} = props;
    const {name, receipe, rating, price, deliveryTime, image} = resInfo;
    // console.log({resInfo.name}); // Not working ?
    return (
        <div className="res-card" style={{ backgroundColor : "#E6E9F0"}}>
            <img className="res-logo" alt="res-logo" src={image}/>
            <h3>{name}</h3>
            <h4>{receipe}</h4>
            <h4>{rating}</h4>
            <h4>{price}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
};

export default RestaurantCard;