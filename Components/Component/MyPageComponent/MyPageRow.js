/**
 * Sample
 * React
 * Native
 * App
 * https://github.com/facebook/react-native
 * @flow
 * Created
 *     by
 *     Administrator
 *     on
 *     2018/3/12.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
  TouchableOpacity,
} from 'react-native';



import MyPageNoviceStrategy from './MyPageNoviceStrategy';
import MyPageCollection from './MyPageCollection';
import MyPageProblem from './MyPageProblem';
import MyPageService from './MyPageService';
export default class MyPageRow extends PureComponent{
  render() {
    const {navigate}=this.props;
    return (
      <View style={styles.View}>
          {
            this.props.Landing
            ?
            <View style={styles.SmallView}>
               <MyPageNoviceStrategy GoTo={'NovicePage'} navigate={navigate}/>
               <MyPageCollection GoTo={'CollectionPage'} navigate={navigate}/>
               <MyPageProblem GoTo={'ProblemPageList'} navigate={navigate}/>
               <MyPageService GoTo={'ServicePage'} navigate={navigate}/>
            </View>
            :
            <View style={styles.SmallView}>
               <MyPageNoviceStrategy GoTo={'LandingPage'} navigate={navigate}/>
               <MyPageCollection GoTo={'LandingPage'} navigate={navigate}/>
               <MyPageProblem GoTo={'LandingPage'} navigate={navigate}/>
               <MyPageService GoTo={'LandingPage'} navigate={navigate}/>
            </View>
          }

      </View>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        height:65,
        backgroundColor:'#FFF',
        marginLeft:'3%',
        marginRight:'3%',
        borderRadius:10,
        marginTop:-50
    },
    SmallView:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
});
