import React, { Component } from "react";
import {Header, Icon, Left, Button} from "native-base";
import { Text } from "react-native";

export default class HeaderBack extends Component {

	render() {
		return (
			<Header>
				<Left>
					<Button transparent={true}
									onPress={() => this.props.navigation.goBack()}>
						<Icon name="ios-arrow-back"/>
						<Text>Back</Text>
					</Button>
				</Left>
			</Header>
		)
	}
}
