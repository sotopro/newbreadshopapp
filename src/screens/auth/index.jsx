import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Button,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";

import { colors } from "../../constants/colors";
import { signup } from "../../store/actions/auth.actions";
import { isIOS } from "../../utils/functions";
import { styles } from "./styles";

const AuthScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const title = "Registro";
  const message = "¿Ya tienes una cuenta?";
  const messageAction = "Registrate";
  const messageTarget = "Registrate";
  const onHandleChange = (value, type) => {
    if (type === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };
  const onHandleAuth = () => {
    dispatch(signup(email, password));
  };
  return (
    <KeyboardAvoidingView style={styles.containerKeyboard} behavior={isIOS ? "padding" : "height"}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.label}>Correo electronico</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su email"
          placeholderTextColor={colors.placerholder}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={(text) => onHandleChange(text, "email")}
          value={email}
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su contraseña"
          placeholderTextColor={colors.placerholder}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          onChangeText={(text) => onHandleChange(text, "password")}
          value={password}
        />
        <Button
          disabled={!(email && password)}
          title={messageTarget}
          color={colors.primary}
          onPress={onHandleAuth}
        />

        <View style={styles.prompt}>
          <TouchableOpacity onPress={() => console.warn(messageTarget)}>
            <Text style={styles.promptMessage}>{message}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;
