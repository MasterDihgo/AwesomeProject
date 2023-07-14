import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import HistoryList from '../../components/HistoryList';

import moment from '../../vendors/moment';

import DateTimePicker from 'react-native-modal-datetime-picker';

import useEntriesDate from '../../hooks/useEntriesDate';

const Historico = () => {

 

    const [modal, setModal] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);

    const [value, setValue] = useState(new Date());

    const [dataEnd, setDataEnd] = useState(new Date());

    const [entriesDate] = useEntriesDate(value, dataEnd);

    console.log('entriesDate', entriesDate);

    const onChangeValue = date => {
        setValue(date);
        onCancel();
      };

      const onChangeValue2 = date => {
        setDataEnd(date);
        onCancel2();
      }
      const onCancel = () => {
        setModalVisible(false);
      };

      const onCancel2 = () => {
        setModalVisible2(false);
      };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Histórico</Text>
            <HistoryList 
            entries={entriesDate}
            
            />
            <View style={styles.actionContainer}      > 
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() =>{
                setModal(true);
              }}>
              
              <Text style={styles.actionButtonText}>Ver mais</Text>
            </TouchableOpacity>
        </View>

        <Modal animationType="slide" transparent={false} visible={modal}>

<TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Text>Data inicial : {moment(value).format('L')} </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible2(true)}>
        <Text>Data final : {moment(dataEnd).format('L')} </Text>
      </TouchableOpacity>

        <DateTimePicker
        mode="date"
        datePickerModeAndroid="calendar"
        titleIOS="Data de vencimento"
        cancelTextIOS="Cancelar"
        confirmTextIOS="Ok"
        date={value}
        isVisible={modalVisible}
        onConfirm={onChangeValue}
        onCancel={onCancel}
      />

<DateTimePicker
        mode="date"
        datePickerModeAndroid="calendar"
        titleIOS="Data de vencimento"
        cancelTextIOS="Cancelar"
        confirmTextIOS="Ok"
        date={dataEnd}
        isVisible={modalVisible2}
        onConfirm={onChangeValue2}
        onCancel={onCancel2}
      />

              <TouchableOpacity  onPress={() =>{
                setModal(false);
              }}>
                <Text >Cancelar</Text>
              </TouchableOpacity>
        </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      //backgroundColor: Colors.asphalt,
      borderRadius: 5,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.2)',
      margin: 5,
      padding: 8,
    },
    title: {
      fontSize: 12,
      //color: Colors.white,
      marginBottom: 5,
    },
    actionContainer: {
      flexDirection: 'row',
    },
    actionLabel: {
      flex: 1,
      fontSize: 12,
     // color: Colors.white,
    },
    actionButton: {
      flexDirection: 'row',
    },
    actionButtonIcon: {
     // color: Colors.white,
      marginTop: 3,
      marginRight: 2,
    },
    actionButtonText: {
      fontSize: 12,
     // color: Colors.white,
    },
  });

  export default Historico;


