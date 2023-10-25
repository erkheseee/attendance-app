import { View, Text , StyleSheet, Image} from 'react-native'
import React from 'react'
import Widget from '../../components/Widget'
import UserHeader from '../../components/UserHeader/UserHeader'
import { useNavigation } from '@react-navigation/native'

const Home = (props) => {
  const user = props.route.params.user;
  const navigation = useNavigation();
  
  const navigateToClasses = () => {
    navigation.navigate('Classes');
  };
  const navigateToSchedule = () => {
    navigation.navigate('Schedule');
  };
  const navigateToGrades = () => {
    navigation.navigate('Grades');
  };
  const navigateToAssignments = () => {
    navigation.navigate('Assignments');
  };

  return (
    <View style={{flex: 1,}}>
      <UserHeader user={user} />
      <View style={{flex: 1,}}></View>
      <View style={styles.widgets}>
        <Widget icon='bells' text='Хичээлүүд' onPress={navigateToClasses}></Widget>
        <Widget icon='calendar' text='Хуваарь' onPress={navigateToSchedule}></Widget>
        <Widget icon='table' text='Дүнгүүд' onPress={navigateToGrades}></Widget>
        <Widget icon='form' text='Бие Даалтууд' onPress={navigateToAssignments}></Widget>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  
  widgets: {
    flex: 7,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#ffdead',
    height: '50%',
  },
})

export default Home