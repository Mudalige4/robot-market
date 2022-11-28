import { StyleSheet, Text, View, } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import {Picker} from '@react-native-picker/picker';

export default function FilterDropdown({data,onValueChangeValue,selectedMaterial}){

    return (<View style={styles.container}>
        <Text>Material  :  </Text>
        <Picker
            selectedValue={selectedMaterial}
            onValueChange={onValueChangeValue}>
                {
                    data.map(item=><Picker.Item label={item} value={item} />)
                }
        </Picker>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
})


