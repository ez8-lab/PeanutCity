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
 *     2018/3/6.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
  Image,
  ScrollView,
  StatusBar,
  RefreshControl,
  AsyncStorage,
  BackHandler,
} from 'react-native';

import *as WeChat from 'react-native-wechat'
import NewNavTabPickerStore from '../../../Store/NavTabPickerStore'


import HomePageSearch from '../../../Components/Component/HomePageComponent/HomePageSearch'
import PublicMessage from '../../../Components/PublicComponent/PublicMessage'
import HomePageSwiper from '../../../Components/Component/HomePageComponent/HomePageSwiper'
import HomePageBanner from '../../../Components/Component/HomePageComponent/HomePageBanner'
import HomePageNavBannerList from '../../../Components/List/HomePageList/HomePageNavBannerList'
import PublicHalfList from '../../PublicComponent/PublicLikeList/PublicHalfList/PublicHalfList'



export default class HomePage extends PureComponent{
    state={
        Scroll:false
    }
    static navigationOptions = {
        tabBarLabel: '主页',
        tabBarIcon: () => (
           <View>
                <Image
                   source={require('../../../Icons/index-sdip.png')}
                   style={styles.icon}
                />
           </View>
          ),
    };
    fetchPost=async()=>{
       const json=fetch('http://111.230.254.117:8000/logined?', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body:`phone=${NewNavTabPickerStore.Phone}&password=${NewNavTabPickerStore.PassWord}`,
        })
    }
    refreshing=false
    _onRefresh(){
        refreshing=true

        setTimeout(()=>{
            refreshing=false
        },3000)
    }
  componentDidMount (){
    WeChat.registerApp('wx21b8979660c07d7e');
    this.fetchPost();
    AsyncStorage.getItem('Landing')
            .then((value) => {
                let jsonValue = JSON.parse((value));
                NewNavTabPickerStore.Landing=jsonValue
            })
  }


  render() {
    const {navigate}=this.props.navigation;
    return (
      <ScrollView
          style={styles.view}
          keyboardDismissMode='on-drag'
          stickyHeaderIndices={[0]}
          onScroll={(event)=>
            {
                if(event.nativeEvent.contentOffset.y>=60){
                    this.setState({
                        Scroll:true
                    })
                }else{
                    this.setState({
                        Scroll:false
                    })
                }
            }
          }
          showsVerticalScrollIndicator={false}
          refreshControl={
          <RefreshControl
            refreshing={this.refreshing}
            enabled={true}
            onRefresh={this._onRefresh.bind(this)}
          />}
      >
          {
              this.state.Scroll
              ?
              <View style={{backgroundColor:'rgba(255,255,255,1)'}}>
                <StatusBar
                translucent={true}
                backgroundColor='rgba(255,255,255,0)'
                />
                <HomePageSearch
                    navigate={navigate}
                    marginTop={35}
                    backgroundColor='rgba(0,0,0,0.1)'
                    marginBottom={15}
                />
                {
                  NewNavTabPickerStore.Landing
                  ?
                  <PublicMessage
                      top={35}
                      right={10}
                      colorGray={true}
                      backgroundColor={'red'}
                      navigate={navigate}
                      GoTo={'MessagePage'}
                  />
                  :
                  <PublicMessage
                      top={35}
                      right={10}
                      colorGray={true}
                      backgroundColor={'red'}
                      navigate={navigate}
                      GoTo={'LandingPage'}
                  />
                }
              </View>
              :
              <View>
                <StatusBar
                translucent={true}
                backgroundColor='rgba(255,255,255,0)'
                />
                <HomePageSearch
                    navigate={navigate}
                    marginTop={35}
                    marginBottom={0}
                    backgroundColor={'#FFF'}
                />
                {
                  NewNavTabPickerStore.Landing
                  ?
                  <PublicMessage
                      top={35}
                      right={10}
                      colorGray={false}
                      backgroundColor={'red'}
                      navigate={navigate}
                      GoTo={'MessagePage'}
                  />
                  :
                  <PublicMessage
                      top={35}
                      right={10}
                      colorGray={false}
                      backgroundColor={'red'}
                      navigate={navigate}
                      GoTo={'LandingPage'}
                  />
                }
              </View>
          }



          <HomePageSwiper  navigate={navigate}/>
          <HomePageBanner/>
          <HomePageNavBannerList navigate={navigate}/>
          <View style={styles.LikeHead}>
              <View style={styles.line1}></View>
              <View style={styles.ImageView}>
                  <Image
                      source={require('../../../Icons/like.png')}
                      style={styles.Image}
                  />
              </View>
              <Text style={styles.Text}>猜你喜欢</Text>
              <View style={styles.line2}></View>
          </View>
          <PublicHalfList navigate={navigate}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:'#FFF'
    },
    icon:{
        width:20,
        height:20,
    },
    LikeHead:{
        height:40,
        backgroundColor:'#FFF',
        flexDirection:'row',
        marginTop:20,
    },
    line1:{
        width:50,
        height:1,
        backgroundColor:'red',
        marginTop:20,
        marginLeft:80,
    },
    line2:{
        width:50,
        height:1,
        backgroundColor:'red',
        marginTop:20,
        marginLeft:240,
        position:'absolute'
    },
    ImageView:{
        width:20,
        height:20,
        borderRadius:10,
        backgroundColor:'red',
        marginTop:10,
        marginLeft:10,
    },
    Image:{
        width:15,
        height:15,
        marginLeft:2,
        marginTop:3,
    },
    Text:{
        marginTop:10,
        marginLeft:10,
    }
});
