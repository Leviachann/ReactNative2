import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';
import MainBar from './MainBar';
import Message from './Message';
const Card = () => {
  return (
    <View >
        <MainBar title='Messages'></MainBar>
        <Message message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis. " isSender={false} />
      <Message message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " isSender={true} />
      <Message message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " isSender={true} />
      <Message message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis. " isSender={false} />
      <View style={{ }}></View>
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.sendInput}
        placeholder="Message here.."
      />
      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default Card;
