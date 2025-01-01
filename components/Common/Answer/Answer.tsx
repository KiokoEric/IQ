import React from 'react';
import Colors from '@/constants/Colors';
import { View, Text, TouchableOpacity, GestureResponderEvent } from 'react-native';

interface AnswerProps {
    onPress?: (e: GestureResponderEvent) => void;
    id?: string;
    key?: any;
    disabled?: any
    AnswerText: any;
}

const Answer: React.FC<AnswerProps> = ({ AnswerText, onPress }) => {
return (
<View>
    <TouchableOpacity style={{ backgroundColor: Colors.Black , display: 'flex', flexDirection: 'column', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 10, borderRadius: 4, width: 225 }} onPress={onPress}>
        <Text style={{ color: 'white', fontFamily: 'InstrumentSerif', fontSize: 24, textAlign: 'center'}}>{AnswerText}</Text>
    </TouchableOpacity>
</View>
)
}

export default Answer