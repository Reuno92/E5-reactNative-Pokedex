import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Container, Header, Button, Left, Body, Right, Content, Footer, FooterTab } from 'native-base';

export default class Single extends Component {
    state = {
        isLoading: false,
        data: {
            abilities: [
              {
                ability: [{ name: "" }],
                is_hidden: false,
                slot: 0
              }
            ],
            base_experience: 0,
            forms: [{ name: ""}],
            height: 0,
            held_items: [],
            id: 0,
            is_default: false,
            location_area_encounters: "",
            moves: [
              {
              move: {
                  name: "",
                  url: ""
              },
              version_group_details: [
                  {
                    level_learned_at: 0,
                    move_learn_method: { name: "" },
                    version_group: { name: "" }
                  }
              ]
            }],
            name: "",
            order: 0,
            species: [
                { name: "" }
            ],
            sprites: [{
                back_default: "",
                back_female: "",
                back_shiny: "",
                back_shiny_female: "",
                front_default: "",
                front_female: "",
                front_shiny: "",
                front_shiny_female: ""
            }],
            stats: [
                {
                    base_stat: 0,
                    effort: 0,
                    stat: { name: "", }
                }
            ],
            types: [{ slot: 0, type: [{ name }] }],
            weight: 0
        },
    };

    render() {
        return (
            <Container>
                <Header>
                    <Left><Button title="Back" onPress={ () => this.props.navigation.goBack() } /></Left>
                    <Body>{ this.state.title }</Body>
                    <Right><Button title="Go Home" onPress={ () => this.props.navigation.navigate('Home')} /></Right>
                </Header>
                <Content>
                    <Text>This is a Single View</Text>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button>
                            <Image source={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png"} />
                            <Text>Previous</Text>
                        </Button>
                        <Button>
                            <Image source={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"} />
                            <Text>Next</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

const style = StyleSheet.create({
    name: {

    },
    id: {

    },
    specie: {

    },
    measure: {

    },
    height: {

    },
    weight: {

    },
    basicAbility: {

    },
    statName: {

    },
    statValue: {

    }
});
