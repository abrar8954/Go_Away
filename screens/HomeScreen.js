import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'
import { setOrigin } from '../slices/navSlice'
import { setDestination } from '../slices/navSlice'
import NavFavourites from '../components/NavFavourites'

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, paddingTop: 25, paddingLeft: 12, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 28, color: '#000', fontFamily: 'Roboto-Medium', marginBottom: 15 }}>Go Away</Text>
      <GooglePlacesAutocomplete
        placeholder='Where From?'
        styles={{
          container: {
            flex: 0
          },
          textInput: {
            fontSize: 18,
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
          dispatch(setOrigin({
            location: details.geometry.location,
            description: data.description
          }))

          dispatch(setDestination(null))

        }}
        fetchDetails={true}

      />
      <View >
        <NavOptions />
      </View>

      <View style={{marginTop: 15}}>
        <NavFavourites />
      </View>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})