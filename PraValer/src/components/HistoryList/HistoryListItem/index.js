import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Currency from '../../Core/Currency';

const HistoryListItem = ({entry}) => {
return (
    <View style={styles.container}>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>{entry.quantidade}{entry.description}</Text>
          </View>

          <View style={styles.amount}>
          <Text style={styles.amountText}>
            <Currency value={entry.amount} />
          </Text>
        </View>
        </View>
)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },

    descriptionText: {
        fontSize: 14,
        //color: Colors.white,
      },
      details: {
        flexDirection: 'row',
      },
      amount: {
        justifyContent: 'center',
      },
      amountText: {
        fontSize: 14,
        fontWeight: 'bold',
        //color: Colors.white,
      },
    });

    export default HistoryListItem;