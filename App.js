import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './components/StartGameScreen';
import GameScreen from './components/GameScreen';
import GameOverScreen from './components/GameOverScreen';

export default function App() {

  //The number to be guessed.
  const [usersChoice, setUsersChoice] = useState();
  //The total rounds computer will take to guess the number.
  const [totalRounds, setTotalRounds] = useState(0);

  /**To restart the game by clicking the play again button.*/
  const restartGame = () => {
    setUsersChoice(null);
    setTotalRounds(0);
  }

  /**To start the game after selecting a number and clicking on Start button.*/
  const startGame = (seletedNumber) => {
    setUsersChoice(seletedNumber);
  }

  /**To set the total rounds upon finishing the game. */
  const gameOver = (rounds) => {
    setTotalRounds(rounds);
  }

  let content = <StartGameScreen onStartGame={startGame} />;

  //Displaying the game screen if the number has been selected.
  if (usersChoice && totalRounds == 0) {
    content = <GameScreen chosenNumber={usersChoice} onGameOver={gameOver} />;
  }

  //Displaying the last screen if the game has been finished.
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
