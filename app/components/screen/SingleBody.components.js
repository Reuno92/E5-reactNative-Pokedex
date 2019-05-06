import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { SPRITE } from "../../constants/Sprite";

import {capitalizeString, loopTypes, refactorIdPokemonActualGeneration} from '../../functions/sharedFunctions';

export default class SingleBody extends Component {
	constructor(props) {
		super(props);
		console.log('error: ',  props.error);
	}

	render() {
		var pokemon = this.props.data;
		var error = this.props.error;

		getrender = () => {
			if (!pokemon && error === true) {

			} else {

			}
		};

		return (
			getRender()
		)

	}
}
