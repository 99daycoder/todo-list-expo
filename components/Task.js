import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default function Task({text}) {
  return (
    <View style={styles.taskContainer}>
        <View style={styles.squareAndText} >
        <View style={styles.square} ></View>
        <Text> {text} </Text>
        </View>
        <View style={styles.circle} ></View>
    </View>
  )
}

const styles = StyleSheet.create({
    taskContainer: {
      backgroundColor: 'white',
     marginHorizontal:10,
      borderRadius:10,
      height:53,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
      
    },
    taskText: { 
        maxWidth: '80%',
      
  
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity:0.4,
        borderRadius:5,
        margin:15,
    },
    circle: {
        height:12,
        width:12,
        borderRadius:5,
        borderWidth:2,
        borderColor: '#55BCF6',
        margin:15,

    },
    squareAndText:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',

    }
  
  });