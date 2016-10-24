import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Util from '../commons/utils';
import LeftTopListOne from '../components/Today/LeftTopListOne'

export default class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.container}>
                {/*Head*/}
                <View style={styles.headView}>
                    <View style={styles.headViewLeft}>
                        <Text style={{fontSize:35}}>24</Text>
                        <View>
                            <Text style={{fontSize:12,color:"#CDCDC1"}}>10月</Text>
                            <Text style={{fontSize:12,color:"#CDCDC1"}}>周四</Text>
                        </View>
                    </View>
                    <View style={styles.headViewRight}>
                        <View>
                            <Text>周一</Text>
                            <Text style={{fontSize:12,color:"#CDCDC1"}}>10.24</Text>
                        </View>
                        <View>
                            <Text>周二</Text>
                            <Text style={{fontSize:12,color:"#CDCDC1"}}>10.25</Text>
                        </View>
                        <View>
                            <Text>周三</Text>
                            <Text style={{fontSize:12,color:"#CDCDC1"}}>10.26</Text>
                        </View>
                        <View>
                            <Text>周四</Text>
                            <Text style={{fontSize:12,color:"#CDCDC1"}}>10.27</Text>
                        </View>
                    </View>
                </View>
                {/*Middle List*/}
                <View style={styles.scrollViewStyle}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <LeftTopListOne/>
                        <LeftTopListOne/>
                        <LeftTopListOne/>
                        <LeftTopListOne/>
                    </ScrollView>
                </View>
                {/*Bottom Middle Menu*/}
                <MiddleMenu/>
                {/*Bottom Menu*/}
            </View>
        );
    }
}
//中间的菜单
class MiddleMenu extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
    render(){
        return(
            <View style={styles.middleMenuWrapper}>
                <View style={[styles.middleMenuOne,{borderRightWidth:1,borderRightColor:'#EDEDED'}]}>
                    <Icon name="pencil" size={18} color="#CDCDC1" />
                    <Text>管理城市</Text>
                </View>
                <View style={styles.middleMenuOne}>
                    <Icon name="plus" size={18} color="#CDCDC1" />
                    <Text>添加城市</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width:Util.size.width*0.8,
        height:Util.size.height,
        backgroundColor:'white'
    },
    headView:{
        flexDirection:'row',
        height:50,
        justifyContent:'space-around',
        //marginTop:5,
        alignItems:'center'
    },
    headViewLeft:{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    headViewRight:{
        flexDirection:'row',
        flex:3,
        justifyContent:'space-around'
    },
    scrollViewStyle:{
        height:Util.size.height*0.45,
        overflow:'hidden'
    },
    middleMenuWrapper:{
        height:50,
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#EDEDED',
        alignItems:'center'
    },
    middleMenuOne:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around'
    }
});
