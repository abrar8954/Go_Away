import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlice'

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  const data = [
    {
      id: '1',
      title: 'UberX',
      image: require('../assets/images/car.png'),
      multiplier: 1
    },
    {
      id: '2',
      title: 'Uber XL',
      image: require('../assets/images/carb.png'),
      multiplier: 1.2
    },
    {
      id: '3',
      title: 'Uber Lux',
      image: require('../assets/images/suv.png'),
      multiplier: 1.75
    },

  ]

  //surge pricing
  const SURGE_CHARGE_RATE = 2.3;

  return (
    <View style={{ paddingHorizontal: 8, flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.navigate('NavigateCard')} style={{ position: 'absolute', top: 8, left: 15 }}>
        <Icon name='chevron-left' color="#000" type='fontawesome' />
      </TouchableOpacity>
      <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: '600', color: '#000', marginTop: 8 }}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
      
      <View style={{ marginTop: 20, flex: 0.95 }}>

        <FlatList data={data} showsVerticalScrollIndicator={false} keyExtractor={(item) => item.id} renderItem={({ item }) => (

          <TouchableOpacity onPress={() => setSelected(item)} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15, paddingHorizontal: 30, backgroundColor: item.id == selected?.id ? '#E5E7E9' : null}} >
            <Image source={item.image} style={{ width: 62, height: 62, resizeMode: 'contain' }} />
            <View style={{}}>

              <Text style={{ fontSize: 18, color: '#000', alignSelf: 'center', fontWeight: '600', marginTop: 3 }}>{item.title}</Text>
              <Text style={{ fontSize: 14, color: '#000', alignSelf: 'center', fontWeight: "semibold", marginTop: 3 }}>{travelTimeInformation?.duration?.text} Travel Time</Text>
            </View>
            <Text style={{ fontSize: 18, color: '#000', alignSelf: 'center', fontWeight: "600", marginTop: 3 }}>
              {new Intl.NumberFormat('en-gb', {
                style: 'currency',
                currency: 'GBP'
              }).format(
                (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * item.multiplier) / 100
              )}
              
              </Text>
          </TouchableOpacity>


        )} />

      </View> 

      <View style={{ borderTopWidth: 1, borderColor: '#E5E7E9'}}>
        <TouchableOpacity onPress={() => {}} disabled={!selected} style={{ justifyContent: 'space-between', alignItems: 'center', margin: 5, marginTop: 15, backgroundColor: selected ? '#000' : '#E5E7E9', paddingVertical: 10 }} >
          <Text style={{ fontSize: 18, color: '#fff', alignSelf: 'center', fontWeight: "600", }}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})