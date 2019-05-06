import React, {Component} from 'react';
import {Button, StyleSheet, Image, View} from 'react-native';
import {Container, Content, Form, Item, Input} from 'native-base';
import HeaderBack from "./components/shared/HeaderBack.components";

export default class Login extends Component {

	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	async LogIn() {
		await fetch( "", {
			method: 'POST',
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify(this.state),
		}).then( res => {
			return res.json();
		}).then( data => {
			if (data) {
				this.props.user(data);
			}
		})
	}

	render() {
		return (
			<Container>
				<HeaderBack navigation={this.props.navigation}/>
				<Content>
					<Form style={ style.form }>
						<Image source={{ uri: 'icon.png' }} style={{width: 140, height: 140}} />
						<Item>
							<Input onChangeText={(email) => this.setState({email})}
										 style={ style.input }
										 placeholder="Email"/>
						</Item>
						<Item>
							<Input secureTextEntry={true} onChangeText={(password) => this.setState({password})}
										 style={ style.input }
										 placeholder="Password"/>
						</Item>
						<View>
							<Button title="Log In !" onPress={ () => this.login() } />
							<Button title="Sign Up !" onPress={ () => this.props.navigation.navigate('account') } />
						</View>
					</Form>
				</Content>
			</Container>
		)
	}
}

const style = StyleSheet.create({
	form: {
		width: '100%'
	},
	input: {
		height: 40,
		width: '100%'
	}
});
