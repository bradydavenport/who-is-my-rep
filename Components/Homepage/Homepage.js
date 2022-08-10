import { React, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';
import { REACT_APP_GOOGLE_MAPS_API_KEY } from '@env';

export default function Homepage() {

  const [location, setLocation] = useState([]);

  useEffect(() => {
    const getLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        Location.setGoogleApiKey(REACT_APP_GOOGLE_MAPS_API_KEY);
        const result = await Location.getCurrentPositionAsync();
        const {latitude, longitude} = result.coords;
        const zip = await Location.reverseGeocodeAsync({latitude, longitude});
        console.log('zip: ', zip);
        setLocation(zip);
      }
    }
    getLocation();
  }, []);

  console.log('location: ', location);

  return (
    <>
      <View>
        <Text>Who is my representative?</Text>

        <Text>The democratic process is important, and equally important is being able to communicate your ideas, thoughts, and concerns with those who represent you in United States Congress.  Simply use your location or a ZIP code that you specify to get the contact information of your representatives</Text>
      </View>

      <View>
        <Text>Location:</Text>
      </View>
    </>
  )
}