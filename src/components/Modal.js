import {
  StyleSheet,
  View,
  Text,
  Modal as NewModal,
  Button,
} from "react-native";
import React from "react";

const Modal = ({ isVisible, actionDeleteItem, itemSelected, closeModal }) => {
  return (
    <NewModal visible={isVisible} animationType="fade" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalBg}>
          <Text style={styles.questionText}>¿Deseas borrar el producto {"\n"} <Text style={styles.modalItemStyle}>{itemSelected.name}</Text> de la lista?</Text>
          <View style={styles.btnsAction}>
            <Button
              title="Cancelar"
              color={"grey"}
              onPress={() => closeModal()}
            />
            <Button
              title="Eliminar"
              color={"red"}
              onPress={() => actionDeleteItem()}
            />
          </View>
        </View>
      </View>
    </NewModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalBg: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15
  },
  modalStyle: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  questionText: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20
  },
  modalItemStyle: {
    fontWeight: "bold"
  },
  btnsAction: {
    flexDirection: "row",
    justifyContent: "space-around",
  }
});
