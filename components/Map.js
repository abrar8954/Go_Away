import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import MapView, { MapPolyline, Marker, Polyline } from 'react-native-maps'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch, useSelector } from 'react-redux'
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice'
import { Image } from 'react-native'
import MapViewDirections from 'react-native-maps-directions';

const Map = () => {
    // const origin = useSelector(selectOrigin);
    // const destination = useSelector(selectDestination);
    const mapRef = useRef(null);
    const dispatch = useDispatch();

    const [origin, setOrigin] = useState({
        latitude: 37.386051,
        longitude: -122.083855,
    });

    const [destination, setDestination] = useState({
        latitude: 37.389081,
        longitude: -122.083855,
    });

    // useEffect(() => {
    //     if (!origin || !destination) return;

    //Zoom & fit to markers
    //     mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
    //         edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
    //     });
    // }, [origin, destination]);


    // useEffect(() => {
    //     if (!origin || !destination) return;

    //     const getTravelTime = async () => {
    //         fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}
    //         &destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
    //         })
    //     }

    //     getTravelTime();

    // }, [origin, destination, GOOGLE_MAPS_APIKEY]);

    return (
        <MapView
            ref={mapRef}
            style={{
                width: '100%',
                height: '100%'
            }}
            initialRegion={{
                latitude: origin.latitude,    //origin.location.lat,
                longitude: origin.longitude,  //origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
            key={GOOGLE_MAPS_APIKEY}
        >

            {/* {
                origin && destination && (
                    <MapViewDirections
                        origin={37.78845}   //origin.description
                        destination={-122.4344}  //destination.description
                        apikey={GOOGLE_MAPS_APIKEY}
                    />
                )
            } */}

            {/* {
                origin?.location && ( */}
            <Marker coordinate={{
                latitude: origin.latitude,       //origin.location.lat,
                longitude: origin.longitude       //origin.location.lng,
            }} draggable
                onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
                title='origin'
                description='This is origin place'
                identifier='origin'
            >
                <Image source={require('../assets/images/car.png')} style={{ width: 55, height: 55, }} />
            </Marker>
            {/* )
            } */}

            {/* {
                destination?.location && ( */}
            <Marker coordinate={{
                latitude: destination.latitude,       //destination.location.lat,
                longitude: destination.longitude,      //destination.location.lng,
            }} draggable
                onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
                title='destination'
                description='This is destination place '
                identifier='destination'
            >

            </Marker>
            {/* )
            } */}

            <MapPolyline coordinates={[origin, destination]} strokeColor="#000" strokeWidth={8} />
        </MapView >
    )
}

export default Map

const styles = StyleSheet.create({})