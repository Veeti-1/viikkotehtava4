import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View,Button } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';




interface Task{
  id:string;
  name:string;
  description:string;
}

export default function TaskList(){
    const [tasks,setTasks] = useState<Task[]>([])
    const [input,setInput] = useState('')
    const [id, setId] = useState<Number>(0)
    const taskTitle: string = " ";
    const description: string = " ";
   
    const addTask=(taskTitle: string,description: string)=>{
     if(input.trim()){
        
        setTasks(prev =>[
            ...prev,
            {id:id.toString(), name:taskTitle, description:description}
        ])
        setInput('')
     }
    }
    return(
        <View style={styles.container}>
            <Text>Tasks</Text>
            <View>
                <TextInput
                style={styles.input}
                value={taskTitle}
                onChangeText={setInput}
                placeholder='Add new Task'
                />
                <TextInput
                style={styles.input}
                value={description}
                onChangeText={setInput}
                placeholder='description'
                />
                <Button
                title="Add" 
                onPress={()=>{
                    setId(tasks.length +1)
                    addTask(taskTitle,description)
                }}
                />
            </View>
                
                
                <SwipeListView
                data={tasks}
                keyExtractor={item=>item.id}
                renderItem={({item})=>(
            <View style={styles.list}>
                    <Text>
                        {item.name} id: {item.id}
                    </Text>
                    <Text>
                        {item.description}
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
    marginTop:50,
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