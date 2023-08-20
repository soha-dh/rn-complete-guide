//* 02-18
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enterdText) => {
        setEnteredGoal(enterdText);
    }

    //? trasfer the button and text input in this seprate file
    return (
        <View style={styles.inputContainer} >
            <TextInput placeholder='Course Goal' style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
            {/* 
    //? onAddGoal resived from app file and run addGoalHandler function on app.js
    //| we need to pass parametr to this function thats why we used bind method by this way
*/}
            <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
        </View>
    );

};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', justifyContent: "space-between", alignItems: 'center'
    },
    input: { width: '80%', borderColor: 'black', borderWidth: 1, padding: 10 },
});

export default GoalInput;