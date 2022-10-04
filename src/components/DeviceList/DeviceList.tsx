import React, {FC, useState} from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import { DeviceListStyle } from './styles';
import devData, { DeviceDATA } from './DeviceData';
import { MaterialCommunityIcons } from '@expo/vector-icons';

  interface renderItemProps {
    title: string;
    ip: string;
    port: number;
    isWorking: boolean;
  }
  


  
//   export const deviceStatUseState = (item) => {
//   const [deviceStatus, setdeviceStatus] = useState<devData[]>(DeviceDATA);
 //   const toggleDeviceStatus = (workStat: devData) => {

//     const deviceStatushHandler = deviceStatus.map((isWorking ) => {

//       if (isWorking.isWorking === item.isWorking) {
//         return (
//           {  ...isWorking, color:  '#00ff00'  }
//         )
//       }
//       else  {
//         return (
//           { ...isWorking, color:  '#ff0000'  }
//          )
//       }
//     })
//     setdeviceStatus(deviceStatushHandler);
// };

  let color : string;


  const styles = DeviceListStyle();



export const DeviceList= () => {
  const Item: FC<renderItemProps>= ({ title,ip,port }) => (
    <View style={styles.item}>
      <Text style={styles.title} onPress={alert}>{title}</Text>
      <Text style={styles.ipSection}>{ip}</Text>
      <Text style={styles.portSection}>{port}</Text>
      <SafeAreaView style={styles.statusSection} >
      <MaterialCommunityIcons
      name="circle" size={14} color={color}  />
      </SafeAreaView>
    </View>
      );

    const renderItem = ({ item }) => (
      <SafeAreaView>
      <Item title={item.title}  ip={item.ip} port={item.port} isWorking={item.isWorking}/>
      </SafeAreaView>
    );

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          contentContainerStyle={{flexGrow:1}}
          data={DeviceDATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }


    // const handleNoDevices = () => {
  //   if (DeviceDATA.length === 0) {
  //     return (
  //       <SafeAreaView style={styles.container}>
  //         <Text >No Devices Found</Text>
  //       </SafeAreaView>
  //     );
  //   }



//   if (workStat.isWorking === true) {
//     color = 'green';
// } else {
//     color = 'red';
// }

// workStat.isWorking ? color = 'green' : color = 'red';
  // const handleDeviceStatus = (workStat: devData) => {
  //   const closedDeviceStatus = deviceStatus.map((title ) => {
  //     workStat.isWorking ? color = 'green' : color = 'red';
  //   },
  // };
  // const handleWorkStatDevice = (workStat: devData) => {
  //   workStat.isWorking ? color = 'green' : color = 'red';
  // };
  
  // const handleWorkStatDevice = (workStat: devData) => {
  //   workStat.isWorking ? color = 'green' : color = 'red';
  // };
//  const handleDeviceStatus = (workStat: devData) => {
//     const closedDeviceStatus = deviceStatus.map((isWorking ) => {
//       workStat.isWorking ? color = 'green' : color = 'red';
//     },
//   };

// const changeDeviceStatus = (id: number) => {
//   setdeviceStatus((prev) => {
//     return prev.map((item) => {
//       if (item.id === id) {
//         return {
//           ...item,
//           isWorking: !item.isWorking,
//         };
//       }
