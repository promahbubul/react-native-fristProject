import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItems";

const YELP_API_KEY =
  "GNadxQwvSA-kIMenICSdNu1Ty-W7XoBTj82b-FAYXFDX8vPiQ2t7cEiq9KNB6aXMR8XULfsDcg_uXvp4FOvLjlrpDL3kdRwNaeSSToBtUS-3OMCn7EwLUm9zXrlpZHYx";

export default function Home() {
  const [restaurantData, setrestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("Canada");

  const getRestaurantFromYelp = () => {
    const yeltUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yeltUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setrestaurantData(json.businesses));
  };

  useEffect(() => {
    getRestaurantFromYelp();
  }, [city]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15, marginTop: 35 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
