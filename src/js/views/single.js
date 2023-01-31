import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetails = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let character = store.characters.filter(
    (item, index) => index == params.theIndex
  )[0];
  return (
    <div className="mx-auto container">
      <div className="d-flex mb-5 p-5 border-bottom border-danger" >
        <img src="https://www.indiewire.com/wp-content/uploads/2020/10/HUC2-018995_R.jpg?w=780" />
        <div>
          <div className= "container">
            <h1>{character.name}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              a sodales sapien. Donec ex urna, cursus at risus ut, sodales
              vehicula sem. Quisque dapibus dignissim egestas. Nullam porttitor
              eleifend urna et semper. Quisque dolor nisi, fermentum convallis
              metus eget, venenatis venenatis nulla.
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex container justify-content-center text-danger">
        <p className="mx-auto"><h6>Gender:</h6> {character.gender}</p>
        <p className="mx-auto"><h6>Hair Color:</h6>  {character.hair_color}</p>
        <p className="mx-auto"><h6>Eye Color:</h6> {character.eye_color}</p>
        <p className="mx-auto"><h6>Height:</h6> {character.height}</p>
        <p className="mx-auto"><h6>Birth Year:</h6> {character.birth_yea}</p>
        <p className="mx-auto"><h6>Skin Color:</h6> {character.skin_color}</p>
      </div>
    </div>
  );
};
export const PlanetDetails = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return <div className="mx-auto"></div>;
};
export const VehicleDetails = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return <div className="mx-auto"></div>;
};
