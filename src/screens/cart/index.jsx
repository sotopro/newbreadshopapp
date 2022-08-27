import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { CartItem } from "../../components";
import { removeItem } from "../../store/actions/cart.actions";
import { styles } from "./styles";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const onHandleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const onHandleConfirm = () => {
    console.warn("Confirm");
  };
  const keyExtractor = (item) => item.id.toString();
  const renderItem = ({ item }) => <CartItem item={item} onDelete={onHandleDelete} />;

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList data={items} keyExtractor={keyExtractor} renderItem={renderItem} />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonConfirm} onPress={() => onHandleConfirm()}>
          <Text style={styles.buttonText}>Confirm</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalTitle}>Total</Text>
            <Text style={styles.total}>{total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
