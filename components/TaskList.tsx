import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View,Button } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';




interface Task{
  id:string;
  name:string;
  
}
export default function TaskList(){
    const [tasks,setTasks] = useState<Task[]>([])
    const [input,setInput] = useState('')

    const addTask=()=>{
     if(input.trim()){
        setTasks(prev =>[
            ...prev,
            {id:Date.now().toString(), name:input.toString()}
        ])
     }
    }
    return(
        <View style={styles.container}>
            <Text>Tasks</Text>
            <View>
                <TextInput
                style={styles.input}
                value={input}
                onChangeText={setInput}
                placeholder='Add new Task'
                />
                
                <Button
                title="Add" 
                onPress={addTask}
                />
            </View>
                
                
                <SwipeListView
                data={tasks}
                keyExtractor={item=>item.id}
                renderItem={({item})=>(
            <View style={styles.list}>
                    <Text>
                        {item.name}
                    </Text>
                   </View>
                )}
                renderHiddenItem={()=><View style={styles.rowBack}/>}
                rightOpenValue={-75}
                disableRightSwipe

                />

                
        </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list:{
backgroundColor: '#f9f9f9',
borderBottomWidth: 1,
borderColor: '#eee',
padding: 16,
  },
  rowBack: {
backgroundColor: '#ddd',
flex: 1,
alignItems: 'flex-end',
justifyContent: 'center',
paddingRight: 20,
  },
  input:{

  }
});