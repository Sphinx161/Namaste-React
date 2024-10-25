const headingElement = React.createElement(
    "h1", 
    {id:"heading", attribute:"value"}, // Set Attributes for the Element ib {}
    "Hello from React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(headingElement);