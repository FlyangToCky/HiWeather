import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

//import TabBarView from '../containers/TabBarView';
import Main from './Main'
import Util from '../commons/utils';

export default class Launcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        /*InteractionManager.runAfterInteractions(() => {
         const {dispatch} = this.props;
         dispatch(home(tag, offest, limit, isLoadMore, isRefreshing, isLoading));
         })*/
        setTimeout(()=>{
            //页面切换到Main
            this.props.navigator.replace({ //拿到路由，并替换
                component:Main
            });
        },2000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.imgStyle} source={require('../assets/imgs/launcher.jpg')}/>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    imgStyle:{
        width:Util.size.width,
        height:Util.size.height
    }
});
