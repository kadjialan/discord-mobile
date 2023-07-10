import React, { Component, useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import { styles } from "./Chats.styles";
import { Data } from "./sidebar/index";

function Chats() {
  const [img, setImg] = useState(Data);

  useEffect(() => {
    setImg(Data);
  });
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.chatsWrapper}>
          <View style={styles.sidebar}>
            <FlatList
              data={img}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View>
                  <Image source={item.pic} style={styles.picture} />
                </View>
              )}
            />
          </View>

          <View style={styles.contacts}>
            <Text style={styles.h1}>Direct Messag...</Text>

            <TextInput
              placeholderTextColor="grey"
              placeholder="Start a conversation"
              style={styles.input}
            />
            <FlatList
              data={img}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.contactInfos}>
                  <Image source={item.pic} style={styles.profile} />
                  <View>
                    <Text style ={styles.name}>{item.name}</Text>
                    <Text>{item.message}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Chats;
