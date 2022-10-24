import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, ListViewBase , FlatList} from 'react-native';

// sửa lỗi paste phép tính
// history, mở lại phép tính
// search 

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  const [input, setInput] = useState('');
  return (


    <View style={{ padding: 10 }}>

      <TextInput
        style={styles.input}
        placeholder="Type here to calculate!"
        onChangeText={
          newText => {
            console.log(newText);
            setInput(newText.replace(/[^0-9 + -- * / ]/g, ''));
            if (checkChar(newText.at(-1)) && checkChar(newText.at(-2))) {``
              setInput(newText.slice(0, -2) + newText.at(-1));
            }
          }}
        onSubmitEditing={(_value) => {
          if (!checkChar(_value.nativeEvent.text.at(-1))) {
            var answer;
            try {
              answer = eval(_value.nativeEvent.text);
            } catch (err) {
              setInput("");
              answer = "Input failed";
            }
            finally {
              setText(answer);
            }
          }
        }}
        value={input} />
      <Text>
        Only number and +, -, *, /
      </Text>
      <Text style={{ padding: 10, fontSize: 30, textAlign: 'center', }}>
        {text}
      </Text>

    </View>
  );
}
function checkChar(c) {
  const a = ["+", "-", "*", "/"];
  return a.includes(c);
}
const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
    marginTop: Dimensions.get('window').height / 3
  },
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default PizzaTranslator;