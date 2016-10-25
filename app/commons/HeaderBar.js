import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Util from './utils'

export default class HeaderBar extends React.Component {

    render() {

        let NavigationBar = [];

        // 左边图片按钮
        if (this.props.leftIcon != undefined) {
            NavigationBar.push(
                <TouchableOpacity
                    key={'leftIcon'}
                    activeOpacity={0.75}
                    style={styles.leftIcon}
                    onPress={this.props.leftIconAction}
                >
                    <Icon color={this.props.leftIconColor} size={30} name={this.props.leftIcon}/>
                </TouchableOpacity>
            )
        }

        // 标题
        if (this.props.title != undefined) {
            NavigationBar.push(
                <Text key={'title'} style={styles.title}>{this.props.title}</Text>
            )
        }

        // 自定义标题View
        if (this.props.titleView != undefined) {
            let Component = this.props.titleView;

            NavigationBar.push(
                <Text key={'titleView'} style={styles.titleView}>{this.props.titleView}</Text>
            )
        }

        return (
            <View style={styles.navigationBarContainer}>
                {NavigationBar}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navigationBarContainer: {
        //marginTop: 10,
        flexDirection: 'row',
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
//        borderBottomColor: '#ccc',
//        borderBottomWidth: 0.5,
        backgroundColor: 'white'
    },

    title: {
        fontSize: 15,
        marginLeft: 15,
    },
    titleView: {
        fontSize: 15,
    },
    leftIcon: {
        left: -Util.size.width/2+40,
    },
})


