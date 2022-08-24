import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const GoalItem = props => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#210644'}}
        style={({pressed}) => pressed && styles.pressedItem}
        onPress={props.onDeleteItem.bind(this, props.id)}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    marign: 8,
    borderRadius: 25,
    backgroundColor: '#5e0acc',
    marginTop: 5,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: '#fff',
    padding: 12,
  },
});

export default GoalItem;
