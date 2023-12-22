import React, { useState, useRef } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import moment from "moment";
import Swiper from "react-native-swiper";
import Building from "../../../assets/images/building.jpeg";
import UserCard from "../../components/UserCard";
import Header from "../../components/Header/Header";
import classesData from "../Classes/classesData";

const { width } = Dimensions.get("window");

const array = [
  {},
  {
    weekday: "Monday",
    classes: [
      {
        teacher: "Э. Идэрбаатар",
        class: "Бакалаврын ахисан шатны төсөл II",
        type: "Лекц",
        par: 3,
        time: "11:40 - 13:10",
        angi: "913",
      },
    ],
  },
  {
    weekday: "Tuesday",
    classes: [
      {
        teacher: "Тэргүүнцэцэг",
        class: "Япон хэл",
        type: "Лекц",
        par: 1,
        time: "08:20 - 09:50",
        angi: "713",
      },
      {
        teacher: "Б. Золжаргал",
        class: "Програм хангамжийн төслийн менежмент",
        type: "Лекц",
        par: 2,
        time: "10:00 - 11:30",
        angi: "914",
      },
      {
        teacher: "Б. Золжаргал",
        class: "Програм хангамжийн төслийн менежмент",
        type: "Семинар",
        par: 3,
        time: "11:40 - 13:10",
        angi: "914",
      },
    ],
  },
  {
    weekday: "Wednesday",
    classes: [
      {
        teacher: "Э.Идэрбаатар",
        class: "Өргөн хүрээний систем хөгжүүлэлт",
        type: "Лекц",
        par: 2,
        time: "10:00 - 11:30",
        angi: "914",
      },
      {
        teacher: "Ц. Солонго",
        class: "Мобайл програмчлал",
        type: "Лекц",
        par: 5,
        time: "15:30 - 17:00",
        angi: "913",
      },
      {
        teacher: "Ц. Солонго",
        class: "Мобайл програмчлал",
        type: "Семинар",
        par: 6,
        time: "17:10 - 18:40",
        angi: "913",
      },
    ],
  },
  {
    weekday: "Thursday",
    classes: [
      {
        teacher: "Э. Идэрбаатар",
        class: "Бакалаврын ахисан шатны төсөл II",
        type: "Лекц",
        par: 1,
        time: "08:20 - 09:50",
        angi: "912",
      },
    ],
  },
  {
    weekday: "Friday",
    classes: [
      {
        teacher: "Э.Идэрбаатар",
        class: "Өргөн хүрээний систем хөгжүүлэлт",
        type: "Семинар",
        par: 1,
        time: "08:20 - 09:50",
        angi: "913",
      },
      {
        teacher: "Б.Гантөр",
        class: "Өгөгдлийн олборлолт",
        type: "Лекц",
        par: 2,
        time: "10:00 - 11:30",
        angi: "912",
      },
      {
        teacher: "Б.Гантөр",
        class: "Өгөгдлийн олборлолт",
        type: "Семинар",
        par: 3,
        time: "11:40 - 13:10",
        angi: "912",
      },
    ],
  },
  {},
];

const day = [
  ["8:20", "09:50"],
  ["10:00", "11:30"],
  ["11:40", "13:10"],
  ["14:00", "15:30"],
  ["15:40", "17:10"],
  ["17:20", "18:50"],
];

