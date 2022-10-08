import React, {FC} from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import { DeviceListStyle } from './styles';
import  { DeviceDATA } from './DeviceData';
import { MaterialCommunityIcons } from '@expo/vector-icons';

  export interface renderItemProps {
    title: string;
    ip: string;
    port: number;
    status: string;
  }
  
  const styles = DeviceListStyle();
  
export const DeviceList= ( {searchPhrase, data, setClicked } ) => {


  const Item: FC<renderItemProps>= ({ title,ip,port,status }) => { 
    const statusIcon = () => { 
      if (status === 'online') {
        return <MaterialCommunityIcons name="circle" size={16} color="#66ff00" />
      }
      else if (status === 'offline') {
        return <MaterialCommunityIcons name="circle" size={16} color="red" />
      }
      else if (status === 'unknown') {
        return <MaterialCommunityIcons name="circle" size={16} color="yellow" />
      }
    }
    
    return (
    <View style={styles.item}>
      <Text style={styles.title} onPress={alert}>{title}</Text>
      <Text style={styles.ipSection}>{ip}</Text>
      <Text style={styles.portSection}>{port}</Text>
      <SafeAreaView style={styles.statusSection} >
        {statusIcon()}
      </SafeAreaView>
    </View>
      )   
  };


      const renderItem = ({ item }) => {
        if (searchPhrase === "") {
          return  <Item title={item.title}  ip={item.ip} port={item.port} status={item.status}/>
        }
        if (item.title.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
          return  <Item title={item.title}  ip={item.ip} port={item.port} status={item.status}/>
        }
        if (item.ip.includes(searchPhrase.trim().replace(/\s/g, ""))) {
          return  <Item title={item.title}  ip={item.ip} port={item.port} status={item.status}/>
        }
      };

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

