import axios from 'axios';
import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import Button from '@/components/Common/Button/Button';
import Answer from '@/components/Common/Answer/Answer';
const Loading = require('../assets/images/Loading.jpg');
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { useAppContext } from '@/components/AppContext/AppContext';

const Questions = () => {

    const {Category, Difficulty, Type} = useAppContext()

    // USESTATE HOOK

    const [Score, setScore] = useState<number>(0);
    const [Questions, setQuestions] = useState<any[]>([{}]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [ShowResults, setShowResults] = useState<boolean>(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string>('');
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);

    // CALLING ON A QUIZ BASED ON THE QUIZ SETTINGS

    useEffect(() => {

        try {
            axios.get(`https://opentdb.com/api.php?amount=10&category=${Category}&difficulty=${Difficulty}&type=${Type}`)
            .then(response => {
                setQuestions(response.data.results) 
            })
            setTimeout(() => {
                setIsLoading(false);
                }, 2500);
            }
        catch (error) {
            console.log(error)
        }
    },[])

    // HANDLE ANSWER FUNCTION

    const handleAnswer = (answer: any) => {

        setSelectedAnswer(answer)
        setTimeout(() => {
            if (answer === Questions[currentQuestion].correct_answer) {
                setScore(prev => prev + 1)
            }
            if (currentQuestion + 1 < 10) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setShowResults(true);
            }
        }, 500);
    };

    // HANDLE NEXT QUESTION FUNCTION

    const handleNextQuestion = () => {
        setSelectedAnswer('');
        if (currentQuestion + 1 < Questions.length ) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
        }
    }

    // SHOW RESULTS

    if (ShowResults) {
        return (
            <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 750, paddingVertical: 10, paddingHorizontal: 10 }} >
                <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 45, textAlign: 'center' }}>Quiz Results</Text>
                <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 500, margin: 'auto', rowGap: 20 }}>
                    <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 30, textAlign: 'center' }} >You Answered</Text>
                    <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 30, textAlign: 'center' }}>{Score}/ 10</Text>
                    <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 30, textAlign: 'center' }}>Questions Correct</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                    <Link href={'/'} style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingVertical: 13, paddingHorizontal: 10, borderRadius: 5, minWidth: 180 }}>
                        <Text style={{ color: 'white', fontFamily: 'InstrumentSerif', fontSize: 20, textAlign: 'center' }}>Return to Home</Text>
                    </Link>
                    <Link href={'/Categories'} style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingVertical: 13, paddingHorizontal: 10, borderRadius: 5, minWidth: 180 }}>
                        <Text style={{ color: 'white', fontFamily: 'InstrumentSerif', fontSize: 20, textAlign: 'center' }} >New Game</Text>
                    </Link>
                </View>
            </View>
        )
    }

    // OPTIONS VARIABLE

    const Options = Questions[currentQuestion]

return (
<ScrollView>
    <View>
        {   
        isLoading ? (
            <View style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 'auto', height: 800 }} >
                <Image source={Loading} style={styles.Loading}  />
            </View>
        ) :
        (
        <View style= {{ backgroundColor: 'white',display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', rowGap: 20, minHeight: 800, paddingHorizontal: 10, paddingVertical: 10 }} >
            <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 25, textAlign: 'center' }}>Category: {Questions[currentQuestion].category}</Text>
            <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 25, textAlign: 'center' }}>Question Number: {currentQuestion + 1} / {Questions.length}</Text>
            <View>
                <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 25, textAlign: 'center' }}>{Questions[currentQuestion].question}</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', rowGap: 20 }}>
            { 
                [...Questions[currentQuestion].incorrect_answers, Questions[currentQuestion].correct_answer].sort().map((answer:any, index: number) => (
                    <Answer 
                        key={index}
                        onPress={() => handleAnswer(answer)}
                        AnswerText={answer}
                        disabled={selectedAnswer !== ''}
                    />
                )) 
            }
            </View>
            <View style={{ marginTop: 20 }} >
                <Button 
                    onPress={handleNextQuestion}
                    ButtonText='Next Question'
                />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10, marginTop: 20 }}>
                <Link href={'/'} style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 10, borderRadius: 5, minWidth: 180 }}>
                    <Text style={{ color: 'white', fontFamily: 'InstrumentSerif', fontSize: 20, textAlign: 'center' }}>Return to Home</Text>
                </Link>
                <Link href={'/Categories'} style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 10, borderRadius: 5, minWidth: 180 }}>
                    <Text style={{ color: 'white', fontFamily: 'InstrumentSerif', fontSize: 20, textAlign: 'center' }} >Quiz Settings</Text>
                </Link>
            </View>
        </View>
        )}
    </View>
</ScrollView>
)
}

export default Questions

const styles = StyleSheet.create({
    Loading: {
        height: 450,
        width: 450,
    }
})