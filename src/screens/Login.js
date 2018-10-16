import React from 'react';
import { StyleSheet, Dimensions, Text, View, Button, TextInput, AsyncStorage } from 'react-native';


const width = Dimensions.get('screen').width;

export default class Login extends React.Component {

    constructor(){
        super();

        this.users  = [
            {username: 'admin', password: '123'}
        ];

        this.state = {
            message: "",
            username: '',
            password: ''
        };
    }

    static navigatorStyle = {
        navBarHidden: true
    }

    login(){

        const user = this.users.find(user=> (user.username===this.state.username && user.password===this.state.password) );
  
        if(user){
            AsyncStorage.setItem('username',user.username);

            this.props.navigator.resetTo({
                screen: 'Todolist',
                title: 'Home',
            })
        }
        else
        {
            this.setState({message: "Can not auth user!!!"})
        }
    }

    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Todolist</Text>
            <View style={styles.form}>
              <TextInput style={styles.input}
                  placeholder="User..."
                  onChangeText={text => this.setState({username: text})}
                  autoCapitalize="none"/>
    
              <TextInput style={styles.input}
                  placeholder="Password..."
                  onChangeText={text => this.setState({password: text})}
                  secureTextEntry={true}/>
    
              <Button title="Login" onPress={this.login.bind(this)}/>
            </View>
    
            <Text style={styles.message}>
              {this.state.message}
            </Text>
          </View>
        );
      }
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 26,
    },
    form: {
        width: width * 0.8
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    message: {
        marginTop: 15,
        color: '#e74c3c'
    }
})
    