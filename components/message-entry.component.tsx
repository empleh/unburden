import React from 'react';
import { TextInput, View } from 'react-native';

const MessageEntry = (props: { message: string; setMessage: (value: string) => void }) => {
  return (
    <View style={{ margin: 12, padding: 24, backgroundColor: 'yellow' }}>
      <TextInput
        style={{
          height: '100%',
          width: '100%',
          borderColor: 'gray',
          borderWidth: 0,
        }}
        onChangeText={props.setMessage}
        value={props.message}
        multiline={true}
      />
    </View>
  );
};

export default MessageEntry;
