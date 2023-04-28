import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import Modal from './src/components/Modal';

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandleChangeText = text => {
    setTextItem(text);
  };

  const addItem = () => {
    setList(prevState => [
      ...prevState,
      { name: textItem, id: Math.random().toString() },
    ]);
    setTextItem("");
  };

  const onHandleModal = item => {
    setItemSelected(item);
    setModalVisible(true);
  };

  const onHandleDelete = item => {
    setList(prevState =>
      prevState.filter(element => element.name !== item.name)
    );
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.renderItemStyle}>
      <Text style={styles.textItem}>{item.name}</Text>
      <Button title="X" onPress={() => onHandleModal(item)} color={"red"} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.titleContainer}>Listado de compras</Text>
        <View style={styles.addItemContainer}>
          <TextInput
            placeholder="Ingrese un nombre"
            style={styles.input}
            onChangeText={onHandleChangeText}
            value={textItem}
          />
          <Button title="Agregar" onPress={addItem} />
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <Modal
        isVisible={modalVisible}
        actionDeleteItem={() => onHandleDelete(itemSelected)}
        closeModal={() => setModalVisible(false)}
        itemSelected={itemSelected}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  inputContainer: {
    height: 200,
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  titleContainer: {
    marginBottom: 20,
    fontSize: 40,
    fontWeight: "500",
    color: "white",
    textAlign: "center"
  },
  addItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: 240,
    height: 35,
    padding: 5,
    fontWeight: "bold",
    backgroundColor: "white",
    borderRadius: 10,
  },
  listContainer: {
    flex: 2,
    marginHorizontal: 30,
    marginTop: 50,
    padding: 3,
  },
  renderItemStyle: {
    height: 60,
    flexDirection: "row",
    marginBottom: 25,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3,
  },
});
