
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  KeyboardAvoidingView
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
// import styled from 'styled-components'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';


// const MainContainer = styled.View`
//   flex:  1
//   backgroundColor: red
// `;

// const ImgTitle = styled.Image`
//   width: 25,
//   height: 20
// `;

function App() {
  {/* <MainContainer>
        <ImgTitle source={require('./assets/go.png')}/>
      </MainContainer> */}

  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
              <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />
              {/* <Stack.Screen name="EatsScreen" component={} options={{headerShown: false}}/> */}
            </Stack.Navigator>
            {/* <HomeScreen /> */}
          
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>

  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
