/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Activity} from './src/component/Activity';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Provider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './src/redux/store/configureStore';
import {TouchableOpacity} from 'react-native';
import { History } from './src/component/History';
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Activity}
              options={({navigation}) => ({
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('History')}>
                    <FontAwesome
                      style={{paddingRight: 10}}
                      name={'history'}
                      size={25}
                    />
                  </TouchableOpacity>
                ),
              })}
            />
            <Stack.Screen name="History" component={History} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
