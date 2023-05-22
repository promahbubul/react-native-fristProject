import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://i.cbc.ca/1.6584843.1663441097!/cumulusImage/httpImage/restaurant-inflation.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://www.medoc-atlantique.com/wp-content/uploads/2019/02/restaurant-1600x900.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 570,
    rating: 4.8,
  },
  {
    name: "Nababi",
    image_url:
      "https://www.themarmarahotels.com/hubfs/Taksim/Pictures/Restaurants/restaurants-taksim-01.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 900,
    rating: 3.7,
  },
  {
    name: "Sultan Dayen",
    image_url:
      "https://d1ralsognjng37.cloudfront.net/138fad4a-52ff-4dce-ab1a-26a7d65e6d2c.jpeg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 100,
    rating: 3.5,
  },
  {
    name: "Hazi Berani",
    image_url:
      "https://assets.bonappetit.com/photos/631913007d3648779a6055be/16:9/w_2560%2Cc_limit/HR_SALTBAE.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 570,
    rating: 5,
  },
];

export default function RestaurantItems(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {props.restaurantData.map((restaurant, index) => (
        <View
          key={index}
          style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
        >
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
      alignItems: "center",
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-40 . min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        justifyContent: "center",
        height: 30,
        width: 30,
        alignItems: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
