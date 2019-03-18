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
			view: 'Home',
			title: 'Pokedex',
		};

		console.log('navMain:', this.props.navigation)
	}



	currentView = <HomeScreen />;

	toggleView(view) {
		this.setState({view});

		switch(view) {
			case 'Home':
				return this.currentView = <HomeScreen />;
			case 'Collection' :
				return this.currentView = <CollectionScreen />;
			case 'WishList'	:
				return this.currentView = <WishlistScreen />;
			case 'Exchange' :
				return this.currentView = <ExchangeScreen />;
			default :
				return this.currentView = <HomeScreen />;
		}
	}

	render() {
		return (
			<Container>
				<HeaderElements nav={this.props} title={this.state.title}/>
				<Content>
					{ this.currentView }
				</Content>
				<Footer>
					<FooterTab>
						<Button onPress={() => this.toggleView('Collection')}>
							<Icon name="pokeball" backgroundColor="#CCCCCC"/>
							<Text>Collections</Text>
						</Button>
						<Button onPress={() => this.toggleView('WishList')}>
							<Icon name="heart" backgroundColor="#CCCCCC"/>
							<Text>Wish List</Text>
						</Button>
						<Button onPress={() => this.toggleView('Exchange')}>
							<Icon name="stack-exchange" backgroundColor="#CCCCCC"/>
							<Text>Exchange</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		)
	}
}
