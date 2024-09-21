import React from 'react';
import { View,Text, Image, FlatList, TextInput } from 'react-native';
import { styles } from './style';

const BigPost = () => {
  return (
    <View>
  <Image style={styles.bigImageContainer}></Image>
    <View style={styles.contentscont}>
          <View style={
            styles.topContainer}>
            <Text style={ styles.title}>Header</Text>
          </View>
          <Text style={styles.contents}>
            He'll want to use your yacht, and I don't 
            want this thing smelling like fish. 
          </Text>
          <Text style={styles.time}>8m ago</Text>
    </View>
    <View style={styles.dotcont}>
    <View style={styles.dotActive} />
    <View style={styles.dot} />
    <View style={styles.dot} />
  </View>
</View>
  );
};
export default BigPost;