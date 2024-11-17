const headingElement = React.createElement(
    "h1", 
    {id:"heading", attribute:"value"}, // Set Attributes for the Element ib {}
    "Hello from React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(headingElement);

//  HOW TO CREATE THE FOLLOWING NESTED HTML STRUCTURE ?
/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>H1 Tag of Child Div </h1>
 *          <h2>H2 Tag of Child Div </h2>
 *      </div>
 *      <div id="child2">
 *          <h1>H1 Tag of Child-2 Div </h1>
 *          <h2>H2 Tag of Child-2 Div </h2>
 *      </div>
 * </div>
 *  
 */


const parent = React.createElement(
    "div", 
    {id:"parent"}, 
    [React.createElement("div", {id:"child"},
        [React.createElement("h1",{},"H1 Tag of Child Div"),
         React.createElement("h2",{},"H2 Tag of Child Div")] ), 
    React.createElement("div", {id:"child2"},
        [React.createElement("h1",{},"H1 Tag of Child-2 Div"),
        React.createElement("h2",{},"H2 Tag of Child-2 Div")
    ])]
)

root.render(parent); // This overwrites all the HTML content that was stated in the "root" section.

