import React, {Component} from "react"
import {StyleSheets, View, Text} from "react-native"

export default class TaskList extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Lista de tarefas</Text>
            </View>
        )
    }
}

const styles =StyleSheets.create({
    container:{
        flex: 1
    }
})