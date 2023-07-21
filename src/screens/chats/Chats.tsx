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
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

function Chats() {
  const [img, setImg] = useState(Data);

  useEffect(() => {
    setImg(Data);
  });
  return (
    <View style={styles.container}>
      <View style={styles.chatsWrapper}>
        <View style={styles.sidebar}>
          <View style={styles.groups}>
            <View style={styles.messageBar} />
            <MaterialCommunityIcons
              name="message"
              size={24}
              color="#fff"
              style={styles.messageIcon}
            />
          </View>

          <FlatList
            data={img}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.groups}>
                <View style={styles.btn} />
                <Image source={item.pic} style={styles.picture} />
              </View>
            )}
          />
        </View>

        <View style={styles.contacts}>
          <View style={styles.contacts__header}>
            <Text style={styles.h1}>Direct Messag...</Text>
            <MaterialCommunityIcons
              name="message-badge"
              size={24}
              color="#edede996"
            />
          </View>

          <View style={{ position: "relative" }}>
            <TextInput
              placeholderTextColor="grey"
              placeholder="Start a conversation"
              style={styles.input}
            />
            <AntDesign
              name="search1"
              size={20}
              color="#edede996"
              style={styles.searchIcon}
            />
          </View>

          <FlatList
            data={img}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.contactInfos}>
                <View style={{ position: "relative" }}>
                <Image source={item.pic} style={styles.profile} />
                <View style={styles.online}/>
                <View/>
                </View>
               
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.message}>{item.message}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}

export default Chats;
