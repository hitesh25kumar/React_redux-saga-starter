import React, {Component} from 'react';
import {Text, View,Button} from 'react-native';
import { connect } from 'react-redux';
import { getNews } from '../actions';


let ApiButton = ({ getNews }) => (
 <Button onPress={getNews} title="API CALL" ButtoStyle={{borderWidth:2,borderColor:'blue',marginTop:80,backgroundColor:'yellow'}}/>
)
 

const mapDispatchToProps = {
  getNews:getNews
}

export default connect(null,mapDispatchToProps)(ApiButton);