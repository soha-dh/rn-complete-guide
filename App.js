import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  //start for using state
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  // function goalInputHandler(enterdText) {
  //   setEnteredGoal(enterdText);
  // }
  const goalInputHandler = (enterdText) => {
    setEnteredGoal(enterdText);
  }

  // add to exist goals new one used ... for refrencetype
  // const addGoalHandler = () => { setCourseGoals([...courseGoals,enteredGoal]) }  ***the code like this has no guranty to sow always the last state on realtime for making sure about that use callback function for it 

  // const addGoalHandler = () => { setCourseGoals(currentGoals => { return [...courseGoals, enteredGoal] }) }
  //shorter way
  const addGoalHandler = () => { setCourseGoals(currentGoals => [...courseGoals, enteredGoal]) }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer} >
        <TextInput placeholder='Course Goal' style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />

        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>

      </View>

    </View>
  );
}
//start of StyleSheet Object (All-Styles)
const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
  inputContainer: {
    flexDirection: 'row', justifyContent: "space-between", alignItems: 'center'
  },
  input: { width: '80%', borderColor: 'black', borderWidth: 1, padding: 10 }

});
