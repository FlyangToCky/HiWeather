import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import Util from '../../commons/utils';

export default class MainMiddleOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.left}>
                    <Image style={styles.leftImg} source={require('../../assets/imgs/weather_icon_hd/warm_ico_hd_sunny.png')}></Image>
                </View>
                <View style={styles.right}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{backgroundColor:'#EEE9BF',fontWeight:'bold',color:'white',borderRadius: 5,paddingLeft: 5,paddingRight: 5}}>
                            今天
                        </Text>
                        <Text style={{marginLeft:10,color:'#CDCDC1'}}>10-23</Text>
                    </View>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>18-23℃</Text>
                    <Text style={{fontSize:20,fontWeight:'bold',marginBottom:10}}>阴</Text>
                    <Text style={{backgroundColor:'#FFD700',fontWeight:'bold',color:'white',borderRadius: 5,width:100,textAlign:'center'}}>
                        52 空气质量良
                    </Text>
                </View>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:Util.size.width,
        height:Util.size.height*0.25,
        borderBottomWidth:1,
        borderBottomColor:'#EDEDED'
    },
    left:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },
    leftImg:{
        width:Util.size.height*0.21,
        height:Util.size.height*0.21
    },
    right:{
        flex:1,
        justifyContent: 'center',
    }
});
