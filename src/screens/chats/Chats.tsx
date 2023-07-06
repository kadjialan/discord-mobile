import React, { Component, useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View, Image } from "react-native";
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
      </ScrollView>
    </View>
  );
}

export default Chats;
