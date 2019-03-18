import React, { Component } from 'react';
import {Button, Text, View} from 'react-native';
import {Body, Left, Right, Header} from "native-base";

export default class HeaderElements extends Component {

	constructor(props) {
		super(props);

		this.state = {
			user: '',
			title: this.props.title
		};

		var account;

		if (this.state.user === '') {
			this.account = <Right><Button title="Log In" onPress={ () => this.props.nav.navigation.navigate( 'Login')}/></Right>;
		} else {
			this.account = <Right><Button title="Account" onPress={() => this.props.nav.navigation.navigate('Account')}/></Right>;
		}
	}

	goToMainHome() {
		this.props.nav.navigation.navigate('Home');
	}

	render() {
		return (
			<Header>
				<Left><Button title="Home" onPress={() => this.goToMainHome()}/></Left>
				<Body><Text>{this.state.title}</Text></Body>
				{ this.account }
			</Header>
		)
	}
}
