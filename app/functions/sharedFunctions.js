import React from 'react';
import {View, Text, Image} from 'react-native';
import {Badge} from 'native-base';

/**
 * Capitalize my string
 * Reviews : https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
 * It's not a SDD app (StackOverflow Driven Development)
 * @param string
 * @returns {string}
 */
export var capitalizeString = (string) => {
	if (typeof string === 'string') {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
};

/**
 * Refactoring for actual generation with 953 creatures
 * @param id
 * @returns {string}
 */
export var refactorIdPokemonActualGeneration = (id) => {

	var stringed;

	if (typeof id === 'number') {
		stringed = id.toString();
	} else {
		stringed = id
	}

	if (id >= 1 && id <= 9) {
		return '00' + stringed;
	} else if (id >= 10 && id <= 99) {
		return '0' + stringed;
	} else if (id >= 100 && id <= 999) {
		return stringed
	}
};

/**
 * Refactoring for next generation with more than 999 while 9999 creatures
 * @param id
 */
export var refactorIdPokemonFutureGeneration = (id) => {
	var transformId = refactorIdPokemonActualGeneration(id);
	var newId = '0';

	if (transformId >= 1 && transformId <= 999) {
		newId += tranformId
	} else {
		newId = transformId
	}

	return newId
};

/**
 * return an View with different type of an pokemon
 * @param types
 * @returns {*}
 */
export var loopTypes = (types) => {

	if (typeof types !== 'undefined') {
		let styles = {
			badge: {
				flexDirection: 'row',
				flexWrap: 'wrap'
			}
		};

		return (
			<View style={styles.badge}>
				{
					types.map((item, index) => {
						// console.log('items', '#' + index + ' :', item);
						color = (typeName) => {
							var color = '';

							switch (typeName) {
								case 'bug':
									color = '#aabb22';
									break;
								case 'dark':
									color = '#775544';
									break;
								case 'dragon':
									color = '#7766ee';
									break;
								case 'electric':
									color = '#ffbb33';
									break;
								case 'fairy':
									color = '#ffaaff';
									break;
								case 'fighting':
									color = '#bb5544';
									break;
								case 'flying':
									color = '#6699ff';
									break;
								case 'fire':
									color = '#ff4422';
									break;
								case 'ghost':
									color = '#6666bb';
									break;
								case 'ground':
									color = '#ddbb55';
									break;
								case 'ice':
									color = '#77ddff';
									break;
								case 'normal':
									color = '#bbbbaa';
									break;
								case 'grass':
									color = '#77cc55';
									break;
								case 'poison':
									color = '#aa5599';
									break;
								case 'psychic':
									color = '#ff5599';
									break;
								case 'rock':
									color = '#bbaa66';
									break;
								case 'steel':
									color = '#aaaabb';
									break;
								case 'water':
									color = '#3399ff';
									break;
							}

							return color;
						};

						return (
							<Badge key={item.slot} style={{
								backgroundColor: this.color(item.type.name),
								marginTop: 3,
								marginEnd: 2,
								paddingStart: 2,
								paddingEnd: 2
							}}>
								<Text> {capitalizeString(item.type.name)} </Text>
							</Badge>
						)
					})
				}
			</View>
		)
	}
};

/**
 * Return view with different Stats.
 * @param stats
 * @returns {*}
 */
export var loopStats = (stats) => {
	if (typeof stats === 'object') {
		return (
			<View style={{paddingTop: 15, paddingBottom: 8}}>
				<View style={{
					flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between',
					borderBottomWidth: 1, borderStyle: 'solid', borderColor: '#CCC'
				}}>
					<Text style={{textAlign: 'left', fontWeight: 'bold', flex: 6 / 8}}>
						Stats name
					</Text>
					<Text style={{textAlign: 'center', fontWeight: 'bold', flex: 2 / 8}}>
						Basic Stats
					</Text>
				</View>
				{
					stats.slice(0).reverse().map((item, index) => {
						return (
							<View key={index} style={{
								flexDirection: 'row',
								flexWrap: 'wrap',
								justifyContent: 'space-between',
								paddingTop: 15,
								paddingBottom: 8
							}}>

								<Text style={{textAlign: 'left', fontWeight: 'bold', flex: 6 / 8}}>
									{capitalizeString(item.stat.name)}
								</Text>

								<Text style={{textAlign: 'center', flex: 2 / 8}}>
									{item.base_stat}
								</Text>

							</View>
						)
					})
				}
			</View>
		)
	}
};

/**
 * Return view with different ability
 * @param abilities
 * @returns {*}
 */
export var loopAbility = (abilities) => {

	state = {
		data: {}
	};

	if (typeof abilities === 'object') {

		getAbility = async (abilityURL) => {
			try {
				console.log(abilityURL);
				debugger;
				let response = await fetch(abilityURL);
				let data = await response.json();
				this.setState({
					data: {...data}
				});
				console.log(this.state.data);
				// return (abilityRender);
			} catch (error) {
				console.log(error);
				return "Pikachu was lost";
			}
		};

		return (
			<View style={{paddingTop: 15, paddingBottom: 8}}>
				<View style={{
					flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between',
					borderBottomWidth: 1, borderStyle: 'solid', borderColor: '#CCC'
				}}>
					<Text style={{fontWeight: 'bold', fontSize: 25}}>
						Abilities
					</Text>
				</View>
				{
					abilities.map((item, index) => {
						// this.getAbility(item.ability.url);

						return (
							<View key={item.slot}>
								<Text> {item.ability.name} </Text>
								{
									console.log(this.state.data)
								}

							</View>
						)
					})
				}
			</View>
		)
	}
};

