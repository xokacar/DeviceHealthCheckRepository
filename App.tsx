
import { StyleSheet } from 'react-native';
import {Provider} from 'react-native-paper';
import {theme} from './src/core/theme'
import {Navigation} from './src/types'
import {Navigator} from './src/index'
import { NavigationContainer } from '@react-navigation/native';


type Props = {
  navigation: Navigation;
};

export default function Application() {
  return (
    <Provider theme={theme} >
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
