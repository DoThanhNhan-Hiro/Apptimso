import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const index = ({value,bg,onchoice,score}) => {
  const active = value <=score ? styles.active: {}
  const activenumber = value <=score ? styles.activenumber: {}

  return (
    <TouchableOpacity style={styles.container} onPress={() => onchoice(value)}>
        <View style={[styles.item,bg,active]}>
            <Text style={[activenumber,styles.itemnumber]}>{value <10 ? `0${value}` :value}</Text>
            </View>
    </TouchableOpacity>
  )
}

export default index