import React, {Component} from 'react';
import {View, Text, Button, Image, StyleSheet} from "react-native";
import  ListPokemon from './shared/listPokemon.components'
import { API, CATEGORY } from '../constants/Api'

export default class HomeScreen extends Component {

	render() {
		let URI_DEFAULT = API + CATEGORY.POKEMON + '/?limit=5&offset=0';
		return (
			<View>
				<ListPokemon title="Quick List" uri={URI_DEFAULT} />
			</View>
		);
	}
}
