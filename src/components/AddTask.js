import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';



export default class AddTask extends React.Component {


    constructor(props){
        super();
        this.state = {
            newTask: ''
        }
    }

    render() {
        const {task} = this.state;
        return (
            <View style={styles.addTask}>
                <TextInput 
                ref={input => this.inputTask = input}
                onChangeText={text => this.setState({newTask: text})}
                placeholder='New task' underlineColorAndroid='transparent'  style={styles.input}></TextInput>
                <Button style={styles.sendButton}  
                    onPress={()=>this.props.addCb(this.state.newTask, this.inputTask)} title="Send" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    addTask: {
        flexDirection: 'row',
        alignItems: 'center',
        padding:10,
        width: '100%',
    },
    sendButton: {
        height: 40,
    },
    input: {
        height: 40,
        flex: 1,
        borderWidth: 1,
        margin: 5,
        padding:5,
    },
});
