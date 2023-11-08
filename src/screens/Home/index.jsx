import { View, Text , StyleSheet, ImageBackground} from 'react-native'
import React from 'react'
import Widget from '../../components/Widget'
import UserHeader from '../../components/UserHeader/UserHeader'
import { useNavigation } from '@react-navigation/native'
import Building from '../../../assets/images/building.jpeg'

const Home = (props) => {
  const {user} = props.route.params;
  const navigation = useNavigation();
  
  const navigateToClasses = () => {
    navigation.navigate('Classes', {type: 'Classes'});
  };
  const navigateToSchedule = () => {
    navigation.navigate('Schedule');
  };
  const navigateToGrades = () => {
    navigation.navigate('Classes', {type: 'Grades'});
  };
  const navigateToAssignments = () => {
    navigation.navigate('Assignments');
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground source={Building} style={{flex:1}}>
        <View style={{flex: 1, backgroundColor: 'rgba(255,255,255,0.4)'}}>
          <UserHeader userName={user.userName} userJob='Сурагч' userMajor={user.userMajor}/>
          <View style={styles.widgets}>
            <Widget icon='book' text='Хичээлүүд' onPress={navigateToClasses}></Widget>
            <Widget icon='calendar' text='Хуваарь' onPress={navigateToSchedule}></Widget>
            <Widget icon='table' text='Дүнгүүд' onPress={navigateToGrades}></Widget>
            <Widget icon='form' text='Бие Даалтууд' onPress={navigateToAssignments}></Widget>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  widgets: {
    flex: 4,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
})

export default Home