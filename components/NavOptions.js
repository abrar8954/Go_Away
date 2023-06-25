import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const  NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

    const data = [
        {
            id: '1',
            title: 'Get a ride',
            image: require('../assets/images/car.png'),
            screen: 'MapScreen'
        },
        {
            id: '2',
            title: 'Order food',
            image: require('../assets/images/fastFood.png'),
            screen: 'EatsScreen'
        },

    ]
    return (
        <FlatList data={data} keyExtractor={(item) => item.id} horizontal renderItem={({ item }) => (

            <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={{ padding: 2, paddingLeft: 6, paddingBottom: 8, paddingTop: 4, backgroundColor: '#E5E7E9', height: 200, width: 150, marginLeft: 10, justifyContent: 'center', alignItems: 'center',  }} /*disabled={!origin}*/>
                <View style={{/*opacity: !origin && 0.5*/}}>
                    <Image source={item.image} style={{ width: 100, height: 100, resizeMode: 'contain' }} />
                    <Text style={{ fontSize: 18, color: '#000', alignSelf: 'center', fontWeight: "semibold", marginTop: 3 }}>{item.title}</Text>
                    <Icon style={{backgroundColor: '#000', padding: 2, width: 32, height: 32, borderRadius: 32/2, alignItems: 'center', justifyContent: 'center', marginTop: 8}} name='arrowright' color="white" type='antdesign' />
                </View>
            </TouchableOpacity>


        )} />
    )
}

export default NavOptions

const styles = StyleSheet.create({})