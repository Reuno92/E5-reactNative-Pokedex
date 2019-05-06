import React, {Component} from 'react';
import {View, Platform, Keyboard, Button} from 'react-native';
import {Container, Content, Form, InputGroup, Icon, Input} from 'native-base';
import {API, CATEGORY} from "../../constants/Api";
import PikachuLoader from '../screen/PikachuLoader.components';
import SearchBody from '../screen/SearchBody.components';

export default class Search extends Component {

	constructor(props) {
		super(props);
	}

	state = {
		searchWord: "Butterfree",
		onCall: false,
		data: {},
		error: false
	};

	searchPoke = async () => {
		try {
			this.setState({ error: false });
			this.setState({ onCall: true });
			const uri = API + CATEGORY.POKEMON + this.state.searchWord.toLowerCase();
			let response = await fetch(uri);
			console.log('status :', response.statusText);
			if (response.status === 200) {
				let data = await response.json();
				this.setState({
					onCall: false,
					data: { ...data }
				});
			} else {
				this.setState({error: true});
			}
		} catch (error) {
			this.setState({error: true});
			console.log(error);
		}
	};

	renderBody = () => {
		if (this.state.onCall === true) {
			return (
				<PikachuLoader />
			)
		} else {
			return (
				<SearchBody data={ this.state.data } error={ this.state.error } navigation={this.props.navigation}/>
			)
		}
	};

	getPlatform(iosResult, androidResult) {
		if (Platform.OS === 'ios') {
			return iosResult
		} else if (Platform.OS === 'android') {
			return androidResult
		}
	}

	render() {

		const styles = {
			container: {
				// borderWidth: 1, borderStyle: 'dashed', borderColor: 'blue',
				minHeight: 175,
				maxHeight: 350
			},
			searchIcon: {
				paddingStart: 15
			}
		};

		return (
			<Container style={styles.container}>
					<Form>
						<InputGroup>
							<Icon name={this.getPlatform('ios-search', 'android-search')}
										onPress={this.searchPoke}
										style={styles.searchIcon}/>
							<Input value={this.state.searchWord}
										 placeholder="Search Bar"
										 onChangeText={(pokemonSearch) => {
											 this.setState({searchWord: pokemonSearch});
										 }}
							/>
							<Button title="Pika !" onPress={ this.searchPoke } />
						</InputGroup>
					</Form>
				{this.renderBody()}
			</Container>
		)
	}
}
