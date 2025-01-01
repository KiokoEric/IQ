import React from 'react';
import { Link } from 'expo-router';
const Logo = require('../assets/images/IQ.jpg');
import { StyleSheet, View, Text, Image } from 'react-native';

const Home = () => {
return (
<View style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40, margin: 'auto', height: 850, paddingHorizontal: 20 }} >
    <Image source={Logo} style={styles.Image} />
    <Text style={{ color: 'black', fontFamily: 'InstrumentSerif', fontSize: 28, textAlign: 'center'}} >Welcome to IQ, Your Ultimate Quiz Companion!</Text>
    <Text style={{ color: 'black', fontFamily: 'InstrumentSerif', fontSize: 22, textAlign: 'center'}}>Unleash your knowledge and test your skills with IQ, the ultimate platform for fun, learning, and competition. Whether you're brushing up on trivia or simply challenging your friends, IQ offers an engaging and interactive experience for everyone.</Text>
    <Link href={'/Categories'} style={{ backgroundColor: 'black', borderRadius: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: 180, paddingVertical: 10, paddingHorizontal: 10,  }}>
        <Text style={{ color: 'white', fontFamily: 'InstrumentSerif', fontSize: 20, textAlign: 'center' }} >Get Started</Text>
    </Link>
</View>
)
}

export default Home

const styles = StyleSheet.create({
    Image: {
        height: 150,
        width: 150,
    }
})