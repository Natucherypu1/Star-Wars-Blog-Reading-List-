import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let character = store.characters.filter(characters, index)
	return (
		<div className="">
		</div>
	);
};
export const PlanetDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="">
		</div>
	);
};
export const VehicleDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="">
		</div>
	);};

