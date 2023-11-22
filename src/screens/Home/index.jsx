import { View, Text , StyleSheet, ImageBackground} from 'react-native'
import React from 'react'
import Widget from '../../components/Widget'
import Header from '../../components/Header/Header'
import UserCard from '../../components/UserCard'
import { useNavigation } from '@react-navigation/native'
import Building from '../../../assets/images/building.jpeg'

const Home = (props) => {
  const {user} = props.route.params;
  const navigation = useNavigation();
  
  const navigateToClasses = () => {
    navigation.navigate('Classes');
  };
  const navigateToSchedule = () => {
    navigation.navigate('Schedule');
  };
  const navigateToAllGrades = () => {
    navigation.navigate('AllGrades');
  };
  const navigateToAssignments = () => {
    navigation.navigate('Assignments');
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground source={Building} style={{flex:1}}>
        <View style={{flex: 1, backgroundColor: 'rgba(193, 192, 185, 0.75)'}}>
          <Header title='Тавтай морил!'/>
          <UserCard name={user.userName} id={user.userID} major={user.userMajor} picture={user.userImage}/>
          <View style={styles.widgets}>
            <Widget icon='book' text='Хичээлүүд' onPress={navigateToClasses}></Widget>
            <Widget icon='table' text='Дүнгүүд' onPress={navigateToAllGrades}></Widget>
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