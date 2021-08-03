import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './components/StartGameScreen';
import GameScreen from './components/GameScreen';
import GameOverScreen from './components/GameOverScreen';

export default function App() {

  const [usersChoice, setUsersChoice] = useState();
  const [totalRounds, setTotalRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  const restartGame = () => {
    setUsersChoice(null);
    setTotalRounds(0);
  }

  const startGame = (seletedNumber) => {
    setUsersChoice(seletedNumber);
  }

  const gameOver = (rounds) => {
    setTotalRounds(rounds);
  }

  let content = <StartGameScreen onStartGame={startGame} />;

  if (usersChoice && totalRounds == 0) {
    content = <GameScreen chosenNumber={usersChoice} onGameOver={gameOver} />;
  }
  else if (totalRounds > 0) {
    content = <GameOverScreen onRestart={restartGame} selectedNumber={usersChoice} totalGuesses={totalRounds} />
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
