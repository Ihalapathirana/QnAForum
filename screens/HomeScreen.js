import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Tags from 'react-native-tags';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    this.state= {
      question: '',
      isDisable: false,
    }
  }

  updateQuestion = (text) => {
    this.setState({
      question: text,
    });
  }

  onPress = () => {
    this.setState({
      isDisable: true,
    });
  }

  render() {
    const {question, isDisable} = this.state;
    
    return (
      <View style={styles.container}>
        <Tags style={styles.tagStyle}
          initialTags={["Pure Maths", "Combined Maths", "Mathematics", "Science", "Chemistry"]}
          onChangeTags={tags => console.log(tags)}
          onTagPress={(index, tagLabel, event) => console.log(index, tagLabel, event)}
          inputStyle={{ backgroundColor: "white" }}
        />
        {!isDisable ?
        <View>
        <AutoGrowingTextInput style={styles.questionText} 
          placeholder={'Question'}
          defaultHeight={500}
          onChangeText={(text) => this.updateQuestion(text)}
          value={question}
          multiline = {true}
          numberOfLines={3}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}>
          <Text> Add Question </Text>
        </TouchableOpacity>
        </View> :
        <Text style={styles.question}>
          {question}
        </Text> 
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tagStyle: {
    margin: 10,
  },
  questionText: {
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding:10
  }, 
  question: {
    margin: 10,
    fontSize: 16,
  }
});
