import { StyleSheet, Text, View, ImageBackground, StatusBar, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './Components/styles'
import background from './assets/image/bg.png'
import Item from './Components/item'
import Endgame from './Components/Endgame'
import stylesitem from './Components/item/styles'
import Time from './Components/Time/index'
import define from './Contain/define'


const shuffle = (array) => array.sort(() => Math.random() - 0.5);
const backgroundcs = [stylesitem.bg_1, stylesitem.bg_2, stylesitem.bg_3, stylesitem.bg_4, stylesitem.bg_5, stylesitem.bg_6, stylesitem.bg_7, stylesitem.bg_8, stylesitem.bg_9]
let arrBg = [];
for (let i = 0; i <= 10; i++) {
  arrBg = [...arrBg, ...backgroundcs]
}
const dataShuffle = () => shuffle(Array.from({ length: 50 }, (_, i) => i + 1));
const bgShuffle = () => shuffle(arrBg);
const App = () => {
  const [startGame, setStartGame]       = useState(false)
  const [items, setItem]                = useState(dataShuffle())
  const [bg, setbg]                     = useState((bgShuffle))
  const [numbernext, setnumbernext]     = useState(define.NUMBER_START)
  const [endGame, setendGame]           = useState(false)
  const [timeOut, setTimeOut]           = useState(define.TIME_DEFAULT)
  const [highScore, setHighScore]   = useState(0)
  const score = numbernext - 1;
  const onchoice = (value) => {
    if (value === define.NUMBER_START) {
      setStartGame(true)
    }
    if (value === numbernext) {
      if( value > highScore) {
        setHighScore(value)
      }
      setnumbernext(value + 1)
    }
    else {
      setendGame(true)
      setStartGame(false)
    }
  }
  const onClose = () => {
    setendGame(false)
    setStartGame(false)
    setnumbernext(define.NUMBER_START)
  }
  const onResponse = (isTimeOut) => {
    if (isTimeOut) {
      if (score > highScore) {
        setHighScore(score)
      }
      setendGame(true)
    }
  }
  return (
    <ImageBackground source={background} resizeMode="cover" style={styles.image}>
      <SafeAreaView style={styles.container}>
        <View style={styles.info}>
          <View style={styles.infoScores}>
            <Image
              source={require('./assets/image/tien.png')} style={{ width: 30, height: 30 }}
            />
            <Text style={styles.icontext}>
            {highScore}
            </Text>
          </View>
          <View style={styles.infoTime}>
            <Image
              source={require('./assets/image/dongho.png')} style={{ width: 30, height: 30 }} />
            <Text style={styles.icontext}>
            <Time onResponse={onResponse}
              startGame={startGame} 
              timeOut={timeOut}/> </Text>
          </View>
        </View>
        <View style={styles.play}>
          {items.map((val, index) =>
            <Item key={index.toString()}
              value={val}
              bg={bg[index]}
              onchoice={onchoice}

              score={score} />)}
        </View>
        <Endgame visible={endGame}
          onClose={onClose}
          score={score}

        />
      </SafeAreaView>
    </ImageBackground>
  )
}


export default App
