import GetLocation from 'react-native-get-location';

export const getCurrentLocation = async () => {
    const location = new Promise(async (resolve, reject) => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        }).then(location => {
            resolve(location);
        }).catch(error => {
            reject(error)
        })
    });
    return location;
}