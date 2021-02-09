import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default function ResultCalculation(props) {
    const {capital, interest, months, total, errorMessage} = props;
    console.log(props);
    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>RESUMEN</Text>
                    <DataResult title={'Cantidad Solicitada:'} value={`S/ ${capital}`}/>
                    <DataResult title={'Interés %:'} value={`${interest} %`}/>
                    <DataResult title={'Plazos:'} value={`${months} meses`}/>
                    <DataResult title={'Pago mensual:'} value={`S/ ${total.monthlyFee}`}/>
                    <DataResult title={'Total a pagar:'} value={`S/ ${total.totalPayable}`}/>
                </View>
            )}
            <View>
                <Text
                    style={styles.error}
                >{errorMessage}</Text>
            </View>
        </View>
    )
}

function DataResult(props) {
    const {title, value} = props;
    return (
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 0,
        marginHorizontal: 40
    },
    boxResult: {
        padding: 30
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20
    },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20
    }
});
