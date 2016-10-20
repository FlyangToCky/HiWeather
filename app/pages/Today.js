import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    InteractionManager
} from 'react-native';
import Util from '../commons/utils';
import HeaderBar from '../commons/HeaderBar';
import positoin from  '../actions/PositionAction';
//import AMapLocation from 'react-native-amap-location';

let isLocated = false;
let isLoading=true;

export default class Today extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleName: "上海",
            leftIcon: "bars",
            leftIconColor: "#8f4b2e"
        };
    }

    componentDidMount() {
        /*this.listener = AMapLocation.addEventListener((data) => console.log('data', data));
        AMapLocation.startLocation({
            accuracy: 'HighAccuracy',
            killProcess: true,
            needDetail: true,
        });*/
    }

    componentWillUnmount() {
        /*AMapLocation.stopLocation();
        this.listener.remove();*/
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderBar
                    leftIconColor={this.state.leftIconColor}
                    titleView={this.state.titleName}
                    leftIcon={this.state.leftIcon}
                    leftIconAction={this.props.leftIconAction}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imgStyle: {
        width: Util.size.width,
        height: Util.size.height
    }
});
