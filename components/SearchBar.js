import { View, Text, TextInput, Icon } from "react-native";
import React, { useState } from "react";
import { IoLocation } from "react-icons/io";

export default function SearchBar() {
  const [MyText, useText] = useState("china");

  // const hangler = () => {
  //   return;
  // };

  return (
    <View>
      <TextInput
        placeholder="Search"
        style={{
          paddingLeft: 40,
          backgroundColor: "#eee",
          borderRadius: 50,
          marginTop: 10,
          padding: 7,
        }}
        onChangeText={(sam) => useText(sam)}
      ></TextInput>
      <Text>{MyText}</Text>
      {/* <IoLocation /> */}
    </View>
  );
}
