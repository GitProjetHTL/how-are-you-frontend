// Emotion board component 
import React, { useState, useMemo } from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image, Dimensions } from "react-native";

export default function Suggestions() {
    const BACKEND = "https://howareyouapp-backend.vercel.app/";

    
    return (
        <View style={styles.container}>
        <Text>Suggestions</Text>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#E9EBFC",
        width: Dimensions.get('window').width,
        backgroundColor: "#E9EBFC",
    }
})