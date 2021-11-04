import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
} from 'react-native';


class ViewMovies extends Component{
    constructor(props) {
        super(props);
        this.passProps= this.props.route.passProps;
    }

    render(){
        return(
            <View style={style.container}>
                <Image></Image>
                <Text></Text>
                <Text></Text>
            </View>
        );
    }
}

module.exports = ViewMovies;