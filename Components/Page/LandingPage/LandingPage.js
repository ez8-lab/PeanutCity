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
  TextInput,
  TouchableOpacity,
} from 'react-native';


import LandingVerificationCode from '../../../Components/Component/LandingComponent/LandingVerificationCode'
export default class LandingPage extends PureComponent{
    state={
        text:'',
        passWord:'',
        secureTextEntry:true
    }
    ChangeSecureTextEntry=()=>{
        this.setState({
            secureTextEntry:!this.state.secureTextEntry,
        })
    }
  render() {
    const {state,goBack}=this.props.navigation;
    return (
      <View style={styles.View}>
          <TouchableOpacity
              onPress={()=>goBack()}>
              <Image
              style={styles.Image1}
              source={require('../../../Icons/shutDown.png')}
              />
          </TouchableOpacity>
          <View
              style={styles.Image2View}>
            <Image
              style={styles.Image2}
              source={require('../../../Icons/landing.png')}
            />
          </View>
          <Image
              style={styles.Image3}
              source={require('../../../Icons/peanut.png')}
          />
          <View style={styles.View1}>
              <Image
              style={styles.Image4}
              source={require('../../../Icons/phone.png')}
              />
              <TextInput
                  style={styles.TextInput}
                  onChangeText={(text)=>this.setState({text})}
                  value={this.state.text}
                  placeholder="请输入手机号"
                  autoCapitalize={'none'}
                  keyboardType={'numeric'}
                  maxLength={11}
              />
          </View>

          <View style={styles.View2}>

              {
                this.state.passWord.length<6
                ?
                <Image
                    style={styles.Image5}
                    source={require('../../../Icons/passWord.png')}
                />
                :
                <Image
                    style={styles.Image5}
                    source={require('../../../Icons/passWordRed.png')}
                />
              }
              <TextInput
                  style={styles.TextInput}
                  onChangeText={(passWord)=>this.setState({passWord})}
                  value={this.state.passWord}
                  placeholder="请输入密码"
                  autoCapitalize={'none'}
                  maxLength={10}
                  secureTextEntry={this.state.secureTextEntry}
              />
               <TouchableOpacity onPress={this.ChangeSecureTextEntry}
                                 style={styles.Image6View}
               >
                   {
                     this.state.secureTextEntry
                     ?
                         <Image
                             source={require('../../../Icons/Down.png')}
                             style={styles.Image6}
                         />
                     :
                         <Image
                             source={require('../../../Icons/See.png')}
                             style={styles.Image6}
                         />
                   }
               </TouchableOpacity>
          </View>


          {
            this.state.text.length<11||this.state.passWord.length<6
            ?
                <TouchableOpacity style={styles.landingbuttonNo}
                    disabled={true}
                >
                    <TouchableOpacity style={styles.Text7View}>
                        <Text
                            style={styles.Text8}>登陆</Text>
                    </TouchableOpacity>
                </TouchableOpacity>

            :
                <TouchableOpacity style={styles.landingbuttonYes}
                    disabled={true}
                >
                    <TouchableOpacity style={styles.Text7View}>
                        <Text
                            style={styles.Text8}>登陆</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
          }

          <TouchableOpacity
              style={styles.WeiXinLandingView}>
              <TouchableOpacity
                  style={styles.WeiXinLanding}>
                  <Image
                      source={require('../../../Icons/WeiXin.png')}
                      style={styles.Image7}
                  />
                  <Text style={styles.Text9}>微信登陆</Text>
              </TouchableOpacity>
          </TouchableOpacity>
          <View style={styles.DownTextView}>
              <TouchableOpacity>
                  <Text style={styles.DownText1}>注册</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                  <Text style={styles.DownText2}>没有密码/忘记密码</Text>
              </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    View:{
        flex:1,
        backgroundColor:'#FFF'
    },
    Image1:{
        width:20,
        height:20,
        marginLeft:20,
        marginTop:40,
    },
    Image2View:{
        width:'100%',
        alignItems:'center',
        position:'absolute',
        top:80,
    },
    Image2:{
        width:140,
        height:140,
    },
    Image3:{
        width:60,
        height:60,
        position:'absolute',
        right:10,
        top:50,
    },
    View1:{
        width:'73%',
        position:'absolute',
        left:'15%',
        top:230,
    },
    Image4:{
        width:25,
        height:25,
        position:'absolute',
        left:'-10%',
        top:10,
    },
    View2:{
        width:'73%',
        position:'absolute',
        left:'15%',
        top:290,
    },
    Image5:{
        width:25,
        height:25,
        position:'absolute',
        left:'-10%',
        top:10,
    },
    Image6View:{
        position:'absolute',
        top:10,
        right:10,
    },
    Image6:{
        width:25,
        height:25,
    },
    landingbuttonYes:{
        width:'70%',
        marginLeft:'15%',
        borderRadius:20,
        height:35,
        backgroundColor:'red',
        position:'absolute',
        top:370,
    },
    landingbuttonNo:{
        width:'70%',
        marginLeft:'15%',
        borderRadius:20,
        height:35,
        backgroundColor:'gainsboro',
        position:'absolute',
        top:370,
    },
    Text7View:{
        alignItems:'center',
        marginTop:7,
    },
    Text8:{
        color:'#FFF'
    },
    WeiXinLandingView:{
        width:'70%',
        marginLeft:'15%',
        borderRadius:20,
        height:35,
        backgroundColor:'darkorange',
        position:'absolute',
        top:430,
    },
    WeiXinLanding:{
        flexDirection:'row',
        marginLeft:'31%',
        marginTop:8,
    },
    Image7:{
        width:25,
        height:25,
        marginRight:'5%',
        marginTop:-3,
    },
    Text9:{
        color:'#FFF'
    },
    DownTextView:{
        width:'100%',
        height:30,
        flexDirection:'row',
        position:'absolute',
        top:500,
        justifyContent:'space-around'
    },
    DownText1:{
        textDecorationLine:'underline'
    },
});
