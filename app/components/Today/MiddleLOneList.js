import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import Util from '../../commons/utils';

export default class MiddleLOneList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.Wrapper}>
                {/*Left*/}
                <View style={styles.Left}></View>
                {/*Right*/}
                <View style={styles.Right}></View>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    Wrapper:{
      height:80
    },
    Left:{
        flex:1,
        height:80,
    },
    Right:{
        flex:4,
        height:80
    }
});
