import React from "react";

const Logo = (props) => {
  // const appName = "ELAHE'S";

  // function logWhenClicked() {
  //   alert("buttonElement was clicked!");
  // }

  return (
    <div>
      <header>
        <h1>Welcome to {props.appName} pokedex!</h1>
        <img
          onClick={props.handleClick}
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          alt="bird"
        />
      </header>
    </div>
  );
};

export default Logo;
