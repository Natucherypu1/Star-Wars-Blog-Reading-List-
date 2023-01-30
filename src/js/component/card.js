import React from "react";
import { Link } from "react-router-dom";

export const CharactersCard = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://www.indiewire.com/wp-content/uploads/2020/10/HUC2-018995_R.jpg?w=780"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.character.name}</h5>
        <p className="card-text">Gender: {props.character.gender}</p>
        <p className="card-text">Hair Color: {props.character.hair_color}</p>
        <p className="card-text">Eye Color: {props.character.eye_color}</p>
        <div className="d-flex navbar">
          <Link to={"/character/" + props.index}>
            <div className="btn btn-primary">Go somewhere</div>
          </Link>
          <div onClick={() => props.addFavorites(props.character)}>
            <i class="fa-regular fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PlanetsCard = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://www.indiewire.com/wp-content/uploads/2020/10/HUC2-018995_R.jpg?w=780"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.planet.name}</h5>
        <p className="card-text">Population:</p>
        <p className="card-text">Climate:</p>
        <p className="card-text"></p>
        <p className="card-text"></p>
        <div className="d-flex navbar">
          <Link to={"/single"}>
            <div className="btn btn-primary">Go somewhere</div>
          </Link>
          <div onClick={() => props.addFavorites(props.planet)}>
            <i class="fa-regular fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export const VehiclesCard = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://www.indiewire.com/wp-content/uploads/2020/10/HUC2-018995_R.jpg?w=780"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.vehicle.name}</h5>
        <p className="card-text">Population:</p>
        <p className="card-text">Climate:</p>
        <p className="card-text"></p>
        <p className="card-text"></p>
        <div className="d-flex navbar">
          <Link to={"/single"}>
            <div className="btn btn-primary">Go somewhere</div>
          </Link>
          <div onClick={() => props.addFavorites(props.vehicle)}>
            <i class="fa-regular fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
