import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../app/Home.js'
import Single from '../app/Single.js'

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Single: Single
    },
    {
        initialRouteName: "Home"
    }
);

export default createAppContainer(AppNavigator);
