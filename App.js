import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import GameScreen from './components/GameScreen';

import Header from './components/Header';
import StartGameScreen from './components/StartGameScreen';

export default function App() {

  const [usersChoice, setUsersChoice] = useState();

  const startGame = (seletedNumber) => {
    setUsersChoice(seletedNumber);
  }

  let content = <StartGameScreen onStartGame={startGame} />;

  if(usersChoice){
    content = <GameScreen />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
