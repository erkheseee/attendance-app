import { View, Text, ImageBackground, StyleSheet, TouchableOpacity  } from 'react-native'
import React from 'react'
import Building from '../../../../assets/images/building.jpeg'
import CustomWidget from '../../../components/CustomWidget'
import Header from '../../../components/Header/Header'
import { getGradeProgress } from '../../Classes/getScores'

const Class = ({route, navigation}) => {
  const {angi} = route.params;

  return (
    <ImageBackground source={Building} style={{flex: 1}}>
      <View style={styles.container}>
        <Header/>
        <View style={{flex: 6, justifyContent: 'space-between'}}>
          
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
})

export default Class