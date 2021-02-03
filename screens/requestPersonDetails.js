import React from 'react';
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
  import {Card} from 'react-native-elements'

   class RequestPersonDetails extends React.Component{

   
       constructor(props) {
           super(props);
           this.state = {
               user_id: firebase.auth().currentUser.email,
               request_id: this.props.navigation.getParma('details')['user_id'],
               bookName : this.props.navigation.getParma('details')['book_name'],
               reasonToRequest: this.props.navigation.getParma('details')['reason_to_request'],
               recieveerId : '',
               recieveerName: '',
               recieveerBookId : '',
               recieveerContact : '',
               recieveerAddress : ''
           }
       }

       

       GetRequestPersonDetails = ()=> {
        db.collection('Users').where('email_id', '==',this.state.recieveerId).get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                this.setState({
                    recieveerName: doc.data().first_name,
                    recieveerAddress: doc.data().address,
                    recieveerContact: doc.data().contact  
              })
            })
        })
    } 

    updateBookStatus = ()=> {
        db.collection('Donations').add({
            'book_name': this.state.bookName,
            'reciever_name': this.state.recieveerName,
            'donor_id': this.state.user_id,
            'request_status': "interested"

        })

    }
    
      render() {
          return (
              <View >
                  <View style={{flex:0.3}} >
                      <Card title = {'Book Information'}  >

                      </Card>
                      <Card >
                        <Text>Name : {this.state.bookName}</Text>
                      </Card>
                      <Card>
                          <Text>Reason : {this.state.reasonToRequest}</Text>
                      </Card>
                      <Card>
                          <Text>Reciever Name : {this.state.recieveerName}</Text>
                          </Card>
                          <Card>
                          <Text>Reciever Address : {this.state.recieveerAddress}</Text>
                          </Card>
                          <Card>
                          <Text>Reciever Contact : {this.state.recieveerContact}</Text>
                          </Card>
                          (this.state.recieveerId != this.state.userId ? (
                            <TouchableOpacity onPress = {()=> {
                              this.updateBookStatus();
                              this.props.navigation.navigate('MyDonation')
                          }}>
                              <Text>
                                  I want to Donate
                                 </Text>
                          </TouchableOpacity>
                          ) : null)
                          
                  </View>
              </View>
          )
         
      }
     
  }

  export default RequestPersonDetails;