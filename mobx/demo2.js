/**
 * Created by lichen on 2017/2/9.
 */
'use strict';

import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native';

import { observer } from 'mobx-react/native';
import { observable } from 'mobx';

// 被观察者, 观察 counter 变量
const storer = observable({
    counter: 0
});

//---------------------------------
//  ES6 写法: Arrow Function
//---------------------------------

storer.plus =  () => {
    storer.counter ++;
};

storer.minus = () => {
    storer.counter --;
};

@observer
class Counter extends Component {

    render () {
        return (
            <View style={styles.container}>

                {/*加一*/}
                <TouchableHighlight
                    onPress = {() => {this.props.store.plus()}}>
                    <Text>Add</Text>
                </TouchableHighlight>

                {/* 显示处理结果 */}
                <Text style={styles.resultTxtStyle}>
                    {this.props.store.counter}
                </Text>

                {/*减一*/}
                <TouchableHighlight
                    onPress = {() => {storer.minus()}}>
                    <Text>Minus</Text>
                </TouchableHighlight>

            </View>
        );
    }
}

export default class ReactionsComponent extends Component {
    render () {
        return (
            <View style = {{flex: 1, marginTop: 64}}>

                <Counter store = {storer} />

            </View>
        );
    }
}

/* 样式定义 */
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    resultTxtStyle: {
        fontSize: 22,
        color: 'red'
    }
});
