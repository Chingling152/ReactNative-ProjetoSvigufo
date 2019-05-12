import {StyleSheet} from 'react-native'

export const DefaultStyleSheet = StyleSheet.create(
    {
        tabBarIcon:{
            width:25,
            height:25,
            tintColor:'white'
        },

        mainContent:{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center"
        }
    }
);

export const DefaultFormStyles = StyleSheet.create(
    {
        submitButton:{
            height: 38,
            shadowColor: "rgba(0,0,0, 0.4)", // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 3, // Android
            borderRadius: 4,
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10
        },
        lightSubmitButton:{
            borderColor: "#FFFFFF",
            backgroundColor: "#FFFFFF"
        },
        submitButtonText:{
            fontSize: 14,
            fontFamily: "OpenSans-Light",
            color: "#B727FF",
            letterSpacing: 4
        },
        textInput: {
            color:"#FFFFFF",
            fontSize:14,
            width: 240,
            marginBottom: 10
        }
    }
);


export const DefaultFeedbackStyles = StyleSheet.create(
    {
        errorMessage:{
            color:"red",
            fontSize:14,
            marginVertical: 10
        },
        warnMessage:{

        },
        sucessMessage:{
            
        }
    }
);

export const DefaultTextStyles = StyleSheet.create(
    {
        enfaseText:{

        },
        destaqueText:{

        },
        linkText:{

        }
    }
);