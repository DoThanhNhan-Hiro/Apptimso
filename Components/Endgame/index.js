import { View, Text, Modal, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const index = ({visible, onClose,score}) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Bạn chơi thua rồi</Text>
                        <View style={styles.modalBoxScore}>
                            <Text style={styles.modalBoxScoreText}>Điểm số:</Text>
                            <Text style={styles.modalBoxScoreNumber}>{score}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={onClose}>
                            <Text style={styles.modalButtonText}>Chơi lại đi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
export default index