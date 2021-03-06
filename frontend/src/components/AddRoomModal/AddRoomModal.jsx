import React, { useState } from 'react'
import styles from './AddRoomModal.module.css'
import TextInput from '../shared/TextInput/TextInput'

const AddRoomModal = ({ onClose }) => {
    const [roomType, setRoomType] = useState('open');

    return (
        <div className={styles.modalMask}>
            <div className={styles.modalBody}>
                <button className={styles.closeButton} onClick={onClose} ><img src="/images/close.png" alt="close" /></button>
                <div className={styles.modalHeader}>
                    <h3 className={styles.heading}>Enter the topic to be discussed</h3>
                    <TextInput fullwidth='true' />
                    <h2 className={styles.subheading}>Room Types</h2>
                    <div className={styles.roomType}>
                        <div onClick={() => setRoomType('open')} className={`${styles.typeBox} ${roomType === 'open' ? styles.active : ''}`}>
                            <img src="/images/globe.png" alt="globe" />
                            <span>Open</span>
                        </div>
                        <div onClick={() => setRoomType('social')} className={`${styles.typeBox} ${roomType === 'social' ? styles.active : ''}`}>
                            <img src="/images/social.png" alt="social" />
                            <span>Social</span>
                        </div>
                        <div onClick={() => setRoomType('private')} className={`${styles.typeBox} ${roomType === 'private' ? styles.active : ''}`}>
                            <img src="/images/lock.png" alt="lock" />
                            <span>Private</span>
                        </div>
                    </div>
                </div>
                <div className={styles.modalFooter}>
                    <h2 >Start a room, open to everyone</h2>
                    <button className={styles.footerButton}>
                        <img src="/images/celebration.png" alt="celebrate" />
                        <span>Let's go</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddRoomModal
