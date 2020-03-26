import React from 'react';
import styles from './styles';
import { View, Text, Image } from 'react-native';

import logoImg from '../../assets/logo.png';

export default function Incidents() {
    return (
        <View style={styles.container} >
            <View style={styles.header}>

                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}> 0 casos. </Text>
                </Text>
            </View>

            <Text style={styles.title}> Bem Vindo! </Text>
            <Text style={styles.description}>
                Escolha um caso abaixo e salve o dia.
            </Text>
        </View>
    )
}