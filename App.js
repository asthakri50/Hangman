import React from "react" ;
import ReactDOM from "react-dom" ;
import Game from "./components/game";


const App = () => (
    <>
    <div>
        Worddle Lite !
    </div>
    <Game>
    </Game>
    </>
);

ReactDOM.render(
     <App /> , document.getElementById("root") );