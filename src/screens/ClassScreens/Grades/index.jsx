import { View, useWindowDimensions , StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { getGradeProgress } from '../../Classes/getScores'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import CustomTable from './CustomTable';
import Header from '../../../components/Header/Header';
import UserCard from '../../../components/UserCard';
import Building from '../../../../assets/images/building.jpeg';
// import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import { BottomSheet } from "react-native-btr";
import ClassGrade from './ClassGrade';
import AttendanceTable from './AttendanceTable';
import SeminarTable from './SeminarTable';
import AssignmentTable from './AssignmentTable';
import ExamTable from './ExamTable';

const Grades = ({route, navigation}) => {
 
  const user = {
    userID: 'se20d005',
    userPassword: '0000',
    userName: 'Т.Эрхэс',
    userMajor: 'Програм Хангамж',
    userImage: 'https://scontent.fuln2-2.fna.fbcdn.net/v/t1.6435-9/60122027_449738552466000_489798920839364608_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=be3454&_nc_ohc=6RNId0KKKAkAX8Dzfrv&_nc_ht=scontent.fuln2-2.fna&cb_e2o_trans=t&oh=00_AfCz6HV4Bg3-9lcRml1jxiZl1S2pUWkWjtHjbws5Z4J6Pw&oe=658554C4',
  }

  const {angi} = route.params;

  const FirstRoute = () => (
    <View style={{flex: 1, backgroundColor: '#D9BDBC'}}><AttendanceTable/></View>
  );
  
  const SecondRoute = () => (
    <View style={{flex: 1, backgroundColor: '#D9BDBC'}}><SeminarTable /></View>
  );
  
  const ThirdRoute = () => (
    <View style={{flex: 1, backgroundColor: '#D9BDBC'}}><AssignmentTable/></View>
  );

  const FourthRoute = () => (
    <View style={{flex: 1, backgroundColor: '#D9BDBC'}}><ExamTable/></View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'ИРЦ' },
    { key: 'second', title: 'СЕМИНАР' },
    { key: 'third', title: 'БИЕ ДААЛТ'},
    { key: 'fourth', title: 'ШАЛГАЛТ'},
  ]);

  const [visible, setVisible] = useState(false);

  function toggle() {
    setVisible((visible) => !visible);
  }

  return (
    <View style={{flex: 1}}>
        <ImageBackground source={Building} style={{flex:1}}>
          <View style={{flex: 1, backgroundColor: 'rgba(193, 192, 185, 0.75)'}}>
            <Header />
            {/* Space for UserCard */}
            <View style={{flex: 5.5,}}></View>
            <UserCard name={user.userName} id={'2023-24 Намар'} major={'Хичээлийн дүн: '} semester={'Бакалавр'} picture={user.userImage}/>
            
            {/* Хичээлийн дүн харах хэсэг */}
            <View style={styles.gradeWidget}>
              <ClassGrade>
              <TouchableOpacity onPress={toggle}>
                <View style={styles.button}>
                  <Text style={{fontWeight: '800'}}>Дэлгэрэнгүй</Text>
                </View>
              </TouchableOpacity>
              </ClassGrade>  
            </View>

            <BottomSheet
            visible={visible}
            onBackButtonPress={toggle}
            onBackdropPress={toggle}
            >
            
              <TabView
              navigationState={{ index, routes }}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{ width: layout.width }}
              style={{top: '20%'}}
              renderTabBar={props =>
                <TabBar
                  {...props}
                  indicatorStyle={{ backgroundColor: '#D9BDBC' }}
                  style={{ backgroundColor: '#822321', borderTopLeftRadius: 60, borderTopRightRadius: 60, borderTopWidth: 4, borderLeftWidth: 1, borderRightWidth: 1,}}
                  labelStyle={{fontSize: 12,
                    fontWeight: "bold",
                    color: 'white',
                    alignSelf: 'center',
                    shadowColor: 'black',
                    shadowOpacity: 1,
                    shadowRadius: 0,
                    shadowOffset: {height: 2, width: 2},}}
                  tabStyle={{alignContent: 'space-between'}}
                />
              }
              />
            </BottomSheet>
          
      </View></ImageBackground>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 15,
    backgroundColor: '#D9BDBC',
    borderWidth: 2,
    borderRadius: 50,
    padding: 16,
    alignItems: 'center',
  },
  card: {
    backgroundColor: "#fff",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  gradeWidget: {
    flex: 10,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 10, height: 10},
    shadowRadius: 3.5,
    elevation: 5,
  }
});

export default Grades