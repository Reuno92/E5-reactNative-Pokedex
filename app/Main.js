import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button } from 'native-base';
import { Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

/* Screen */
import HomeScreen from "./components/Home.components";
import CollectionScreen from "./components/Collection.components";
import WishlistScreen from "./components/Wishlist.components";
import ExchangeScreen from "./components/Exchange.components";
import HeaderElements from "./components/shared/Header.components";

export default class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			idLoggedIn: true,
			user : [{ name: 'Renaud', email: 'renaud.racinet@estiam.com', }],
			view: 'Home',
			title: 'Pokedex',
			userDetail: [
				{
					"captured": [ { id: 25, name: "pikachu" }, { id: 1, name: "bulbasaur"}, { id: 4, name: "charmander" }, {id: 9, name: 'blastoise'}],
					"wished": [ { id: 18, name: "pidgeot" }, { id: 6, name: "squirtle"}],
					"exchange": [ { id: 25, name: "Pikachu" }, {id: 9, name: 'blastoise'}],
				}
			],
			Friends: [
				{
				  "user": 'Rourou',
					"captured" : [ { id: 12, name: 'butterfree' }, { id: 35, name: 'clefairy' }, { id: 67, name: 'machoke' }, { id: 89, name: 'muk' }, { id: 32, name: 'nidoran-m' } ],
					"wished"   : [ {id: 9, name: 'blastoise'}, { id: 29, name: 'nidoran-f' }, {id: 78, name: 'rapidash' }, {id: 43, name: 'oddish' } ],
					"exchange" : [ { id: 12, name: 'butterfree' }, { id: 89, name: 'muk' }, { id: 32, name: 'nidoran-m' } ]
				},
				{
					"user": 'Unicorn69',
					"captured" : [ { id: 709, name: 'trevenant' }, { id: 123, name: 'scyther'}, { id: 56, name: 'mankey'}, {id: 450, name: 'hippowdon'}, {id: 29, name: 'nidoran-f'} ],
					"wished"   : [ { id: 32, name: 'nidoran-m'}, { id: 89, name: 'muk'}, { id: 78, name: 'slowpoke'}, {id: 12, name: 'butterfree'} ],
					"exchange" : [ {id: 450, name: 'hippowdon'}, {id: 56, name: 'mankey'} ]
				}
			]
		};
	}

	currentView = <HomeScreen navigation={this.props.navigation}/>;

	toggleView(view) {
		this.setState({view});

		switch (view) {
			case 'Home':
				return this.currentView = <HomeScreen navigation={this.props.navigation}/>;
			case 'Collection' :
				return this.currentView = <CollectionScreen navigation={this.props.navigation} state={this.state} />;
			case 'WishList'  :
				return this.currentView = <WishlistScreen navigation={this.props.navigation} state={this.state} />;
			case 'Exchange' :
				return this.currentView = <ExchangeScreen navigation={this.props.navigation} state={this.state} />;
			default :
				return this.currentView = <HomeScreen navigation={this.props.navigation} state={this.state} />;
		}
	}

	render() {
		return (
			<Container>
				<HeaderElements nav={this.props} title={this.state.title}/>
				<Content>
					{this.currentView}
				</Content>
				<Footer>
					<FooterTab>
						<Button onPress={() =>
							(this.state.idLoggedIn) ? this.toggleView('Collection') : this.props.navigation.navigate('Login')
						}>
							<Icon name="pokeball" backgroundColor="#CCCCCC"/>
							<Text>Collections</Text>
						</Button>
						<Button onPress={() =>
							(this.state.idLoggedIn) ? this.toggleView('WishList') : this.props.navigation.navigate('Login')
						}>
							<Icon name="heart" backgroundColor="#CCCCCC"/>
							<Text>Wish List</Text>
						</Button>
						<Button onPress={() =>
							(this.state.idLoggedIn) ? this.toggleView('Exchange') : this.props.navigation.navigate('Login')
						}>
							<Icon name="stack-exchange" backgroundColor="#CCCCCC"/>
							<Text>Exchange</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		)
	}
}
