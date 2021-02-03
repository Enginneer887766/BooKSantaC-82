import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';


export default class Settings extends Component {

    constructor(){
        super();
        this.state={
          emailId:'',
          firstName:'',
          lastName:'',
          address:'',
          contact:'',
          docId: ''
        }
      }

      getUserDetails = ()=> {
        var email = firebase.auth().currentUser.email

        db.collection('Users').where('email_id', '==', email).get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                var data = doc.data();
                this.setState({
                    emailId : data.email_id,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    contact: data.contact,
                    address: data.address,
                    docId: doc.id,
                })
            })
        })
      }

      updateUserDetails = ()=> {
          db.collection('Users').doc(this.state.docId).update({
              'first_name': this.state.firstName,
              'last_name': this.state.lastName,
              'contact': this.state.contact,
              'address': this.state.address
          })
      }

      componentDidMount() {
          this.getUserDetails();
      }
    render() {
        return (
            <View>
                <Text>Settings</Text>
                <View>
                <TextInput
          style={styles.formTextInput}
          placeholder ={"First Name"}
          maxLength ={8}
          
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
          value = {this.state.firstName}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Last Name"}
          maxLength ={8}
          
          onChangeText={(text)=>{
            this.setState({
              lastName: text
            })
          }}
          value = {this.state.lastName}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Contact"}
          maxLength ={10}
          keyboardType={'numeric'}
         
          onChangeText={(text)=>{
            this.setState({
              contact: text
            })
          }}
          value = {this.state.contact}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Address"}
          multiline = {true}
          
          onChangeText={(text)=>{
            this.setState({
              address: text
            })
          }}
          value = {this.state.address}
        />

<TouchableOpacity
            style={styles.registerButton}
            onPress={()=>
              this.updateUserDetails()
            }
          >
          <Text style={styles.registerButtonText}>Save</Text>
          </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F8BE85',
        alignItems: 'center',
        justifyContent: 'center'
      },
      formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
      },
      registerButton:{
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        marginTop:30
      },
      registerButtonText:{
        color:'#ff5722',
        fontSize:15,
        fontWeight:'bold'
      },
      cancelButton:{
        width:200,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
      },
})