import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import MapView from 'react-native-maps';
import Map from '../components/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      {/* <Text>MapScreen</Text> */}

      <View style={{ flex: 1 }}>
        <Map />
      </View>

      <View style={{ flex: 1 }}>
        <Stack.Navigator>
          <Stack.Screen name="NavigateCard" component={NavigateCard} options={{ headerShown: false }} />
          <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} options={{ headerShown: false }} />

        </Stack.Navigator>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ backgroundColor: '#fff', position: 'absolute', top: 20, left: 20, height: 42, width: 42, borderRadius: 32 / 2, justifyContent: 'center', alignItems: 'center' }}>
        <Icon name='menu' />
      </TouchableOpacity>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})