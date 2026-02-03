
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View,Button, Pressable, ScrollView } from 'react-native';

import {Task} from '../components/TaskList'
export default function Row ({ id, name }: Task){
  const [done,setDone] = useState(false);

 
  return(
<View>

<View style={styles.list}>

    <Text style={styles.text}>Id: {id}</Text>
    <Text  style={[{textDecorationLine: done ? 'line-through':'none'}]}>{name}</Text>
    
</View>

</View>
);
}

    

const styles = StyleSheet.create({
 
  list:{
backgroundColor: '#ffffffff',
borderBottomWidth: 1,
borderColor: '#ffffffff',
padding: 16,
  },
  text:{}

 
});

