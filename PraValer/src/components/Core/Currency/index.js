import React from 'react';
import {Text} from 'react-native';

import { NumericFormat } from 'react-number-format';

const Currency = ({value}) => {
    return (
        <NumericFormat
            value={parseFloat(value)} // isso transforma o valor do banco de dados em numero com virgula
            displayType={'text'}
            thousandSeparator={'.'}
            decimalSeparator={','}
            fixedDecimalScale={true}
            decimalScale={2} // isso limita 2 casas depois da virgula
            prefix={'R$ '}
            renderText={item => <Text>{item}</Text>}
        />
    );
};

export default Currency;