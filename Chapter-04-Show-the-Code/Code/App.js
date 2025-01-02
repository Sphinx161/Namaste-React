import React from "react";
import ReactDOM from "react-dom/client"
import logoImage from "./flavour-dash-logo.png"

/*
    1. Header
        - Logo
        - Nav Items
    2. Body
        - Search
        - Restaurant Card
    3. Footer
        - Copyright
        - Links
        - Address
        - Contact
*/

console.log("Reached")
const Header = () => { 
return (
    <div className = "header">
        <div className = "logo-container">
            <img className = "logo" src={logoImage}
            />
        </div>
        <div className = "nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>

        </div>

    </div>
 )
};

/*
const styleCard = {
    backgroundColor : "#E6E9F0"
};
*/

const resList = [
    {
        id: "1001",
        name : "Santosh Family Dhaba",
        receipe: "Tomato Soup",
        rating: "4.0",
        price : "₹300 for two",
        deliveryTime: "22 MINS",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/mkcibe6x1ychvzjkywxk",
    },
    {
        id: "1002",
        name : "Cafe Niloufer",
        receipe: "Maska Bun",
        rating: "4.5",
        price : "₹400 for two",
        deliveryTime: "32 MINS",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dc9t0kiq7lhsd3pndohf",
    },
    {
        id: "1003",
        name : "Santosh Family Dhaba",
        receipe: "Crispy Corn",
        rating: "4.5",
        price : "₹560 for two",
        deliveryTime: "32 MINS",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dwqb8nhiop8fvqya0alq",
    },
    {
        id: "1004",
        name : "Grameen Kulfi",
        receipe: "Sitaphal Stick Kulfi",
        rating: "4.6",
        price : "₹120 for two",
        deliveryTime: "18 MINS",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/vu0thsifji9wgfuzfmic",
    },
    {
        id: "1005",
        name : "Nrs Nandini",
        receipe: "Idli",
        rating: "4.4",
        price : "₹150 for two",
        deliveryTime: "21 MINS",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/9fa5ca30c3db622c69cec0326ff63b41",
    },
    {
        id: "1006",
        name : "Utsav Vegetarian",
        receipe: "Kaju Paneer Biryani",
        rating: "4.1",
        price : "₹300 for two",
        deliveryTime: "32 MINS",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/y2lkcxxax3794vepe2se",
    },
    {
        id: "1007",
        name : "Subbayya Gari Hotel",
        receipe: "Butta Bojanam",
        rating: "4.0",
        price : "₹300 for two",
        deliveryTime: "24 MINS",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iwtocxqjtu57vc7l52h9",
    },
]


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


const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map(restaurant => 
                        (<RestaurantCard key={restaurant.id} resInfo={restaurant} />))
                }
            </div>
        </div>
    )
};


const AppLayout = () => {
    return (
    <div className = "app">
        <Header />
        <Body />
    </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)