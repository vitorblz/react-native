import React from 'react';
import { StyleSheet, Dimensions, Text, View, FlatList, AsyncStorage } from 'react-native';
import Task from '../components/Task';
import AddTask from '../components/AddTask';

const width = Dimensions.get('screen').width;

export default class App extends React.Component {

  constructor(){
    super();
    this.username = '';
    this.state = {
      username: '',
      tasks: [
        {id: 1, name: 'Task 1', description: 'Description 1'},
        {id: 2, name: 'Task 2', description: 'Description 2'},
        {id: 3, name: 'Task 3', description: 'Description 3'},
      ],
    }
  }

  addTask(newTask, inputTask){
    if(newTask === '')
      return;
    
    const newTasks = [
      ...this.state.tasks,
      {id: this.state.tasks.length+1, name: newTask, description: '' }
    ]

    this.setState({tasks: newTasks});
    
    inputTask.clear();
  }


  componentWillMount(){
       AsyncStorage.getItem('username').then(username => this.setState({username})); 
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text >TODOLIST - {this.state.username}</Text>
        </View>
        <AddTask addCb={this.addTask.bind(this)} />
        <View style={styles.list}>
          <Text>Tasks:</Text>
          <FlatList data={this.state.tasks}  
            keyExtractor={item => `{item.id}`}
            renderItem={({item})=>
              <Task item={item} />
            } 
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
  title:{
    width: '100%',
    backgroundColor: '#ccc',
    alignItems: 'center',
  },
  list: {
    padding:10,
  }
});
