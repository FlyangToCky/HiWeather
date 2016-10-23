import * as types from './actionTypes';
import Util from '../commons/utils';
//import AMapLocation from 'react-native-amap-location';
export let position = (isLocated, isLoading) => {
    return dispatch => {
       /* console.log("here");
        Util.get(Url.getChineseCities,(data)=>{
            console.log("here");
            console.log(data);
        },(err)=>{
            console.log(err.message);
        })*/

        // 获取定位
        dispatch(getGeolocation(isLocated, isLoading));
        return Geolocation.getCurrentPosition(
            (position)=>{
                var lnglat = position.coords.longitude+","+position.coords.latitude;
                console.log(lnglat)
                dispatch(saveGeoloaction(lnglat))
        },(err)=>{
            dispatch(saveGeoloaction(""));
        });
    }

}

function encode_utf8(s) {
    return encodeURIComponent(s);
}

let getGeolocation = (isLocated,isLoading) => {
    return {
        type: types.FETCH_GEOLOCATION,
        isLocated: isLocated,
        isLoading:isLoading
    }
}

let saveGeoloaction = (geolocation) => {
    storage.save({
        key: 'geolocation',  //注意:请不要在key中使用_下划线符号!
        rawData: {
            geolocation:geolocation
        },
        // 如果设为null，则永不过期
        expires: null
    });
}
