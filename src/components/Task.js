import React, {Component} from "react"
import {StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native"
import { Icon } from "react-native-vector-icons/FontAwesome6"
import moment from "moment"
import 'moment/locale/pt-br'

export default props => {
    const date = props.done_at != null ? props.done_at : props.estimate_at
    const formated_date = moment(date).format('ddd, D [de] MMM')
    return(
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => alert("Olá")}>
                <View style={styles.checkContainer}>
                    {get_Check_View(props.done_at)}
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Text style={styles.desc}>{props.description}</Text>
                <Text style={styles.desc}>{formated_date}</Text>
            </View>
        </View>
    )
}

function get_Check_View(done_at){
    if(done_at != null){
        return(
            <View style={styles.done}>
                <Icon name="check" size={20} color="#FFF"></Icon>
            </View>
        )
    }
    else{
        return(
            <View style={styles.pending}>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10
    },
    desc:{
        fontFamly: 'Arial',
        fontSize: 20
    },
    date:{
        fontFamly: 'Arial'
    },
    checkContainer:{
        width: "20%",
        alighItems: "center",
        justifyContent: "center"
    },
    done:{
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        backgroundColor: "#4D7031",
        alignItems: "center",
        justifyContent: "center" 
    },
    pending:{
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: "#555555"
    }
})