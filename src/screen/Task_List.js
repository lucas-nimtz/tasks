import React, {Component} from "react"
import {StyleSheet, View, Text, ImageBackground, FlatList } from "react-native"

import moment from "moment"
import 'moment/locale/pt-br'

import today_Image from "../../assets/imgs/today.jpg"

import Task from "../components/Task"

export default class TaskList extends Component{

    state = {
        tasks : [{
            id: Math.random,
            description: "Comer galinhada",
            estimate_at: new Date(),
            done_at: new Date()
        },
        {
            id: Math.random,
            description: "Beber água",
            estimate_at: new Date(),
            done_at: new Date()
        },
        {
            id: Math.random,
            description: "Jogar videogames",
            estimate_at: new Date(),
            done_at: new Date()
        }]
    }

    render(){
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return(
            <View style={styles.container}>
                <ImageBackground source={today_Image} style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subTitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <FlatList
                        data = {this.state.tasks}
                        renderItem={({item}) => <Task{...item}/>}
                    />
                    
                    {/*<Task
                        description="Estudar para prova de história"
                        estimate_at={new Date()}
                        done_at={new Date()}
                    />
                    <Task
                        description="Jogar videogame"
                        estimate_at={new Date()}
                        done_at={null}
                    />
                    <Task
                        description="Comer galinhada"
                        estimate_at={new Date()}
                        done_at={null}
                    />*/}

                </View>
            </View>
        )
    }
}

const styles =StyleSheet.create({
    container:{
        flex: 1
    }, 
    background:{
        flex: 3
    }, 
    taskList:{
        flex: 7
    },
    titleBar:{
        flex: 1,
        justifyContent: 'flex-end'
    },
    title:{
        fontFamly: 'Arial',
        fontSize: 50,
        color: '#FFF',
        marginLeft: 20,
        marginBotton: 20
    },
    subTitle:{
        fontFamly: 'Arial',
        fontSize: 20,
        color: '#FFF',
        marginLeft: 20,
        marginBotton: 30
    }
})