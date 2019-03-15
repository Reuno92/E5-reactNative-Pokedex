import React from "react";
import {View, Text, Button, Image, StyleSheet} from "react-native";
import {createStackNavigator, createAppContainer} from "react-navigation";
import SearchBarComponent from "./components/SearchBarComponent";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Single from './Single'

/**
 *  Help by Andrew on https://stackoverflow.com/questions/55140139/react-native-async-array-map-undefined-is-not-an-object
 *  I do not resolve to appeal to the teacher overdue. He will may resting, his health is more important than my homework.
 */

class HomeScreen extends React.Component {

    state = {
        isLoading: false,
        captured: false,
        wished: false,
        traded: false,
        data: {
            previous: '',
            next: '',
            count: 0,
            results: []
        }
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

    getPokemonFromApiAsync = async () => {
        try {
            this.setState({ isLoading: true });
            let response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=05&offset=0');
            let data = await response.json();
            this.setState({
                isLoading: false,
                data : data
            });
            console.log()
        } catch (error) {
            console.error(error);
        }
    };

    changePageFromApiAsync = async (apiCall) => {
        try {
            this.setState({ isLoading: true });
            let response = await fetch(apiCall);
            let data = await response.json();
            this.setState({
                isLoading: false,
                data : data
            });
            console.log([this.state.data.count, this.state.data.previous])
        } catch(error) {

        }
    };

    getId = (index) => {
      var id = /(?=\/).\d{1,3}/gi;
      var arr = id.exec(this.state.data.results[index].url);
      return arr[0]
    };

    async componentDidMount () {
        await this.getPokemonFromApiAsync();
    }

    render() {
        return (
            <View>
                <View style={ style.resultList }>
                    <Text style={ style.heading }>Quick List</Text>
                    <View style={ style.action }>
                        <Button title="prev" style={ style.actionItem } onPress={ () => this.changePageFromApiAsync(this.state.data.previous) }/>
                        <Button title="next" style={ style.actionItem } onPress={ () => this.changePageFromApiAsync(this.state.data.next) }/>
                    </View>

                </View>
                {
                    this.state.data.results.map((item, index) => {
                        if (index % 2 === 0) {
                            return (
                                <View key={ index } style={ [ style.resultList, { backgroundColor: '#B7EAE6' } ]}>
                                    <Image
                                        style={[{width: 10, height: 30}, style.icon]}
                                        source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'+  this.getId(index) +'.png' }} />
                                    <Text style={ [style.name, { textTransform: 'capitalize' }] }>{item.name}</Text>
                                    <View style={ style.action }>
                                        <Icon.Button name="pokeball" style={style.actionItem} backgroundColor="#B7EAE6" onPress={ () => this.updateCaptured() } />
                                        <Icon.Button name="heart" style={style.actionItem} backgroundColor="#B7EAE6" onPress={ () => this.updateWished() } />
                                        <Icon.Button name="stack-exchange" style={style.actionItem} backgroundColor="#B7EAE6" onPress={ () => this.updateTraded() } />
                                    </View>
                                </View>
                            )
                        } else {
                            return(
                                <View key={ index } style={ [ style.resultList, { backgroundColor: '#D9F1FF' } ]}>
                                    <Image
                                        style={[{width: 10, height: 30}, style.icon]}
                                        source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'+ this.getId(index) +'.png' }} />
                                    <Text style={ [style.name, { textTransform: 'capitalize' }] }>{item.name}</Text>
                                    <Text style={ style.id }>{item.id}</Text>
                                    <View style={ style.action }>
                                        <Icon.Button name="pokeball" style={style.actionItem} backgroundColor="#D9F1FF" onPress={ () => this.updateCaptured() } />
                                        <Icon.Button name="heart" style={style.actionItem} backgroundColor="#D9F1FF" onPress={ () => this.updateWished() } />
                                        <Icon.Button name="stack-exchange" style={style.actionItem} backgroundColor="#D9F1FF" onPress={ () => this.updateTraded() } />
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
    test: {
      borderWidth: 1,
      borderColor: 'blue',
      borderStyle: 'solid',
    },
    heading: {
      flex: 3/ 5,
      fontWeight: 'bold',
      fontSize: 18,
      paddingBottom: 7
    },
    resultList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 15,
        paddingBottom: 15,
        paddingStart: 10,
        alignItems: 'baseline'
    },
    icon: {
        flex: 1 / 6,
        marginStart: -15,
        marginTop: 3,
        resizeMode: 'contain'
    },
    name: {
       flex: 2 / 6,
        paddingBottom: 8
    },
    action: {
       flex: 3 / 6,
       flexDirection: 'row',
       flexWrap: 'wrap'
    },
    actionItem: {
        paddingStart: 10,
        paddingEnd: 10,
        color: 'grey',
        marginTop: -10
    }
});

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Single: {
        screen: Single
    }
});

export default createAppContainer(AppNavigator);
