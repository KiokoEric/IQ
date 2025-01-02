import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { useAppContext } from '@/components/AppContext/AppContext';
const Categories = () => {

    // USE APP CONTEXT

    const { setCategory, setDifficulty, Type, setType  } = useAppContext()

    const Categorydata = [
        { value:"General Knowledge", key:"9" },
        { value:"Entertainment: Books", key:"10" },
        { value:"Entertainment: Film", key:"11" },
        { value:"Entertainment: Music", key:"12"},
        { value:"Entertainment: Musicals & Theatres", key:"13"},
        { value:"Entertainment: Television", key:"14"},
        { value:"Entertainment: Video Games", key:"15"},
        { value:"Entertainment: Board Games", key:"16"},
        { value:"Science & Nature", key:"17"},
        { value:"Science: Computers", key:"18"},
        { value:"Science: Mathematics", key:"19"},
        { value:"Mythology", key:"20" },
        { value:"Sports", key:"21"},
        { value:"Geography", key:"22" },
        { value:"History", key:"23" },
        { value:"Politics", key:"24"},
        { value:"Art", key:"25" },
        { value:"Celebrities", key:"26"},
        { value:"Animal", key:"27"}
    ]

    const Difficultydata = [
        { value:"Easy", key:"easy" },
        { value:"Medium", key:"medium" },
        { value:"Hard", key:"hard" },
    ]
    const Typedata = [
        { value:"Multiple Choice", key:"multiple" },
        { value:"True / False", key:"boolean"},  
    ]

return (
<ScrollView>
    <View style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', rowGap: 20, alignItems: 'center', justifyContent: 'center', height: 800  }} >
        <Text style={{ color: 'black', fontFamily: 'InstrumentSerif', fontSize: 25, marginTop: 20, textTransform:'capitalize', textDecorationLine: 'underline'  }} >Select your quiz parameters</Text>
        <View style={{ display: 'flex', flexDirection: 'column', rowGap: 2, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'black', fontFamily: 'InstrumentSerif', fontSize: 20,  textDecorationLine: 'underline' }} >Category</Text>
            <SelectList 
                setSelected={(value: any) => { setCategory(value) }} 
                data={Categorydata} 
                save="key"
                boxStyles= {{ borderBottomColor: 'black', width: 300 }}
                inputStyles={{ fontFamily: 'InstrumentSerif', fontSize: 18 }}
                dropdownTextStyles={{ fontFamily: 'InstrumentSerif', fontSize: 18, outline: 'none' }}
            />
        </View>
        <View style={{ display: 'flex', flexDirection: 'column', rowGap: 2, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'black', fontFamily: 'InstrumentSerif', fontSize: 20,  textDecorationLine: 'underline' }}>Difficulty</Text>
            <SelectList 
                setSelected={(value: any) => { setDifficulty(value) }} 
                data={Difficultydata} 
                save="key"
                boxStyles= {{ borderBottomColor: 'black', width: 300 }}
                inputStyles={{ fontFamily: 'InstrumentSerif', fontSize: 18, outline: 'none' }}
                dropdownTextStyles={{ fontFamily: 'InstrumentSerif', fontSize: 18 }}
            />
        </View>
        <View style={{ display: 'flex', flexDirection: 'column', rowGap: 2, alignItems: 'center', justifyContent: 'center', marginBottom: 25 }}>
            <Text style={{ color: 'black', fontFamily: 'InstrumentSerif', fontSize: 20,  textDecorationLine: 'underline' }}>Type</Text>
            <SelectList 
                setSelected={(value: any) => { setType(value) }}
                data={Typedata}
                save="key"
                boxStyles= {{ borderBottomColor: 'black', width: 300 }}
                inputStyles={{ fontFamily: 'InstrumentSerif', fontSize: 18, outline: 'none' }}
                dropdownTextStyles={{ fontFamily: 'InstrumentSerif', fontSize: 18 }}
            />
        </View>
        <Link href={'/Questions'} style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 10, borderRadius: 5, minWidth: 180 }} >
            <Text style={{ color: 'white', fontFamily: 'InstrumentSerif', fontSize: 18, textAlign: 'center'}}>Submit Parameters</Text>
        </Link>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 10, marginTop: 60 }}>
            <Link href={'/'} style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 10, borderRadius: 5, minWidth: 180 }}>
                <Text style={{ color: 'white', fontFamily: 'InstrumentSerif', fontSize: 18, textAlign: 'center' }}>Return to Home</Text>
            </Link>
        </View>
    </View>
</ScrollView>
)
}

export default Categories