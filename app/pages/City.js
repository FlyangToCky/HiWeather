import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import Util from '../commons/utils';
import HeaderBar from '../commons/HeaderBar';

export default class City extends Component {
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
