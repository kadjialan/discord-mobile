import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="gray" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

});

export default Loader;