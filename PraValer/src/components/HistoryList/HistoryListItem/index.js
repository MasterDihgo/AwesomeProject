import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Currency from '../../Core/Currency';

const HistoryListItem = ({entry}) => {
return (
    <View style={styles.container}>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>{entry.quantidade} - {entry.descricao}</Text>
          </View>

          <View style={styles.amount}>
          <Text style={styles.amountText}>
            <Currency value={entry.preco} />
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
    description: {
      flex: 1,
    },

    descriptionText: {
    
        fontSize: 14,
      
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
        
      },
    });

    export default HistoryListItem;