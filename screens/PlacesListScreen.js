import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { HeaderButton, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/HeaderButton";

const PlacesListScreen = (props) => {
  return (
    <View>
      <Text>PlacesListScreen</Text>
    </View>
  );
};

PlacesListScreen.navigationOptions = (navData) => {
  return {
    heaederTitle: "All Places",
    headerRight: (
      <HeaderButton HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add Place"
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          onPress={() => {
            navData.navigation.navigate("NewPlace");
          }}
        />
      </HeaderButton>
    ),
  };
};

const styles = StyleSheet.create({});

export default PlacesListScreen;
