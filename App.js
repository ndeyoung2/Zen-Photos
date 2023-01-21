import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Alert,  Button, Dimensions, FlatList, ScrollView } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  const {landscape} = useDeviceOrientation();

  const handlePress = () => Alert.alert("Look!", "You Pressed A Button!", [ { text: 'Yes'}, {text: 'No' }]);

  const handlePressImage = () => Alert.prompt("What are you thinking?")

  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.titleText}>Zen Photos</Text>
        <ScrollView style={styles.scrollView}>
        <TouchableOpacity onPress={handlePressImage}>
        <Image
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
          flex: 1
        }}/>
        </TouchableOpacity>
        <Button color='purple' style={styles.baseText} title='Press Me!' onPress={handlePress}></Button>
        <TouchableOpacity onPress={handlePressImage}>
        <Image
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
          flex: 1
        }}/>
        </TouchableOpacity>
        <Button color='purple' style={styles.baseText} title='Press Me!' onPress={handlePress}></Button>
        <TouchableOpacity onPress={handlePressImage}>
        <Image
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
          flex: 1
        }}/>
        </TouchableOpacity>
        <Button color='purple' style={styles.baseText} title='Press Me!' onPress={handlePress}></Button>
        <TouchableOpacity onPress={handlePressImage}>
        <Image
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
          flex: 1
        }}/>
        </TouchableOpacity>
        <Button color='purple' style={styles.baseText} title='Press Me!' onPress={handlePress}></Button>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lavender',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: 'lavender',
    margin: 20
  },
  baseText: {
    fontFamily: 'Sans-Serif',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
