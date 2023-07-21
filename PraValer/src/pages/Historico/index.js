import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import HistoryList from '../../components/HistoryList';

import moment from '../../vendors/moment';

import DateTimePicker from 'react-native-modal-datetime-picker';

import useEntriesDate from '../../hooks/useEntriesDate';

const Historico = ({navigation}) => {

 

    const [modal, setModal] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);

    const [value, setValue] = useState(new Date());

    const [dataEnd, setDataEnd] = useState(new Date());

    const [entriesDate] = useEntriesDate(value, dataEnd);


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

            <View>
              <Text>Datas escolhidas:</Text>
              <Text>Data inicial : {moment(value).format('L')} </Text>
              <Text>Data final : {moment(dataEnd).format('L')} </Text>

            </View>
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

          <View style={styles.containerModal}>

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

              <View style={styles.botoesdofiltro}>
                <View style={styles.botaoConfirmar}>
              <TouchableOpacity  onPress={() =>{
                setModal(false);
              }}>
                <Text >Confirmar</Text>
              </TouchableOpacity>
              </View>
              <TouchableOpacity  onPress={() =>{

                setValue(new Date());
                setDataEnd(new Date());

                setModal(false);
              }}>
                <Text >Cancelar</Text>
              </TouchableOpacity>
              </View>


              </View>

        </Modal>




        <TouchableOpacity
        onPress={() => navigation.navigate('Main')}
        >
          <Text>Tela principal</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      borderRadius: 5,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.2)',
      margin: 5,
      padding: 8,
    },

    containerModal: {
    
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 12,
      marginBottom: 5,
    },
    actionContainer: {
      flexDirection: 'row',
    },
    actionLabel: {
      flex: 1,
      fontSize: 12,
    },
    actionButton: {
      flexDirection: 'row',
    },
    actionButtonIcon: {
      marginTop: 3,
      marginRight: 2,
    },
    actionButtonText: {
      fontSize: 12,
    },

    botoesdofiltro: {
      flexDirection: 'row',
    },
    botaoConfirmar: {
      marginRight: 20,
    }
  });

  export default Historico;