export default function Schedule({navigation}) {
  const swiper = useRef();
  const [value, setValue] = useState(new Date());
  const [week, setWeek] = useState(0);

  const handlePress = (className) => {
    const classes = classesData();
    classes.map((hah) => {
        if(hah['name'] == className){
          navigation.navigate("Grades", {angi: hah, className: className});
        }
    })

  }

  const handleWeekday = (wd) => {
    switch (wd) {
      case "Mon":
        return "Да";
      case "Tue":
        return "Мя";
      case "Wed":
        return "Лх";
      case "Thu":
        return "Пү";
      case "Fri":
        return "Ба";
      case "Sat":
        return "Ха";
      case "Sun":
        return "Бү";
    }
  };

  const weeks = React.useMemo(() => {
    const start = moment().add(week, "weeks").startOf("week");

    return [-1, 0, 1].map((adj) => {
      return Array.from({ length: 7 }).map((_, index) => {
        const date = moment(start).add(adj, "week").add(index, "day");

        return {
          weekday: date.format("ddd"),
          date: date.toDate(),
        };
      });
    });
  }, [week]);

  const scheduleList = (weekday) => {
    let rows = [];
    let wows = [];
    if (weekday != 6 && weekday != 0) {
      const classes = array[weekday].classes;
      classes.map(item => {
        let object = {};
        object[item.par] = (
          <TouchableOpacity
            onPress={() => handlePress(item.class)}
            style={{
              flex: 2,
              borderWidth: 2,
              height: 200,
              backgroundColor: "#822321",
              margin: 10,
              borderRadius: 30,
              alignItems: "flex-start",
              justifyContent: "space-evenly",
              paddingLeft: 20,
              paddingRight: 40,
            }}
          >
            <Text style={[styles.text, {fontSize: 20, fontWeight: '900', }]}>{item.class}</Text>
            <Text style={[styles.text, {fontSize: 15, fontStyle: 'italic', marginBottom: 50,}]}>{item.teacher}</Text>
            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[styles.text, {fontWeight: 'bold',}]}>{item.type}</Text>
              <Text style={[styles.text, {fontWeight: 'bold',}]}>{item.angi}</Text>
            </View>
          </TouchableOpacity>
      )
        rows.push(object);
      });
      day.map((tsag, index) => {
        (rows).map((par) => wows.push((
          Object.keys(par) == (index + 1) && 
              <View>
                  <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <View style={{marginTop: 15, alignItems: 'flex-end'}}>
                      <Text style={{fontSize: 30, fontWeight: '900', }}>{tsag[0]}</Text>
                      <Text style={{fontSize: 15, fontWeight: 'bold', }}>{tsag[1]}</Text>
                    </View>
                  </View>
                  {/* <View style={{ width: '100%', height: 2, backgroundColor: "black" }}></View> */}
                  {Object.values(par)}
                </View>
                <View style={{height: 2, backgroundColor: 'grey', marginHorizontal: '5%'}}></View>
              </View>
        )));
        
      });
    }
    return wows;
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={[styles.gtlt, {left: 6}]}>&lt;</Text>
      <Text style={[styles.gtlt, {right: 6}]}>&gt;</Text>
      <ImageBackground source={Building} style={{ flex: 1 }}>
        <View style={styles.container}>
          <Header />
          <View style={styles.picker}>
            <Swiper
              index={1}
              ref={swiper}
              loop={false}
              showsPagination={false}
              onIndexChanged={(ind) => {
                if (ind === 1) {
                  return;
                }
                setTimeout(() => {
                  const newIndex = ind - 1;
                  const newWeek = week + newIndex;
                  setWeek(newWeek);
                  setValue(moment(value).add(newIndex, "week").toDate());
                  swiper.current.scrollTo(1, false);
                }, 100);
              }}
            >
              {weeks.map((dates, index) => (
                <View
                  style={[styles.itemRow, { paddingHorizontal: 20 }]}
                  key={index}
                >
                  {dates.map((item, dateIndex) => {
                    const isActive =
                      value.toDateString() === item.date.toDateString();
                    return (
                      <TouchableWithoutFeedback
                        key={dateIndex}
                        onPress={() => setValue(item.date)}
                      >
                        <View
                          style={[
                            styles.item,
                            isActive && {
                              backgroundColor: "#111",
                              borderColor: "#111",
                            },
                          ]}
                        >
                          <Text
                            style={[
                              styles.itemWeekday,
                              isActive && { color: "#fff" },
                            ]}
                          >
                            {handleWeekday(item.weekday)}
                          </Text>
                          <Text
                            style={[
                              styles.itemDate,
                              isActive && { color: "#fff" },
                            ]}
                          >
                            {item.date.getDate()}
                          </Text>
                        </View>
                      </TouchableWithoutFeedback>
                    );
                  })}
                </View>
              ))}
            </Swiper>
          </View>

          <View style={{ flex: 1, marginBottom: 91,}}>
            {/* <Text style={styles.subtitle}>{value.toDateString()}</Text> */}
            <ScrollView style={styles.tableContainer}>
              {scheduleList(value.getDay())}
            </ScrollView>
          </View>

          {/* <View style={styles.footer}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Schedule</Text>
              </View>
            </TouchableOpacity>
          </View> */}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 0,
    padding: 0,
  },
  placeholderInset: {
    borderWidth: 4,
    borderColor: "#e5e7eb",
    borderStyle: "dashed",
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#007aff",
    borderColor: "#007aff",
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
  },
  container: {
    flex: 1,
    paddingTop: 60,
    justifyContent: "space-evenly",
    backgroundColor: "rgba(193, 192, 185, 0.75)",
  },
  picker: {
    flex: 1,
    maxHeight: 74,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#999999",
    marginBottom: 12,
  },
  content: {
    paddingHorizontal: 16,
  },
  footer: {
    marginTop: "auto",
    paddingHorizontal: 16,
  },
  itemRow: {
    width: width,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  item: {
    flex: 1,
    height: 50,
    marginHorizontal: 4,
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#D9BDBC",
    borderWidth: 2,
    borderColor: "black",
    flexDirection: "column",
    alignItems: "center",
  },
  itemWeekday: {
    fontSize: 13,
    fontWeight: "500",
    marginBottom: 4,
  },
  itemDate: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
  },
  tableContainer: {
    flex: 1,
    // shadowColor: "black",
    // // shadowOpacity: 0.25,
    // // shadowOffset: { width: 10, height: 10 },
    // // shadowRadius: 3.5,
  },
  text: {
    color: '#fff',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: {height: 2, width: 2}, 
  },
  gtlt: {
    position: 'absolute',
    zIndex: 2,
    fontSize: 20,
    fontWeight: '900',
    color: '#fff',
    top: 83,
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: {height: 2, width: 2},
  }
});
