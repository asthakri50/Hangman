import React from "react" ;
import ReactDOM from "react-dom" ;
import Game from "./components/game";
import './styles/main.scss' ;


const App = () => (
    <>
    <Game>
    </Game>
    </>
);

ReactDOM.render(
     <App /> , document.getElementById("root") );