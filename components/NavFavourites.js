import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'

const data = [
    {
        id: '1',
        location: 'Home',
        icon: 'home',
        destination: 'Diggi Street, Tanchi Chowk, Atd'
    },
    {
        id: '2',
        location: 'Work',
        icon: 'briefcase',
        destination: 'Albadr Masjid, Atd'
    },
    {
        id: '3',
        location: 'Work',
        icon: 'briefcase',
        destination: 'Albadr Masjid, Atd'
    },

]

const NavFavourites = () => {
    return (
        <FlatList data={data} ItemSeparatorComponent={() => <View style={{ borderTopWidth: 1, borderColor: '#E5E7E9', marginTop: 4, width: '90%', alignSelf: 'center' }}></View>} keyExtractor={(item) => item.id} renderItem={({ item: {icon, location, destination} }) => (

            <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={{ padding: 5, alignItems: 'center', flexDirection: 'row', marginTop: 12}}>

                <Icon style={{ backgroundColor: '#E5E7E9', padding: 2, width: 42, height: 42, borderRadius: 42 / 2, alignItems: 'center', justifyContent: 'center', marginTop: 8, margin: 8 }} name={icon
                } color="white" type='ionicon' />

                <View style={{marginLeft: 4}}>
                    <Text style={{color: '#000', fontWeight: '500'}}>{location}</Text>
                    <Text style={{color: '#000', fontWeight: '500'}}>{destination}</Text>
                </View>

            </TouchableOpacity>


        )} />
    )
}

export default NavFavourites

const styles = StyleSheet.create({})