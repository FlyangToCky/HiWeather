import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
    } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Util from '../../commons/utils';

export default class LeftMenuOne extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        let isBalck = this.props.isBlack;
        return (
            <TouchableOpacity onPress={this.props.onPressButton}>
                <View style={styles.container}>
                    <View style={styles.left}>
                        <Icon name={this.props.menuIcon} size={18} color={isBalck?"black":"#CDCDC1"}/>
                        <Text style={{color:isBalck?"black":"#CDCDC1"}}>{this.props.menuTitle}</Text>
                    </View>
                    <View style={styles.right}></View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    /*主体*/
    container: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#EDEDED'
    },
    left: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    right: {
        flex: 2
    }
});