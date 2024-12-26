import React from "react";
import ReactDOM from "react-dom/client"
import logoImage from "./flavour-dash-logo.png"

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

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{ backgroundColor : "#E6E9F0"}}>
            <img className="res-logo" alt="res-logo" src="https://www.freshtohome.com/blog/wp-content/uploads/2024/08/Biryani.jpeg" />
            <h3>Meghna Foods</h3>
            <h4>Biryani, Asian</h4>
            <h4>4.4 Stars</h4>
            <h4>30 mins</h4>
        </div>
    )

};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
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