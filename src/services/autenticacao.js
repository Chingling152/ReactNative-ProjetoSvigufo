import AsyncStorage from '@react-native-community/async-storage'
import jwt from 'jwt-decode';

export const Token = async () =>  await AsyncStorage.getItem('SvigufoTokenUsuario');

export const TokenValido = async () =>
    Token().then(token => {

        if (token !== null) {
            var decode = jwt(token);
            
            if (Date.now() <= decode.exp * 1000) {
                return true;
            }
        }
        return false
    }
);