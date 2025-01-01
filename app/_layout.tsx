import * as Font from 'expo-font';
import { Stack } from 'expo-router';
import { ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { AppProvider } from '@/components/AppContext/AppContext';

const _layout = () => {

  const [fontsLoaded, setFontsLoaded] = useState(true);

  const loadFonts = async () => {
    await Font.loadAsync({
      "RobotoSlab": require('../assets/fonts/CrimsonText-Regular.ttf'),
      "RobotoSlabBold": require('../assets/fonts/CrimsonText-Bold.ttf'),
      "InstrumentSerif": require('../assets/fonts/InstrumentSerif-Regular.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppProvider>
      <Stack>
        <Stack.Screen name='index' options={{
          headerShown: false
        }} />
        <Stack.Screen name='Categories' options={{
          headerShown: false
        }} />
        <Stack.Screen name='Questions' options={{
          headerShown: false
        }} />
      </Stack>
    </AppProvider>
  )
}

export default _layout
