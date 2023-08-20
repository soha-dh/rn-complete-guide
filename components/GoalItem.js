import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';

//? can use TouchableOpacity, TouchableHighlight TouchableWithoutFeedback

//// const GoalItem = props => { return <View style={styles.listItem}><Text>{itemData.item.value}</Text></View> };
const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete} >
            <View style={styles.listItem}><Text>{props.title}</Text></View>
        </TouchableOpacity>
    )
};



const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default GoalItem;