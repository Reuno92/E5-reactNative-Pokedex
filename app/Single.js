import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Container, DeckSwiper, Card, CardItem, Thumbnail, Content, Header} from 'native-base';
import {API, CATEGORY} from "./constants/Api";
import {
	loopTypes,
	loopStats,
	refactorIdPokemonActualGeneration,
	capitalizeString,
	loopAbility
} from "./functions/sharedFunctions";
import HeaderBack from "./components/shared/HeaderBack.components";
import {SPRITE} from "./constants/Sprite";

export default class Single extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		id: this.props.navigation.state.params.itemId,
		isLoading: false,
		error: false,
		shinyMode: false,
		data: {},
		dataColor: {},
		dataType: {},
		dataSpecies: {},
		dataAbility: {}
	};

	componentDidMount() {
		const POKEMON = API + CATEGORY.POKEMON + this.state.id;
		const COLOR = API + CATEGORY.COLOR + this.state.id;
		const TYPE = API + CATEGORY.TYPE + this.state.id;
		const SPECIES = API + CATEGORY.SPECIES + this.state.id;
		const ABILITY = API + CATEGORY.ABILITY + this.state.id;

		this.getPokemon(this.state.id, POKEMON, 'data');
		this.getPokemon(this.state.id, COLOR, 'color');
		this.getPokemon(this.state.id, TYPE, 'type');
		this.getPokemon(this.state.id, SPECIES, 'species');
		this.getPokemon(this.state.id, ABILITY, 'ability');
	}

	getPokemon = async (id, uri, output) => {
		try {
			this.setState({error: false, isLoading: false});
			let response = await fetch(uri);

			if (response.status === 200) {
				let data = await response.json();

				if (output === 'data') {
					this.setState({
						isLoading: false,
						data: {...data}
					});
				} else if (output === 'color') {
					this.setState({
						isLoading: false,
						dataColor: {...data}
					});
				} else if (output === 'type') {
					this.setState({
						isLoading: false,
						dataType: {...data}
					});
				} else if (output === 'species') {
					this.setState({
						isLoading: false,
						dataSpecies: {...data}
					});
				} else if (output === 'ability') {
					this.setState({
						isLoading: false,
						dataAbility: {...data}
					});
				} else {
					console.log('!!! ERROR !!!');
					this.setState({isLoading: false, error: true});
				}

			} else {
				this.setState({isLoading: false, error: true});
			}
		} catch (error) {
			this.setState({isLoading: false, error: true});
			console.log(error);
		}
	};

	pikachuPokemonLoaderRender() {
		return (
			<View style={{justifyContent: 'center', alignContent: 'center', marginTop: 70}}>
				<Image source={require('../assets/img/pokemonLoading.gif')} style={{height: 400, width: 400}}/>
				<Text style={{textAlign: 'center', fontSize: 30}}>In pika loading…</Text>
			</View>
		)
	}

	singlePokemonRender() {
		var pokemon = this.state.data;

		return (
			<Container style={{ backgroundColor: 'skyblue'}} >
				<HeaderBack navigation={this.props.navigation}/>
				<Content style={{paddingTop: -10, maxHeight: 40}}>
					<View style={[styles.container, styles.rows, styles.spacedBetween]}>
						<Text style={styles.name}> {capitalizeString(pokemon.name)} </Text>
						<View style={{marginTop: 4}}>
							{
								loopTypes(pokemon.types)
							}
						</View>
						<Text style={styles.id}> {refactorIdPokemonActualGeneration(pokemon.id)} </Text>
					</View>
				</Content>
				<Content style={styles.container}>
					<View style={[styles.rows, styles.spacedAround]}>
						{
							(pokemon.sprites && pokemon.sprites.front_default !== null) ? (
								<View>
									<Image source={{uri: SPRITE.FRONT_DEFAULT + pokemon.id + '.png'}}
												 style={{width: 120, height: 120}}/>
									<Text style={styles.alignCenter}>Front</Text>
								</View>
							) : null
						}

						{
							(pokemon.sprites && pokemon.sprites.back_default !== null) ? (
								<View>
									<Image source={{uri: SPRITE.BACK_DEFAULT + pokemon.id + '.png'}}
												 style={{width: 120, height: 120}}/>
									<Text style={styles.alignCenter}>Back</Text>
								</View>
							) : null
						}

					</View>

					{
						(
							<View style={[styles.rows, styles.frame ]}>
								{
									// don't remove the condition else it's crash… Try it id: 1
									(pokemon.species) ? (
										<View style={{flex: 1 / 3}}>
											<Text style={{
												fontWeight: 'bold',
												fontSize: 18,
												textAlign: 'center'
											}}>{capitalizeString(pokemon.species.name)}</Text>
											<Text style={{fontSize: 12, textAlign: 'center'}}>Species</Text>
										</View>
									) : null
								}
								<View style={{flex: 1 / 3}}>
									<Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>{(pokemon.height / 10)} m</Text>
									<Text style={{fontSize: 12, textAlign: 'center'}}>Height</Text>
								</View>

								<View style={{flex: 1 / 3}}>
									<Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>
										{(Number.parseFloat(pokemon.weight).toFixed(2)) / 10} kg
									</Text>
									<Text style={{fontSize: 12, textAlign: 'center'}}>Weight</Text>
								</View>

							</View>
						)
					}

					<View style={[ styles.frame, {paddingStart: 7, paddingEnd: 7}]}>
						{
							loopStats(pokemon.stats)
						}
					</View>

					<View style={ styles.frame }>
						{
							loopAbility(pokemon.abilities)
						}
					</View>
				</Content>
			</Container>
		)

	}

	renderBody() {
		if (this.state.isLoading === true) {
			return this.pikachuPokemonLoaderRender();
		} else {
			return this.singlePokemonRender();
		}
	}

	render() {
		return this.renderBody();
	}
}

const styles = StyleSheet.create({
	container: {
		paddingStart: 10,
		paddingEnd: 10
	},
	rows: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	columns: {
		flexDirection: 'column',
		flexWrap: 'wrap'
	},
	spacedAround: {
		justifyContent: 'space-around'
	},
	spacedBetween: {
		justifyContent: 'space-between'
	},
	alignCenter: {
		textAlign: 'center'
	},
	frame: {
		marginTop: 15,
		backgroundColor: '#ffffff',
		borderRadius: 5,
		padding: 12
	},
	name: {
		fontSize: 30
	},
	id: {
		fontSize: 30,
		fontWeight: 'bold'
	},
	specie: {},
	measure: {},
	height: {},
	weight: {},
	basicAbility: {},
	statName: {},
	statValue: {}
});
