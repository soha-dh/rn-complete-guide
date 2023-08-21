import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput'; //*02-18

export default function App() {


  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)

  //?  ( currentGoals ) used just for making callback function the result will change on setCourseGoals
  const addGoalHandler = goalTitle => { setCourseGoals(currentGoals => [...courseGoals, { id: Math.random().toString(), value: goalTitle }]) }


  //* 02-20
  //? this is for Delete ->resive goalId and filter it

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />} />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
});



