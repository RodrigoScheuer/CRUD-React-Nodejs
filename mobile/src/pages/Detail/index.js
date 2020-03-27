import React from 'react';
import styles from './styles';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';

export default function Detail() {
    const navigation = useNavigation();

    const message = 'Olá ONG, estou entrando em contato pois gostaria de ajudar no caso "Cachorro atropelado" com o valor de R$120,00';

    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Herói do caso: Cachorro atropelado',
            recipients: ['rodrigo.scheuer@hotmail.com'],
            body: message
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=+5551981903699&text=${message}`);
    }

    return (
        <View style={styles.container} >
            <View style={styles.header}>

                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>
                    ONG:
                    <Text style={styles.incidentValue}> APAE </Text>
                </Text>

                <Text style={styles.incidentProperty}> Caso: </Text>
                <Text style={styles.incidentValue}>
                    Cachorro atropelado acidentalmente no bairro centro, necessário fazer cirurgia.
                </Text>

                <Text style={styles.incidentProperty}>
                    Valor:
                    <Text style={styles.incidentValue}> R$ 120,00 </Text>
                </Text>
            </View>

            <View style={styles.contactBox}>
                <View style={styles.contactBoxText}>
                    <Text style={styles.heroTitle}>Salve o dia! </Text>
                    <Text style={styles.heroTitle}> Seja o herói desse caso.</Text>

                    <Text style={styles.heroDescription}> Entre em contato </Text>
                </View>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}> Whatsapp </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}> E-mail </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}