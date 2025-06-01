import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, SafeAreaView, ScrollView, TextInput } from 'react-native';
import HomeStack from "./navigation/stack.js";
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import MyDrawer from "./navigation/drawer.js"
export default function App() {

  return (
      <NavigationContainer>
          <MyDrawer></MyDrawer>
          <StatusBar style="light" />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  greenContainer: {
    backgroundColor: 'green',
    height: 1600,
    padding: 20
  },
  button: {
    width: 150,
    height: 100,
    justifyContent: 'center',
    alignItems: "center",
    padding: 10,
    backgroundColor: 'purple'
  }
})