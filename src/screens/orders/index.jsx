import React from "react";
import { View, FlatList } from "react-native";

import { OrderItem } from "../../components";
import { ORDERS } from "../../constants/data/orders";
import { styles } from "./styles";

const Orders = () => {
  const items = ORDERS;

  const onHandleDelete = (id) => {
    console.warn(`Delete ${id}`);
  };

  const keyExtractor = (item) => item.id.toString();

  const renderItem = ({ item }) => <OrderItem item={item} onDelete={onHandleDelete} />;
  return (
    <View style={styles.container}>
      <View style={styles.orderList}>
        <FlatList data={items} keyExtractor={keyExtractor} renderItem={renderItem} />
      </View>
    </View>
  );
};

export default Orders;
