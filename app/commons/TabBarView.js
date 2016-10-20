import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import TodayContainer from '../containers/TodayContainer';
import CityContainer from '../containers/CityContainer';

const tabBarItems = [
    { title: '今日', component: TodayContainer,icon: () => <Image style={{ width: 30, height: 30 }} source={require('../assets/imgs/today.png') }/>,iconSel: () => <Image style={{ width: 30, height: 30 }} source={require('../assets/imgs/today_sel.png') }/>,},
    { title: '城市', component: CityContainer,icon: () => <Image style={{ width: 30, height: 30 }} source={require('../assets/imgs/city.png') }/>,iconSel: () => <Image style={{ width: 30, height: 30 }} source={require('../assets/imgs/city_sel.png') }/>,}
]

export default class TabBarView extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab:tabBarItems[0].title
        };
    }
    render() {
        return (
            <TabNavigator>
                {
                    tabBarItems.map((controller, i) => {
                        let Component = controller.component;
                        return (
                            <TabNavigator.Item
                                key= {i}
                                selected={this.state.selectedTab === controller.title}
                                title={controller.title}
                                renderIcon={controller.icon}
                                renderSelectedIcon={controller.iconSel}
                                onPress={() => this.setState({ selectedTab: controller.title }) }>
                                <Component navigator = {this.props.navigator} {...this.props}/>
                            </TabNavigator.Item>
                        )
                    })
                }
            </TabNavigator >
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});