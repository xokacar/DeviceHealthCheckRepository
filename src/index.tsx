import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { LoginScreen } from "./screens/Login/LoginScreen"
import { SignupScreen } from "./screens/SignUp/SignupScreen"
import { DashboardScreen } from "./screens/Dashboard/DashboardScreen"
import { OrganizationPanelScreen } from "./screens/OrganizationPanel/OrganizationPanel"
import { MyAccountScreen } from "./screens/MyAccount/MyAccountScreen"
import { DeviceAddScreen } from "./screens/DeviceAdd/DeviceAdd"
import { Ionicons } from "@expo/vector-icons"
import { theme } from "./core/theme"
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export const Navigator = () => {
	const isLogged = false

	if (isLogged) {
		return (
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName

						if (route.name === "Dashboard") {
							iconName = focused ? "server" : "server-outline"
						} else if (route.name === "Organization") {
							iconName = focused ? "at" : "at-outline"
						} else if (route.name === "My Account") {
							iconName = focused ? "person" : "person-outline"
						}

						return (
							<Ionicons
								name={iconName}
								size={size}
								color={color}
							/>
						)
					},
					tabBarActiveTintColor: theme.colors.primary,
					tabBarInactiveTintColor: "gray",
				})}
			>
				<Tab.Screen name="Dashboard" component={DashboardScreen} />
				<Tab.Screen
					name="Organization"
					component={OrganizationPanelScreen}
				/>
				<Tab.Screen name="My Account" component={MyAccountScreen} />
			</Tab.Navigator>
		)
	}

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="LoginScreen" component={LoginScreen} />
			<Stack.Screen name="SignupScreen" component={SignupScreen} />
		</Stack.Navigator>
	)
}
