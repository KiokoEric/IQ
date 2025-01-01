import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface ButtonProps {
    onPress?: () => void;
    Navigation?: any;
    ButtonText: string;
}

const Button: React.FC<ButtonProps> = ({ onPress, ButtonText }) => {
return (
    <TouchableOpacity style={{ backgroundColor: 'black', paddingVertical: 10, paddingHorizontal: 10, borderRadius: 5, minWidth: 180 }} onPress={onPress}>
        <Text style={{ color: 'white', fontFamily: 'InstrumentSerif', fontSize: 18, textAlign: 'center'}}>{ButtonText}</Text>
    </TouchableOpacity>
)
}

export default Button