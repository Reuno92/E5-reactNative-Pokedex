import React, { Component } from 'react';
import {Text, View} from "react-native";
import ListPokemon from "./shared/listPokemon.components";
import { API, CATEGORY } from "../constants/Api";
import PokemonCollections from "./shared/PokemonCollections.components";

export default class CollectionScreen extends Component {
	constructor(props) {
		super(props);
		this.state = { ...props.state };
	}

	render() {
		let URI_SINGLE = API + CATEGORY;
		return (
			<View>
				<PokemonCollections title="Your collections" uri={URI_DEFAULT} />
			</View>
		)
	}
}
