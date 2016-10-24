import React,{Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';
import Util from '../../commons/utils';

export default class LeftMenuOne extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render(){
        return(
            <View style={styles.container}>

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
        alignItems:'center'
    }
});