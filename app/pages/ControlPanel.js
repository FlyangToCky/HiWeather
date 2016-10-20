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
                {/*Head*/}
                <View style={styles.headView}>
                    <View style={styles.headViewLeft}></View>
                    <View style={styles.headViewRight}></View>
                </View>
                {/*Middle List*/}
                {/*Bottom Top Menu*/}
                {/*Bottom Menu*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width:Util.size.width*0.8,
        height:Util.size.height,
        backgroundColor:'black',
        opacity:0.5
    },
    headView:{
        flexDirection:'row',
        flexWrap:'wrap',
        height:40,
        borderWidth:1,
        borderColor:'red'
    },
    headViewLeft:{
        flex:1,
        borderWidth:1,
        borderColor:'green'
    },
    headViewRight:{
        flex:6,
        borderWidth:1,
        borderColor:'black'
    }

});
