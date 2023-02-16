import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, TouchableHighlight, Alert,  Button, ScrollView } from 'react-native';

export default function App() {

  const barnOwl = require('./assets/barn-owl.jpeg');

  const handlePress = () => Alert.alert("Look!", "You Pressed A Button!", [ { text: 'Yes'}, {text: 'No' }]);

  const handlePressImage = () => Alert.prompt("What are you thinking?")

  return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <Text style={styles.titleText}>Zen Photos</Text>
        <TouchableOpacity onPress={handlePressImage}>
        <Image
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
          flex: 1
        }}/>
        </TouchableOpacity>nothing
        <Button color='purple' title="I'm a button! Press me!" onPress={handlePress}></Button>
        <TouchableOpacity onPress={handlePressImage}>
        <Image
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
          flex: 1
        }}/>
        </TouchableOpacity>
        <Button color='purple' title="I'm a button, too!" onPress={handlePress}></Button>
        <TouchableOpacity onPress={handlePressImage}>
        <Image
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
          flex: 1
        }}/>
        </TouchableOpacity>
        <Button color='purple' title='Press me too!' onPress={handlePress}></Button>
        <TouchableOpacity onPress={handlePressImage}>
        <Image
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
          flex: 1
        }}/>
        </TouchableOpacity>
        <Button color='purple' title='Press Me!' onPress={handlePress}></Button>
        <TouchableHighlight onPress={handlePressImage}>
        <Image
          style={styles.image}
          source={barnOwl}
        />
        </TouchableHighlight>
        <Button color='purple' title='Press Me!' onPress={handlePress}></Button>
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
    margin: 5,
  },
  titleText: {
    color: "navy",
    fontSize: 40,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 300,
  },
});
