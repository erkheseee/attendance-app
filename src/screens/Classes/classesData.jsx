import {getAttScore, getLabScore, getSemScore, getAssScore, getMidScore, getFinScore, getGradeProgress} from '../Classes/getScores';

const classesData = () => {
  let data = [
    {
      id: 1,
      name: "Мобайл програмчлал",
      teacher: "Ц.Солонго",
      summary: 'Мобайл Програмчлалын үндсийг судлах ба тэр дотроо React Native хэлийн UI талын чадварыг голдуу сурна.',
      grades: {
        "Ирц": 8,
        "Лаборатори": 15,
        "Бие даалт": 30,
        "Явцын шалгалт": 15,
        "Улирлын шалгалт": 30,
      },
      gradeDetails: {
        "Ирц": {1: 1, 2:0, 3:1, 4:1, 5:1, 6:0, 7:1, 8:1, 9:1, 10: null, 11: null, 12: null, 13: null, 14: null, 15: null},
        "Лаборатори": {1: 1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1, 10: null, 11: null, 12: null, 13: null, 14: null, 15: null},
        "Бие даалт": {15: null},
        "Явцын шалгалт": {8: 15},
        "Улирлын шалгалт": {16: null},
      },
      gradeProgress: {
        "Ирц": function(data) {getAttScore(data)},
        "Лаборатори": function(data) {getLabScore(data)},
        "Бие даалт": function(data) {getAssScore(data)},
        "Явцын шалгалт": function(data) {getMidScore(data)},
        "Улирлын шалгалт": function(data) {getFinScore(data)},
      },
    },
    // {
    //   id: 2,
    //   name: "Өгөгдлийн олборлолт",
    //   teacher: "Т.Гантөр",
    //   summary: 'Өгөгдөл хоорондын уялдаа холбоог тодорхойлох, дүн шинжилгээ хийх, амьдрал дээр ашиглах талаар сурна.',
    //   grades: {
    //     "Ирц": 10,
    //     "Лаборатори": 15,
    //     "Бие даалт": 15,
    //     "Явцын шалгалт": 30,
    //     "Улирлын шалгалт": 30,
    //     "Семинар": 15,
    //   },
    //   gradeDetails: {
    //     "Ирц": {1: 1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1, 10: null, 11: null, 12: null, 13: null, 14: null, 15: null},
    //     "Лаборатори": {1: 1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1, 10: null, 11: null, 12: null, 13: null, 14: null, 15: null},
    //     "Бие даалт": {15: null},
    //     "Явцын шалгалт": {8: 15, 15: null},
    //     "Улирлын шалгалт": {16: null},
    //     "Семинар": {1: 1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1, 10: null, 11: null, 12: null, 13: null, 14: null, 15: null},
    //   },
    //   gradeProgress: {
    //     "Ирц": getAttScore(this),
    //     "Лаборатори": getLabScore(this),
    //     "Бие даалт": getAssScore(this),
    //     "Явцын шалгалт": getMidScore(this),
    //     "Улирлын шалгалт": getFinScore(this),
    //     "Семинар": getSemScore(this),
    //   },
    // },
    // {
    //   id: 3,
    //   name: "Япон хэл",
    //   teacher: "Н.Тэргүүнцэцэг",
    //   summary: 'Япон хэлний Hiragana, Katakana болон хэрэглээний Kanji нарыг уншиж, бичиж, сонсож сурч өөрийгөө танилуулах чадвартай болно.',
    //   grades: {
    //     "Ирц": 10,
    //     "Лаборатори": 15,
    //     "Бие даалт": 15,
    //     "Явцын шалгалт": 30,
    //     "Улирлын шалгалт": 30,
    //     "Семинар": 15,
    //   },
    //   gradeDetails: {
    //     "Ирц": {1: 1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1, 10: null, 11: null, 12: null, 13: null, 14: null, 15: null},
    //     "Лаборатори": {1: 1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1, 10: null, 11: null, 12: null, 13: null, 14: null, 15: null},
    //     "Бие даалт": {15: null},
    //     "Явцын шалгалт": {8: 15, 15: null},
    //     "Улирлын шалгалт": {16: null},
    //     "Семинар": {1: 1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1, 10: null, 11: null, 12: null, 13: null, 14: null, 15: null},
    //   },
    //   gradeProgress: {
    //     "Ирц": getAttScore(this),
    //     "Лаборатори": getLabScore(this),
    //     "Бие даалт": getAssScore(this),
    //     "Явцын шалгалт": getMidScore(this),
    //     "Улирлын шалгалт": getFinScore(this),
    //     "Семинар": getSemScore(this),
    //   },
    // },
    // {
    //   id: 4,
    //   name: "Програм хангамжийн төслийн менежмент",
    //   teacher: "Д.Золжаргал",
    //   summary: 'Програм хангамжийн салбарын төслийг төлөвлөх, удирдах, менеж хийхэд ашиглагдах бичиг баримтуудыг гаргаж сурна',
    //   grades: {
    //     "Ирц": 10,
    //     "Лаборатори": 15,
    //     "Бие даалт": 15,
    //     "Явцын шалгалт": 30,
    //     "Улирлын шалгалт": 30,
    //     "Семинар": 15,
    //   },
    //   gradeDetails: {
    //     "Ирц": {1: 1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1, 10: null, 11: null, 12: null, 13: null, 14: null, 15: null},
    //     "Лаборатори": {1: 1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1, 10: null, 11: null, 12: null, 13: null, 14: null, 15: null},
    //     "Бие даалт": {15: null},
    //     "Явцын шалгалт": {8: 15, 15: null},
    //     "Улирлын шалгалт": {16: null},
    //     "Семинар": {1: 1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1, 10: null, 11: null, 12: null, 13: null, 14: null, 15: null},
    //   },
    //   gradeProgress: {
    //     "Ирц": getAttScore(this),
    //     "Лаборатори": getLabScore(this),
    //     "Бие даалт": getAssScore(this),
    //     "Явцын шалгалт": getMidScore(this),
    //     "Улирлын шалгалт": getFinScore(this),
    //     "Семинар": getSemScore(this),
    //   },
    // },
    // {
    //   id: 5,
    //   name: "Бакалаврын ахисан түвшний төсөл II",
    //   teacher: "Т.Гантөр",
    //   summary: 'Дипломын ажлыг хийж эхлэнэ.',
    //   grades: {
    //     "Ирц": 10,
    //     "Лаборатори": 15,
    //     "Бие даалт": 15,
    //     "Явцын шалгалт": 30,
    //     "Улирлын шалгалт": 30,
    //     "Семинар": 15,
    //   },
    //   gradeDetails: {
    //     "Ирц": {1: 1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1, 10: null, 11: null, 12: null, 13: null, 14: null, 15: null},
    //     "Лаборатори": {1: 1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1, 10: null, 11: null, 12: null, 13: null, 14: null, 15: null},
    //     "Бие даалт": {15: null},
    //     "Явцын шалгалт": {8: 15, 15: null},
    //     "Улирлын шалгалт": {16: null},
    //     "Семинар": {1: 1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1, 10: null, 11: null, 12: null, 13: null, 14: null, 15: null},
    //   },
    //   gradeProgress: {
    //     "Ирц": getAttScore(this),
    //     "Лаборатори": getLabScore(this),
    //     "Бие даалт": getAssScore(this),
    //     "Явцын шалгалт": getMidScore(this),
    //     "Улирлын шалгалт": getFinScore(this),
    //     "Семинар": getSemScore(this),
    //   },
    // },
    // {
    //   id: 6,
    //   name: "Өргөн хүрээний системийн хөгжүүлэлт",
    //   teacher: "М.Идэрбаатар",
    //   summary: '',
    //   grades: {
    //     "Ирц": 10,
    //     "Лаборатори": 15,
    //     "Бие даалт": 15,
    //     "Явцын шалгалт": 30,
    //     "Улирлын шалгалт": 30,
    //     "Семинар": 15,
    //   },
    //   gradeDetails: {
    //     "Ирц": {1: 1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1, 10: null, 11: null, 12: null, 13: null, 14: null, 15: null},
    //     "Лаборатори": {1: 1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1, 10: null, 11: null, 12: null, 13: null, 14: null, 15: null},
    //     "Бие даалт": {15: null},
    //     "Явцын шалгалт": {8: 15, 15: null},
    //     "Улирлын шалгалт": {16: null},
    //     "Семинар": {1: 1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1, 10: null, 11: null, 12: null, 13: null, 14: null, 15: null},
    //   },
    //   gradeProgress: {
    //     "Ирц": getAttScore(this),
    //     "Лаборатори": getLabScore(this),
    //     "Бие даалт": getAssScore(this),
    //     "Явцын шалгалт": getMidScore(this),
    //     "Улирлын шалгалт": getFinScore(this),
    //     "Семинар": getSemScore(this),
    //   },
    // },
  ];
  return data
}

export default classesData