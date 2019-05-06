import React, { Component } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import {Image, Text} from "react-native";

export default class PokemonCollections extends Component {

	constructor(props) {
		super(props);

		this.state = {
			error: {},
			isLoading: false,
			title: this.props.title,
			uri: this.props.uri,
			data: []
		}
	}

	getPokemonFromApiAsync = async (id) => {
		try {
			this.setState({ isLoading: true });
			let response = await fetch(this.props.uri + '/' + id);
			let data = await response.json();
			this.setState({
				isLoading: false,
				data: [...data]
			});
		} catch (error) {
			this.state.error.message = 'Error come from api';
		}
	};

	render() {
		return (
			<ScrollView>
				{
					this.state.userDetail.captured.map( (item, index) => {
						return (
							<TouchableOpacity key={index}
																onPress={ () => () => this.goToPokemon(this.getId(index))}>
								<Image style={[{width: 10, height: 30}, style.icon]}
									     source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon' + this.getId(index) + '.png'}}/>
								{
									this.getPokemonFromApiAsync(item.id)
								}
								<Text style={[style.name, {textTransform: 'capitalize'}]}>{item.name}</Text>
							</TouchableOpacity>
						)
					})
				}
			</ScrollView>
		)
	}
}
