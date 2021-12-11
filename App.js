import React from 'react';
import Home from './src/components/Home/Home';
import Serach from './src/components/Search/Search';
import Favourite from './src/components/Favourite/Favourite';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Serach" component={Serach} />
          <Stack.Screen name="Favourite" component={Favourite} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
