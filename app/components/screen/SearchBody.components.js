import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { SPRITE } from "../../constants/Sprite";

import {capitalizeString, loopTypes, refactorIdPokemonActualGeneration} from '../../functions/sharedFunctions';

export default class SearchBody extends Component {

	constructor(props) {
		super(props);
	}

	styles = {
		start: {
			alert: {
				height: 300,
				flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center',
				backgroundColor: 'white'
			},
			imageWrapper: {
				flexDirection: 'row',
				flexWrap: 'nowrap',
			},
			img: {
				width: 226,
				height: 150
			},
			alertTexts: {
				marginTop: 20
			}
		},
		result: {
			container: {
				paddingTop: 10, paddingBottom: 10,
			},
			header: {
				flexDirection: 'row',
				flexWrap: 'wrap',
				justifyContent: 'space-between',
				paddingStart: 10,
				paddingEnd: 10
			},
			heading: {
				fontSize: 25,
			},
			id: {
				fontSize: 25,
				fontWeight: 'bold'
			},
			imagesWrapper: {
				// borderWidth: 1, borderStyle: 'dashed', borderColor: 'green',
				flexDirection: 'row',
				flexWrap: 'wrap',
				justifyContent: 'center'
			},
			canvas: {
				// borderWidth: 1, borderStyle: 'dashed', borderColor: 'blue',
				flexDirection: 'column',
			},
			legend:{
				textAlign: 'center'
			},
			img: {
				width: 184, height: 184
			}
		},
		bolder: {
			fontWeight: 'bold'
		}
	};

	noDatas = () => {
		return (
			<View style={ this.styles.start.alert}>
				<Image style={ this.styles.start.img } resizeMode="cover" source={require('../../../assets/img/letPikachuhelpu.gif')} />
				<View style={ this.styles.start.alertTexts}>
					<Text style={{ textAlign: 'center' }} >Let's pikachu help you to find a pokemon.</Text>
					<Text style={{ textAlign: 'center', marginTop: 10 }}>Type an <Text style={ this.styles.bolder }>Pokemon name</Text> or <Text style={ this.styles.bolder }>id</Text></Text>
				</View>
			</View>
		)
	};

	error = () => {
		return (
			<View>
				<Image style={ this.styles.start.img } source={require('../../../assets/img/searchError.gif')} />
				<View style={ this.styles.start.alert}>
					<Text>Pikachu find nothing…</Text>
					<Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 35 }}>Please retry</Text>
				</View>
			</View>
		)
	};

	success = (pokemon) => {
		return (
			<View style={ this.styles.result.container }>
				<View style={ this.styles.result.header }>
					<Text style={ this.styles.result.heading }> { capitalizeString(pokemon.name) } </Text>
					{
						loopTypes(pokemon.types)
					}
					<Text style={ this.styles.result.id }> { refactorIdPokemonActualGeneration(pokemon.id) } </Text>
				</View>
				<View style={ this.styles.result.imagesWrapper }>
					{
						(pokemon.sprites.front_default !== null) ? (
							<View style={this.styles.result.canvas}>
								<Image style={this.styles.result.img} source={{uri: SPRITE.FRONT_DEFAULT + '/' + pokemon.id + '.png'}}/>
								<Text style={this.styles.result.legend}>Front</Text>
							</View>
						) : null
					}

					{
						(pokemon.sprites.back_default !== null) ? (
							<View style={ this.styles.result.canvas }>
								<Image style={ this.styles.result.img } source={{ uri: SPRITE.BACK_DEFAULT + '/' + pokemon.id + '.png' }} />
								<Text style={ this.styles.result.legend }>Back</Text>
							</View>
						) : null
					}

				</View>
				<Button title={ `See more information` } style={{ marginTop: 3 }} onPress={ () => this.props.navigation.navigate('Single', { itemId: pokemon.id }) }/>
			</View>
		)
	};

	render() {
		var pokemon = this.props.data;
		var error = this.props.error;

		getPokemon = () => {
			if (!pokemon && error === true) {
				return this.error()
			} else if (Object.keys(pokemon).length !== 0) {
				return this.success(pokemon)
			}
			return this.noDatas();
		};

		return ( getPokemon() )
	}
}
