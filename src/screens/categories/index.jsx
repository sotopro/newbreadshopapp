import React from "react";
import { FlatList, SafeAreaView } from "react-native";

import { CategoryItem } from "../../components";
import { CATEGORIES } from "../../constants/data/categories";
import { styles } from "./styles";

const Categories = ({ navigation }) => {
  const onSelected = (item) => {
    navigation.navigate("Products", {
      categoryId: item.id,
      name: item.name,
    });
  };
  const renderItem = ({ item }) => (
    <CategoryItem item={item} onSelected={onSelected} />
  );
  const keyExtractor = (item, index) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default Categories;
