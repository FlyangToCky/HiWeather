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
import AMapLocation from 'react-native-amap-location';
import Url from '../commons/interfaces';
import MainMiddleOne from '../components/Today/MainMiddleOne';
import MainBottom from '../components/Today/MainBottom'
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
        console.log("here");
        Util.get(Url.getWeatherInfo,(data)=>{
            console.log(data);
        },(err)=>{
            console.log(err.message);
        })
        /*this.listener = AMapLocation.addEventListener((data) => alert(data.errorInfo));
        AMapLocation.startLocation({
            accuracy: 'DeviceSensors',
            killProcess: true,
            needDetail: true,
            mockEnable: true,
            onceLocation: true
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
                <MainMiddleOne/>
                <MainMiddleOne/>
                <MainBottom/>
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
