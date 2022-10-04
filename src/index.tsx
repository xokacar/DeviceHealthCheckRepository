import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {LoginScreen} from './screens/Login/LoginScreen'
import { SignupScreen } from './screens/SignUp/SignupScreen';
import { DashboardScreen } from './screens/Dashboard/DashboardScreen';
import { OrganizationPanelScreen } from './screens/OrganizationPanel/OrganizationPanel';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const Navigator = () => {

    const isLogged = false;

    if (isLogged) {
        return (
            <Tab.Navigator screenOptions={ {headerShown:false} }>
            <Tab.Screen name="Dashboard" component={DashboardScreen}   />
            <Tab.Screen name='Organization' component={OrganizationPanelScreen}/>
            </Tab.Navigator>
        );
    }



    return (
        <Stack.Navigator screenOptions={ {headerShown:false} }   >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
        </Stack.Navigator>
    )
}
