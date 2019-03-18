import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from '../app/Main'
import Account from '../app/Account'
import Login from '../app/Login'
import Single from '../app/Single'

const AppNavigator = createStackNavigator(
    {
      Home: { screen: Main },
      Single: { screen: Single },
      Account: { screen: Account },
      Login: { screen: Login }
    },
    {
      headerMode: "none",
      initialRoute: "Home"
    }
);

export default createAppContainer(AppNavigator);
