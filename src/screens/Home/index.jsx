import { View, Text , StyleSheet, ImageBackground} from 'react-native'
import React from 'react'
import Widget from '../../components/Widget'
import Header from '../../components/Header/Header'
import UserCard from '../../components/UserCard'
import { useNavigation } from '@react-navigation/native'
import Building from '../../../assets/images/building.jpeg'
import Alerts from '../../components/Alerts'

const Home = (props) => {
  const {user} = props.route.params;

  props.route.params.alert && console.warn("Амжилттай нэвтэрлээ");
  props.route.params.alert = false;

  const navigation = useNavigation();
  
  const navigateToClasses = () => {
    navigation.navigate('Classes');
  };
  const navigateToSchedule = () => {
    navigation.navigate('Schedule');
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground source={Building} style={{flex:1}}>
        <View style={{flex: 1, justifyContent: 'space-evenly', backgroundColor: 'rgba(193, 192, 185, 0.75)'}}>
          <Header title='Тавтай морил!'/>
          <UserCard name={user.userName} id={user.userID} major={user.userMajor} semester={'IV курс - I семестр'} picture={user.userImage}/>
          <View style={{flex: 5}}></View>
          <View style={styles.widgets}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center',}}>
              <Widget icon='book' text='Хичээлүүд' onPress={navigateToClasses}></Widget>
              <Widget icon='calendar' text='Хуваарь' onPress={navigateToSchedule}></Widget>
            </View>
            <View style={styles.alert}>
              <View style={styles.alertTitle}>
                <Text style={styles.alertText}>Санамж</Text>
              </View>
              <View style={styles.alerts}>
                <Alerts />
              </View>
            </View>
          </View>
          <View style={{flex: 2.6}}>

          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  widgets: {
    flex: 8,
    alignContent: 'center',
  },
  alert: {
    flex: 1,
    marginTop: 40,
    marginBottom: 10,
    backgroundColor: '#8e3837',
    marginHorizontal: '10%',
    borderRadius: 30,
    borderWidth: 2,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 10, height: 10},
    shadowRadius: 3.5,
    elevation: 5,
  },
  alertTitle: {
    flex: 2,
  },
  alertText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
    color: 'white',
    paddingTop: 10,
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: {height: 2, width: 2},
    textAlign: 'center',
    marginTop: 3,
  },
  alerts: {
    flex: 5,
    marginBottom: 10,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: '#822321',
  },
})

export default Home