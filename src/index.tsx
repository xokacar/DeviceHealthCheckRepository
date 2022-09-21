import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {LoginScreen} from './screens/Login/LoginScreen'
import { SignupScreen } from './screens/SignUp/SignupScreen';


const Router = createStackNavigator(
    {
        LoginScreen,
        SignupScreen,
    },
    {
        initialRouteName: 'LoginScreen',
        headerMode: 'none',
    }
);

export default createAppContainer(Router);