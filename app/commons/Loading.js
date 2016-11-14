import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    Modal
    } from 'react-native';

import Util from './utils.js'

export default class Loading extends React.Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            animationType: 'none',
            modalVisible: false,
            transparent: false
        };
      }
    render() {
        var modalBackgroundStyle = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff'
        };
        return (
                <Modal
                    animationType={this.state.animationType}
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {this._setModalVisible(false)}}
                    >
                    <View style={[styles.container, modalBackgroundStyle]}>
                        <View style={styles.loading}>
                        <ActivityIndicator color="white"/>
                        <Text style={styles.loadingTitle}>加载中...</Text>
                        </View>
                    </View>
                </Modal>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    loading: {
        backgroundColor: 'gray',
        height: 80,
        width: 100,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: (Util.size.height) / 2,
        left: (Util.size.width - 100) / 2
    },

    loadingTitle: {
        marginTop: 10,
        fontSize: 14,
        color: 'white'
    }
})