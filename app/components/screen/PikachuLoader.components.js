import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

let styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		flexWrap: 'wrap'
	},
	img: {
		flex: 3 / 4,
		width: 200,
		height: 200,
		borderRadius: 70,
		marginTop: 15,
	},
	Texts: {
		marginTop: 75
	},
	waitingMessage: {
		fontWeight: 'bold',
		fontSize: 35
	}
});

export default class PikachuLoader extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Image source={require('../../../assets/img/searchImg.gif')} style={ styles.img } />
				<View style={styles.Texts}>
					<Text style={styles.text}>Detective Pikachu search for us !</Text>
					<Text style={styles.waitingMessage}>Please wait...</Text>
				</View>
			</View>
		)
	}

}
