import React, { Component } from 'react';
import { Text, ScrollView, View, Input } from 'react-native';

export default class Account extends Component {

	constructor(props) {
		super(props);

		this.state = {
			user: props.user,
			email: props.email,
			password: '',
			userDetail: props.userDetail
		}
	}

	getUserDetail(arr) {
		var returnedArray = [];
		for (var i = 0, l = arr.length; i < l; i++) {
			returnedArray.splice(i, 0, (<Text>{ Object.keys(arr[i]) }: { arr[i].length }</Text>))
		}
		return returnedArray;
	}

	render() {
		return (
			<ScrollView keyboardDismissMode="interactive">
				<View>
					<Input placeholder="Username" onChangeText={(user) => this.setState({ user })}/>
				</View>
				<View>
					<Input placeholder="email" onChangeText={(email) => this.setState({ email })}/>
				</View>
				<View>
					<Input placeholder="Password" onChangeText={(password) => this.setState({ password })}/>
				</View>
				<View>
					{
						this.getUserDetail(this.state.userDetail)
					}
				</View>
			</ScrollView>
		)
	}
}
