import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput , Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding:30}}>
      <View style={{flexDirection:'row', justifyContent:"space-between",alignItems:'center'}} >
        <TextInput placeholder='Course Goal' style={{width:'80%',borderColor:'black',borderWidth:1,padding:10}} />

        <Button title="ADD"   />
      </View>
      <View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

});