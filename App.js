/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
 'use strict';

import React , { Component } from 'react';
import ToutiaoList from './app/Components/ToutiaoList';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} from 'react-native';

var REQUEST_URL = 'http://v.juhe.cn/toutiao/index?type=top&key=e70939c2324ec2300ce68a7fd254dacb';
export default class App extends React.Component {

  constructor(props){
    super(props);

  }



  render() {
    return (
      <ToutiaoList>
       
      </ToutiaoList>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'rgba(100, 53, 201, 0.1)',
    paddingBottom: 5,
    marginBottom: 6,
    flex: 1,
  },

  itemImage: {
    width: 100,
    height: 140,

  },
  container: {
    flex: 1,
  
    backgroundColor: '#E0FFFF',

  },

  itemText: {
    fontSize: 24,
    textAlign: 'center',
    color: '#f0f',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',

    margin: 10,
  },
  itemContent: {
    flex: 1,
    marginLeft: 13,
    marginTop: 6,
  },
  itemHeader: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 15,
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    color: '#6435c9',
    marginBottom: 6,
  },

  itemMeta: {
    fontSize: 13,
    color: 'rgba(0,0,0,0.6)',
    marginBottom: 6
  }
});
