import React, { useContext } from "react";
import { CharactersCard } from "../component/card";
import { PlanetsCard } from "../component/card";
import { VehiclesCard } from "../component/card";

import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="text-center mt-5">
      <h1>Star Wars Blog</h1>

      <div className="container">
        <h1>Characters</h1>
        <div className="row data-row">
          {store.characters.map((item, index) => {
            return (
              <div key={index} className="col">
                <CharactersCard character={item} index={index} category="characters" addFavorites={actions.addFavorites} />
              </div>
            );
          })}
        </div>


       

        <h1>Planets</h1>
        <div className="row data-row">
          
          {store.planets.map((item, index) => {
            return (
              <div key={index} className="col">
                <PlanetsCard planet={item} index={index} category="planet" addFavorites={actions.addFavorites} />
              </div>
            );
          })}
        </div>

        <h1>Vehicles</h1>
        <div className="row data-row">
          
          {store.vehicles.map((item, index) => {
            return (
            <div key={index} className="col">
              <VehiclesCard vehicle={item} index={index} category="vehicles" addFavorites={actions.addFavorites} />
            </div>);
          })}
        </div>
      </div>
    </div>
  );
};
