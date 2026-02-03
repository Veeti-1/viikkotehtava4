import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View,Button, Pressable, ScrollView } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import {Task} from '../components/TaskList'
const[done,setDone] = useState(false)
const Row = ({ id, name, description }: Task) => (
    
<View>
<View style={styles.list}>

    <Text style={styles.text}>{id}</Text>
    <Text style={styles.text}>{name}</Text>
    <Text style={styles.text}>{description}</Text>
</View>

</View>
);
const styles = StyleSheet.create({
 
  list:{
backgroundColor: '#f9f9f9',
borderBottomWidth: 1,
borderColor: '#eee',
padding: 16,
  },
  text:{}

 
});
export default Row