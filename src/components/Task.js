import React from 'react';
import { StyleSheet, View, Text } from 'react-native';



export default class Task extends React.Component {


    constructor(props){
        super();
        this.state = {
            task: props.item
        }
    }

    render() {
        const {task} = this.state;
        return (
            <View style={styles.task}>
                <Text>- {task.name}</Text>
                <Text>{task.description}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  task: {
    padding:10,
  }
});
