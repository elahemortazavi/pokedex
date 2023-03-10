import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const { date } = props;
  // const date = new Date();
  // const localTime = date.toLocaleTimeString();
  const [caught, setCaught] = useState([]);

  const [pokemonNameInput, setPokemonNameInput] = useState("");

  function upPokemon() {
    setCaught(caught.concat(pokemonNameInput));
  }

function handleInputChange(event) {
  setPokemonNameInput(event.target.value);
}

  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {date.toLocaleString()}
      </p>
      <ul>
        {caught.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>

      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />

      <button onClick={upPokemon}>Add pokemon</button>
    </div>
  );
};

export default CaughtPokemon;
