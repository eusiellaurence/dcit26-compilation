//VIdallon, Eusiel Laurence F.   BSCS 3-2


import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');

  const [courseGoals, setCourseGoals] = useState([]);

  const goalinput=(enteredText)=>{setEnteredGoal(enteredText);
  };

  const addGoal = () => {
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: enteredGoal}]);
  };

  return (
    <View style={style.top}>
      <View style={style.input}>
        <TextInput 
          placeholder="Enter Item" 
          style={style.text} 
          onChangeText={goalinput}
          value={enteredGoal}
        />
        <Button title = "Add" onPress={addGoal}/>
      </View>
      <View>
      <FlatList keyExtractor={(item, index) => item.id} data={courseGoals} renderItem={itemData => (<View style = {style.list}><Text>{itemData.item.value}</Text></View> )}
      />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  top: {
    padding: 50
  },
  input:{
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  },
  text:{
    width: '80%', borderColor: 'black', borderWidth: 1, padding: 10
  },
  list:{
    padding: 10, marginVertical: 4, backgroundColor: '#ccc', borderWidth: 1
  }
});

