import React, {useState} from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { DashboardStyle } from './styles';
import { Header } from "../../components/common/Header/Header";
import  Button  from '../../components/common/Button/Button'
import {DeviceList} from '../../components/DeviceList/DeviceList'
import {SearchBar} from '../../components/SearchBar/SearchBar'
import { DeviceDATA } from '../../components/DeviceList/DeviceData';

export const DashboardScreen = () => {

    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [theData, setTheData] = useState();
    const styles = DashboardStyle();
    const data = DeviceDATA;

    return (
        <SafeAreaView
        style={styles.container}
        >
            <Header>
                Name of Organization
            </Header>
            <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
            />
            <DeviceList
            searchPhrase={searchPhrase}
            data={data}
            setClicked={setClicked}
            />
            
            <TouchableOpacity>
            <Button
            style={styles.button}
            children={'Add Device'}
            mode='contained'
            />
            </TouchableOpacity>
        </SafeAreaView>
    )
}
