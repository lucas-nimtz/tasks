import React, {Component} from "react"
import {StyleSheet, View, Text } from "react-native"

import moment from "moment"
import 'moment/locale/pt-br'

export default props =>{
    return(
        <View style={styles.container}>
            <Text style={styles.desc}>Descrição da tarefa</Text>
            <Text style={styles.desc}>Data estimada conclusão</Text>
            <Text style={styles.desc}>Data conclusão</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
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
    }
})