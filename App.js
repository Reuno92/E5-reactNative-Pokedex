import React from "react";
import {View, Text, Button, StyleSheet} from "react-native";
import {createStackNavigator, createAppContainer} from "react-navigation";
import SearchBarComponent from "./components/search";
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends React.Component {

    state = {
        captured: false,
        wished: false,
        traded: false
    };

    updateCaptured() {
        this.setState( { captured: !this.state.captured })
    }

    updateWished() {
        this.setState( { wished: !this.state.wished })
    }

    updateTraded() {
        this.setState( { traded: !this.state.traded })
    }

    render() {

        data = [
            {
                name: "Pikachu",
                id: "001",
            },
            {
                name: "Raichu",
                id: "002"
            }
        ];

        return (
            <View>
                <SearchBarComponent/>
                {
                    data.map(item => {
                        if (item % 2 === 0) {
                            return (
                                <View key={ item.id } style={ [ style.resultList, { backgroundColor: '#B7EAE6' } ]}>
                                    <Text style={ style.name }>{item.name}</Text>
                                    <Text style={ style.id }>{item.id}</Text>
                                    <View style={ style.action }>
                                        <Text style={style.actionItem}>Captured</Text>
                                        <Text style={style.actionItem}>Wish</Text>
                                        <Text style={style.actionItem}>Trade</Text>
                                    </View>
                                </View>
                            )
                        } else {
                            return(
                                <View key={ item.id } style={ [ style.resultList, { backgroundColor: '#D9F1FF' } ]}>
                                    <Text style={ style.name }>{item.name}</Text>
                                    <Text style={ style.id }>{item.id}</Text>
                                    <View style={ style.action }>
                                        <Icon.Button name="poker-chip" style={style.actionItem} backgroundColor="#D9F1FF" onPress={ () => this.updateCaptured() } />
                                        <Icon.Button name="heart" style={style.actionItem} backgroundColor="#D9F1FF" onPress={ () => this.updateWished() } />
                                        <Icon.Button name="exchange" style={style.actionItem} backgroundColor="#D9F1FF" onPress={ () => this.updateTraded() } />
                                    </View>
                                </View>
                            )
                        }

                    })
                }
            </View>
        );
    }
}

const style = StyleSheet.create({
    resultList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 15,
        paddingBottom: 15,
        paddingStart: 10,
        alignItems: 'baseline'
    },
    name: {
       flex: 1 / 4
    },
    id: {
       fontWeight: 'bold',
       flex: 1 / 4
    },
    action: {
       flex: 2 / 4,
       flexDirection: 'row',
       flexWrap: 'wrap'
    },
    actionItem: {
        paddingStart: 5,
        paddingEnd: 5
    }
});

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    }
});

export default createAppContainer(AppNavigator);
