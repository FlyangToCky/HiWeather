import React,{Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';
import Util from '../../commons/utils';

export default class MainBottom extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    render(){
        return(
            <View style={styles.container}>
                <MainBottomOne/>
                <MainBottomOne/>
                <MainBottomOne/>
                <MainBottomOne/>
                <MainBottomOne/>
                <MainBottomOne/>
            </View>
        )
    }
}
class MainBottomOne extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
    render(){
        return(
            <View style={styles.oneWrapper}>
                <Text style={{fontWeight:'bold'}}>昨天</Text>
                <Text style={{fontSize:12,color:'#CDCDC1'}}>10.22</Text>
                <Image style={{width:Util.size.width*0.08,height:Util.size.width*0.08}}
                       source={require('../../assets/imgs/weather_icon_small/warm_ico_snow.png')}>
                </Image>
                <Text> 22°</Text>
                <Text style={{color:'#CDCDC1',textAlign:'center'}}> 21°</Text>
            </View>
        )
    }
}
const styles =StyleSheet.create({
    /*主体*/
    container:{
        flexDirection:'row',
        justifyContent :'space-around',
        width:Util.size.width,
        height:Util.size.height*0.20,
        alignItems:'center'
    },
    /*每一个*/
    oneWrapper:{
        justifyContent:'center',
        alignItems:'center'
    }
});