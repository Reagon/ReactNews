import React , { Component } from 'react';
import styles from '../Styles/Main';
import {
  Text,
  View,
  Image,
  ListView,
  ActivityIndicator,
} from 'react-native';

var REQUEST_URL = 'http://v.juhe.cn/toutiao/index?type=top&key=e70939c2324ec2300ce68a7fd254dacb';
export default class ToutiaoList extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      movies: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2
       }),
      loaded: false
    };

    this.fetchData();
  }

 
 fetchData(){
  fetch(REQUEST_URL)
  .then(response => response.json())
  .then(resonseData =>{
     console.log(resonseData.result);
    this.setState({
      movies: this.state.movies.cloneWithRows(resonseData.result.data),
      loaded: true
    });
  }).done();
 }

renderMovieList(movie){
  return (
    <View style={styles.item}>
      <View style={styles.itemImage}>
        <Image source={{uri: movie.thumbnail_pic_s}}
          style={styles.itemImage}
        />
      </View>

      <View style={styles.itemContent}>
        <Text style={styles.itemHeader}> 
          {movie.title}
        </Text>

        <Text style={styles.itemMeta}> 
          {movie.author_name} ({movie.date})
        </Text>

      </View>

    </View>
  );
}

  render() {
    if (!this.state.loaded) {
      return (
        <View style={styles.container}>
          <View style={styles.loading}>
            {/* <Text>加载中。。。</Text> */}
            <ActivityIndicator 
                size = 'large'
                color="#6435c9"
            />
          </View>

        </View>
      );
    }
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.movies}
          renderRow={this.renderMovieList}
        />

      </View>
    );
  }
}
