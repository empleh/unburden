import React from 'react';
import { View } from 'react-native';

const Blank = () => {
    console.log('blakn');
    return (
        <View
            style={[
                {
                    backgroundColor: 'red',
                    flex: 1,
                },
            ]}
        />
    );
};

export default Blank;
