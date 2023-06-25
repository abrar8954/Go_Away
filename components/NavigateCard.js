import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { setDestination } from '../slices/navSlice'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites'
import { Icon } from '@rneui/themed'

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '500', fontSize: 18, marginTop: 15 }}>Good Morning, Abrar</Text>
      <View style={{ borderTopWidth: 1, borderColor: '#E5E7E9', marginTop: 15 }}>
        <GooglePlacesAutocomplete
          placeholder='Where From?'
          styles={{
            container: {
              flex: 0,
              backgroundColor: 'white',
              paddingTop: 20
            },
            textInput: {
              fontSize: 18,
              backgroundColor: '#DDDDDF',
              borderRadius: 0
            },
            textInputContainer: {
              paddingHorizontal: 20,
              paddingBottom: 0
            }
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en'
          }}
          minLength={2}
          returnKeyType={'search'}
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            console.log(data);
            dispatch(setDestination({
              location: details.geometry.location,
              description: data.description
            }))

            navigation.navigate('RideOptionsCard')

          }}
          fetchDetails={true}

        />
      </View>
      <View style={{flex: 0.90}}>
        <NavFavourites />
      </View>


      <View style={{flex: 0.35, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', borderTopWidth: 1, borderColor: '#E5E7E9' }}>
        <TouchableOpacity onPress={() => navigation.navigate('RideOptionsCard')} style={{ backgroundColor: '#000', width: 90, height: 38, flexDirection: 'row', alignItems: 'center', borderRadius: 20, justifyContent: 'center' }} >

          <Icon name='car' color="white" type='font-awesome' size={16} />
          <Text style={{ fontSize: 16, color: '#fff', alignSelf: 'center', fontWeight: "semibold", marginLeft: 12 }}>Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={{ backgroundColor: '#fff', width: 88, height: 38, flexDirection: 'row', alignItems: 'center', borderRadius: 20, justifyContent: 'center' }} >

          <Icon name='fast-food-outline' color="#000" type='ionicon' size={16} />
          <Text style={{ fontSize: 16, color: '#000', alignSelf: 'center', fontWeight: "semibold", marginLeft: 12 }}>Eats</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default NavigateCard

const styles = StyleSheet.create({})