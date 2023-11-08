import { View, Image, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomWidget from '../../components/CustomWidget'
import PP from '../../../assets/images/PP.jpg'
import Icon from 'react-native-vector-icons/AntDesign'

const Classes = ({route, navigation}) => {
  const {type} = route.params;
  let classes = [
    {
      id: 1,
      name: "Мобайл програмчлал",
      teacher: "Ц.Солонго",
      summary: 'Мобайл Програмчлалын үндсийг судлах ба тэр дотроо React Native хэлийн UI талын чадварыг голдуу сурна.',
      grades: {
        att: 10,
        lab: 30,
        ass: 30,
        exam: 30,
      },
      gradeProgress: {
        att: 6,
        lab: 20,
        ass: 21,
        exam: 15,
      },
    },
    {
      id: 2,
      name: "Өгөгдлийн олборлолт",
      teacher: "Т.Гантөр",
      summary: 'Өгөгдөл хоорондын уялдаа холбоог тодорхойлох, дүн шинжилгээ хийх, амьдрал дээр ашиглах талаар сурна.',
      grades: {
        att: 10,
        lab: 30,
        ass: 30,
        exam: 30,
      },
      gradeProgress: {
        att: 10,
        lab: 14,
        ass: 21,
        exam: 20,
      },
    },
    {
      id: 3,
      name: "Япон хэл",
      teacher: "Н.Тэргүүнцэцэг",
      summary: 'Япон хэлний Hiragana, Katakana болон хэрэглээний Kanji нарыг уншиж, бичиж, сонсож сурч өөрийгөө танилуулах чадвартай болно.',
      grades: {
        att: 10,
        lab: 30,
        ass: 30,
        exam: 30,
      },
      gradeProgress: {
        att: 9,
        lab: 30,
        ass: 26,
        exam: 16,
      },
    },
    {
      id: 4,
      name: "Програм хангамжийн төслийн менежмент",
      teacher: "Д.Золжаргал",
      summary: 'Програм хангамжийн салбарын төслийг төлөвлөх, удирдах, менеж хийхэд ашиглагдах бичиг баримтуудыг гаргаж сурна',
      grades: {
        att: 10,
        lab: 30,
        ass: 30,
        exam: 30,
      },
      gradeProgress: {
        att: 10,
        lab: 18,
        ass: 29,
        exam: 30,
      },
    },
    {
      id: 5,
      name: "Бакалаврын ахисан түвшний төсөл II",
      teacher: "Т.Гантөр",
      summary: 'Дипломын ажлыг хийж эхлэнэ.',
      grades: {
        att: 10,
        lab: 30,
        ass: 30,
        exam: 30,
      },
      gradeProgress: {
        att: 10,
        lab: 30,
        ass: 30,
        exam: 25,
      },
    },
    {
      id: 6,
      name: "Өргөн хүрээний системийн хөгжүүлэлт",
      teacher: "М.Идэрбаатар",
      summary: '',
      grades: {
        att: 10,
        lab: 30,
        ass: 30,
        exam: 30,
      },
      gradeProgress: {
        att: 10,
        lab: 30,
        ass: 30,
        exam: 30,
      },
    },
  ];

  function viewClass(object) {
    if(type == 'Classes'){
      navigation.navigate("Class", {angi: object, type: object.name});
    }
    if(type == 'Grades'){
      navigation.navigate("Grades", {angi: object});
    }
  }

  const getGradeProgress = (angi) => {
    let gradeProgress = 0;
    Object.keys(angi.gradeProgress).forEach((key) => {
      gradeProgress += angi.gradeProgress[key];
    })
    return gradeProgress;
  }

  function loadMenu() {
    null
  }

  return (
  //   <ImageBackground source={Building} style={{flex: 1}}>
      <ScrollView style={styles.classes}>
        {classes.map((angi) => {
          return (
            <CustomWidget key={angi.id} onPress={() => viewClass(angi)} itemStyles={styles.class}>
              <View style={styles.container}>
                <View style={{flex: 1, marginLeft: 15,}}><Image source={angi.teacherImage ? angi.teacherImage : PP} style={styles.image} resizeMode="contain"></Image></View>
                <View style={styles.textContainer}>
                  <Text style={styles.textStyles}>{angi.name}</Text>
                  <Text></Text>
                  <Text style={styles.text}>{angi.teacher}</Text>
                </View>
                <View style={{flex: 1}}>{type == 'Grades'? <Text style={styles.gradeText}>{getGradeProgress(angi)}/100</Text> : <TouchableOpacity onPress={loadMenu}><Icon name="ellipsis1" style={styles.icon}></Icon></TouchableOpacity>}</View>
              </View>
            </CustomWidget>
          );
        })}
      </ScrollView>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  classes: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.4)',
    padding: 5,
    backgroundColor: '#822321',
  },
  class: {
    flex: 1,
    borderRadius: 20,
    height: 90,
    marginHorizontal: 16,
    marginVertical: 6,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  textContainer: {
    flex: 4,
    marginLeft: 10,
  },
  text: {
    textAlignVertical: 'center',
    color: 'white',
    fontStyle: 'italic',
    fontSize: 15,
  },
  gradeText: {
    textAlignVertical: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
  textStyles: {
    fontSize: 20,
    color: 'white'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  icon: {
    color: 'white',
    fontSize: 30,
    transform: 'rotate(90deg)',
    paddingLeft: 12,
  },
})

export default Classes