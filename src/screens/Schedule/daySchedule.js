const daySchedule = () => {

    const object = [
        {},
        {
            weekday: 'Monday',
            classes: [
                {
                    teacher: 'Э. Идэрбаатар',
                    class: 'Бакалаврын ахисан шатны төсөл II',
                    type: 'Лекц',
                    par: 3,
                    time: '11:40 - 13:10',
                }
            ]
        },
        {
            weekday: 'Tuesday',
            classes: [
                {
                    teacher: 'Тэргүүнцэцэг',
                    class: 'Япон хэл',
                    type: 'Лекц',
                    par: 1,
                    time: '08:20 - 09:50',
                },
                {
                    teacher: 'Б. Золжаргал',
                    class: 'Програм хангамжын төслийн менежмент',
                    type: 'Лекц',
                    par: 2,
                    time: '10:00 - 11:30',
                },
                {
                    teacher: 'Б. Золжаргал',
                    class: 'Програм хангамжын төслийн менежмент',
                    type: 'Семинар',
                    par: 3,
                    time: '11:40 - 13:10',
                }
            ]
        },
        {
            weekday: 'Wednesday',
            classes: [
                {
                    teacher: 'Э.Идэрбаатар',
                    class: 'Өргөн хүрээний систем хөгжүүлэлт',
                    type: 'Лекц',
                    par: 2,
                    time: '10:00 - 11:30',
                },
                {
                    teacher: 'Ц. Солонго',
                    class: 'Мобайл Програмчлал',
                    type: 'Лекц',
                    par: 5,
                    time: '15:30 - 17:00',
                },
                {
                    teacher: 'Ц. Солонго',
                    class: 'Мобайл Програмчлал',
                    type: 'Семинар',
                    par: 6,
                    time: '17:10 - 18:40',
                }
            ]
        },
        {
            weekday: 'Thursday',
            classes: [
                {
                    teacher: 'Э. Идэрбаатар',
                    class: 'Бакалаврын ахисан шатны төсөл II',
                    type: 'Лекц',
                    par: 1,
                    time: '08:20 - 09:50',
                }
            ]
        },
        {
            weekday: 'Friday',
            classes: [
                {
                    teacher: 'Э.Идэрбаатар',
                    class: 'Өргөн хүрээний систем хөгжүүлэлт',
                    type: 'Семинар',
                    par: 1,
                    time: '08:20 - 09:50',
                },
                {
                    teacher: 'Б.Гантөр',
                    class: 'Өгөгдлийн олборлолт',
                    type: 'Лекц',
                    par: 2,
                    time: '10:00 - 11:30',
                },
                {
                    teacher: 'Б.Гантөр',
                    class: 'Өгөгдлийн олборлолт',
                    type: 'Семинар',
                    par: 3,
                    time: '11:40 - 13:10',
                }
            ]
        }
    ]

  return object;
};

export default daySchedule;
