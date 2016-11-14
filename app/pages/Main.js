import React, {
    Component
} from 'react';
import {
    StyleSheet
} from 'react-native';
import TabBarView from '../commons/TabBarView';
import ControlPanel from './ControlPanel';
import Drawer from 'react-native-drawer';

export default class Main extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

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
                content={<ControlPanel closeDrawer={this.closeControlPanel}/>}
                tapToClose={true}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                closedDrawerOffset={-3}
                styles={drawerStyles}
                tweenHandler={(ratio) => ({
                    main: { opacity:(2-ratio)/2 }
                })}
            >
                <TabBarView leftIconAction={this.openControlPanel}/>
            </Drawer>
        )
    }
}
const drawerStyles = {
    drawer: {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 3}
}