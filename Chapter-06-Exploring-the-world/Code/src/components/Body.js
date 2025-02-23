import RestaurantCard from "./RestaurantCard";
import { useState, useEffect} from "react";

const Body = () => {
    // let listOfRestaurants = [
        // {
        //     id: "1001",
        //     name : "Santosh Family Dhaba",
        //     receipe: "Tomato Soup",
        //     rating: "4.0",
        //     price : "₹300 for two",
        //     deliveryTime: "22 MINS",
        //     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/mkcibe6x1ychvzjkywxk",
        // },
        
        // {
        //     id: "1002",
        //     name : "Cafe Niloufer",
        //     receipe: "Maska Bun",
        //     rating: "4.5",
        //     price : "₹400 for two",
        //     deliveryTime: "32 MINS",
        //     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dc9t0kiq7lhsd3pndohf",
        // },
        // {
        //     id: "1003",
        //     name : "Santosh Family Dhaba",
        //     receipe: "Crispy Corn",
        //     rating: "4.5",
        //     price : "₹560 for two",
        //     deliveryTime: "32 MINS",
        //     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dwqb8nhiop8fvqya0alq",
        // },
        // {
        //     id: "1004",
        //     name : "Grameen Kulfi",
        //     receipe: "Sitaphal Stick Kulfi",
        //     rating: "4.6",
        //     price : "₹120 for two",
        //     deliveryTime: "18 MINS",
        //     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/vu0thsifji9wgfuzfmic",
        // },
        // {
        //     id: "1005",
        //     name : "Nrs Nandini",
        //     receipe: "Idli",
        //     rating: "4.4",
        //     price : "₹150 for two",
        //     deliveryTime: "21 MINS",
        //     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/9fa5ca30c3db622c69cec0326ff63b41",
        // },
        // {
        //     id: "1006",
        //     name : "Utsav Vegetarian",
        //     receipe: "Kaju Paneer Biryani",
        //     rating: "4.1",
        //     price : "₹300 for two",
        //     deliveryTime: "32 MINS",
        //     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/y2lkcxxax3794vepe2se",
        // },
        // {
        //     id: "1007",
        //     name : "Subbayya Gari Hotel",
        //     receipe: "Butta Bojanam",
        //     rating: "4.0",
        //     price : "₹300 for two",
        //     deliveryTime: "24 MINS",
        //     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iwtocxqjtu57vc7l52h9",
        // },
    // ];

    const [restaurants, setrestaurants] = useState([]);

    useEffect(() => {
        console.log("useEffect has been called");
        fetchDataAPI();
    }, []);

    const fetchDataAPI = async () => {
        const data = await 
        // fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9358189&lng=77.6178125&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.9974&lng=79.0011&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json();
        console.log(json);
        setrestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    console.log(restaurants);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => 
                {
                    console.log("Button Clicked");
                    console.log(restaurants);
                    filteredResList = restaurants.filter((res) => res.info.avgRating >= 4.4);
                    setrestaurants(filteredResList);
                }
            }>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    restaurants.map(restaurant => 
                        (<RestaurantCard key={restaurant.info.id} resInfo={restaurant} />))
                }
            </div>
        </div>
    )
};

export default Body;
