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
  AsyncStorage,
  TouchableOpacity
} from 'react-native';

import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
import NewNavTabPickerStore from '../../../Store/NavTabPickerStore'

import MyPageLandingHead from '../../../Components/Component/MyPageComponent/MyPageLandingHead'
import PublicMessage from '../../../Components/PublicComponent/PublicMessage'
import MyPageSetUp from '../../../Components/Component/MyPageComponent/MyPageSetUp'
import MyPageRow from '../../../Components/Component/MyPageComponent/MyPageRow'
import MyPageCol from '../../../Components/Component/MyPageComponent/MyPageCol'


@observer
export default class MyPage extends PureComponent{
    static navigationOptions = {
    tabBarLabel: '我的',
    tabBarIcon: () => (
       <View>
            <Image
               source={require('../../../Icons/mine-sdpi.png')}
               style={styles.icon}
            />
       </View>
      ),
    };
    state={
        PassWord:'',
        Phone:'',
        Landing:'',
        Name:'',
    }
  render() {
    const {navigate}=this.props.navigation;
    return (
      <View>
          {
            NewNavTabPickerStore.Landing||true
            ?
            <View>
                <MyPageLandingHead
                    phone={NewNavTabPickerStore.Phone||''}
                    name={NewNavTabPickerStore.Name||''}
                    code={NewNavTabPickerStore.Code||''}
                    navigate={navigate}
                    landing={true}
                />
                <PublicMessage
                    top={30}
                    right={60}
                    navigate={navigate}
                    GoTo={'MessagePage'}
                />
                <MyPageSetUp
                    top={30}
                    right={15}
                    navigate={navigate}
                    GoTo={'SettingPage'}
                />
                <MyPageRow Landing={true} navigate={navigate}/>
                <MyPageCol Landing={true} navigate={navigate}/>
            </View>

            :
             <View>
                <MyPageLandingHead navigate={navigate}/>
                <PublicMessage
                    top={30}
                    right={60}
                    navigate={navigate}
                    GoTo={'LandingPage'}
                />
                <MyPageSetUp
                    top={30}
                    right={15}
                    navigate={navigate}
                    GoTo={'LandingPage'}
                />
                <MyPageRow  Landing={false} navigate={navigate}/>
                <MyPageCol  Landing={false} navigate={navigate}/>
            </View>
          }

      </View>
    )
  }
}

const styles = StyleSheet.create({
    icon:{
        width:20,
        height:20,
    },
});
