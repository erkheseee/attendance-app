import { View, useWindowDimensions , StyleSheet } from 'react-native'
import {React, useState} from 'react'
import { getGradeProgress } from '../../Classes/getScores'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import CustomTable from './CustomTable';

const Grades = ({route, navigation}) => {
 
  const {angi} = route.params;

  const FirstRoute = () => (
    <CustomTable angi={angi}/>
  );
  
  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#822321' }} />
  );
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'ХҮСНЭГТ' },
    { key: 'second', title: 'ЗАДАРГАА' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={{marginTop: 60}}
      renderTabBar={props =>
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: '#fff' }}
          style={{ backgroundColor: '#822321' }}
        />
      }
    />
  );

}

export default Grades