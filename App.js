/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {View, StyleSheet, StatusBar, Button, FlatList} from 'react-native';

import GoalInput from './src/components/GoalInput';
import GoalItem from './src/components/GoalItem';

const App: () => Node = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => setModalIsVisible(true);
  const endAddGoalHandler = () => setModalIsVisible(false);

  const addGoalHandler = enteredGoalText => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = id => {
    setCourseGoals(currentCourseGoals =>
      currentCourseGoals.filter(goal => goal.id !== id),
    );
  };

  return (
    <>
      <StatusBar backgroundColor="#7FB77E" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#A065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={itemData => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => item.id}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    marginTop: 10,
    flex: 5,
  },
});
export default App;
