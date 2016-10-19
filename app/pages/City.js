import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import Drawer from 'react-native-drawer';
import Util from '../commons/utils';
import HeaderBar from '../commons/HeaderBar'
import ControlPanel from './ControlPanel'

export default class City extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            canShowLeftPanel: false
        };
    }

    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };

    render() {
        return (
            <Drawer
                type="displace"
                ref={(ref) => this._drawer = ref}
                content={<ControlPanel />}
                tapToClose={true}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                closedDrawerOffset={-3}
                styles={drawerStyles}
                tweenHandler={(ratio) => ({
                    main: { opacity:(2-ratio)/2 }
                })}
            >
                <Content leftIconAction={this.openControlPanel}/>
            </Drawer>
        )
    }

}

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleName: "城市",
            leftIcon: "pencil",
            leftIconColor: "#8f4b2e"
        };
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

const drawerStyles = {
    drawer: {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 3},
}