import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Util from '../commons/utils';

export default class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Icon color='#900' size={30} name='book'/>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        width:Util.size.width*0.8,
        height:Util.size.height,
        backgroundColor:'black',
        opacity:0.6
    }
});
