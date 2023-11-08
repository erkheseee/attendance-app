import { View, Image, Text, ScrollView, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import CustomWidget from '../../components/CustomWidget'
import Building from '../../../assets/images/building.jpeg'
import PP from '../../../assets/images/PP.jpg'

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

  return (
    <ImageBackground source={Building} style={{flex: 1}}>
      <ScrollView style={styles.classes}>
        {classes.map((angi) => {
          return (
            <CustomWidget key={angi.id} text={angi.name} onPress={() => viewClass(angi)} itemStyles={styles.class} textStyles={styles.textStyles}>
              <View style={{backgroundColor: 'white', height: 1, marginVertical: 10}}></View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginHorizontal: 60}}>
                {type == 'Grades'? <Text style={styles.text}>{getGradeProgress(angi)}/100</Text> : null}
                <Text style={styles.text}>{angi.teacher}</Text>
                <Image source={angi.teacherImage ? angi.teacherImage : PP} style={styles.image} resizeMode="contain"></Image>
              </View>
            </CustomWidget>
          );
        })}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  classes: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.4)',
    padding: 5,
  },
  class: {
    flex: 1,
    borderRadius: 30,
    height: 120,
    marginHorizontal: 16,
    marginVertical: 6,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#822321',
  },
  text: {
    textAlignVertical: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  textStyles: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 40,
},
})

export default Classes