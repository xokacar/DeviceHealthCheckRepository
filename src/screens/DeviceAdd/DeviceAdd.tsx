import React from 'react';
import { SafeAreaView } from 'react-native';
import { Header } from '../../components/common/Header/Header';
import { DeviceAddStyle } from './style';


export const DeviceAddScreen = () => {
    const styles = DeviceAddStyle();
    return (
        <SafeAreaView
        style={styles.container}
        >
        <Header>
            Add a device
        </Header>
        </SafeAreaView>
    );
};

