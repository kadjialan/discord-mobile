import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./Chats.styles";
import { images } from './sidebar/index';

const Data = [
  {image : images.pic1},
  {image : images.pic2},
  {image : images.pic3},
  {image : images.pic4},
  {image : images.pic5},
  {image : images.pic6}
]

function Chats() {
  return (
    <View style={styles.container}>
    <ScrollView>
      <View style={styles.sidebar}>
        
      </View>
    </ScrollView>
  </View>
  )
}

export default Chats

