import React,{Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';
import Util from '../../commons/utils';

export  default class LeftTopListOne extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    render(){
        return(
            <View style={styles.oneWrapper}>
                <View style={styles.leftView}>
                    <Text style={{marginBottom:5,fontWeight:'bold'}}>上海市</Text>
                    <Text style={{fontSize:12,color:"white",backgroundColor:'#33cc00',
                                textAlign:'center',borderRadius:5,
                                paddingRight:5,paddingLeft:5}}>
                        46 优</Text>
                    <View style={{flexDirection:'row'}}>
                        <Image style={{width:Util.size.width*0.05,height:Util.size.width*0.05}}
                               source={require('../../assets/imgs/weather_icon_small/warm_ico_rain.png')}>
                        </Image>
                        <Text style={{fontSize:12,color:"#CDCDC1"}}>22℃</Text>
                    </View>
                </View>
                <View style={styles.rightView}>
                    <View style={{alignItems:'center'}}>
                        <Image style={{width:Util.size.width*0.08,height:Util.size.width*0.08}}
                               source={require('../../assets/imgs/weather_icon_small/warm_ico_sunset.png')}>
                        </Image>
                        <Text style={{fontSize:12,color:"#CDCDC1"}}>24°</Text>
                        <Text style={{fontSize:12,color:"#CDCDC1"}}>18°</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image style={{width:Util.size.width*0.08,height:Util.size.width*0.08}}
                               source={require('../../assets/imgs/weather_icon_small/warm_ico_sunset.png')}>
                        </Image>
                        <Text style={{fontSize:12,color:"#CDCDC1"}}>24°</Text>
                        <Text style={{fontSize:12,color:"#CDCDC1"}}>18°</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image style={{width:Util.size.width*0.08,height:Util.size.width*0.08}}
                               source={require('../../assets/imgs/weather_icon_small/warm_ico_sunset.png')}>
                        </Image>
                        <Text style={{fontSize:12,color:"#CDCDC1"}}>24°</Text>
                        <Text style={{fontSize:12,color:"#CDCDC1"}}>18°</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image style={{width:Util.size.width*0.08,height:Util.size.width*0.08}}
                               source={require('../../assets/imgs/weather_icon_small/warm_ico_sunset.png')}>
                        </Image>
                        <Text style={{fontSize:12,color:"#CDCDC1"}}>24°</Text>
                        <Text style={{fontSize:12,color:"#CDCDC1"}}>18°</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    oneWrapper:{
        flexDirection:'row',
        height:Util.size.height*0.13,
        justifyContent:'space-around',
        //marginTop:5,
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#EDEDED'
    },
    leftView:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    rightView:{
        flex:3,
        flexDirection:'row',
        justifyContent:'space-around',
    }
});