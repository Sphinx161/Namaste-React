import React from "react";
import ReactDOM from "react-dom/client";


// ******************* React Element ************************
// React.createElement => React Element JS-Object => HTMLElement(render)
const heading = React.createElement("h1", {id:"heading"}, "Welcome to Namaste React !" );

/*
 JSX is HTML-Like Syntax, XML-Like Syntax
 JSX (Transpiled before moving to JS Engine) => Parcel(Doesn't do the transpiling) Gives it to => Babel
 JSX => React.createElement() => React Element JS-Object => HTMLElement(render)
 JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)
*/
const jsxHeading = <h1 id="heading" tabIndex="5" >Namaste React using JSX</h1>
console.log(jsxHeading)

// ******************* React Component ************************
const HeadingComponent = () => <h1>Hello From Function Based Component</h1>


const HeadingComponent2 = () => (
    
    <div>
        <HeadingComponent />
        <HeadingComponent></HeadingComponent>
        {HeadingComponent()}
        <h1>Hello From Function Based Component</h1>
    </div>
)

const HeadingComponent3 = () => {
return <h1>Hello From Function Based Component</h1>

}
    

const root = ReactDOM.createRoot(document.getElementById("root"));


// Render a React Element 
root.render(jsxHeading);

// Render a React Function Component, Babel understands like this 
root.render(<HeadingComponent2 />);





