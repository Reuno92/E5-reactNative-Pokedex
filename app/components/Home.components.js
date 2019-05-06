import React, {Component} from 'react';
import {View, Text, Button, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import { API, CATEGORY } from '../constants/Api';
import Navigation from '../constants/Context';

import ListPokemon from './shared/listPokemon.components';
import Search from './shared/search.components';

export default class HomeScreen extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let URI_LIST_POKEMON = API + CATEGORY.POKEMON + '?limit=12&offset=0';
		return (
			<ScrollView style={{ minHeight: 677 }}>
				<Search navigation={this.props.navigation} />
				<ListPokemon title="Quick List" uri={URI_LIST_POKEMON}  navigation={this.props.navigation} />
			</ScrollView>
		);
	}
}
