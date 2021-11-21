import React, { useState } from 'react'
import Button from '../../../../components/shared/Button/Button';
import Card from '../../../../components/shared/Card/Card';
import TextInput from '../../../../components/shared/TextInput/TextInput';
import styles from "../StepPhoneEmail.module.css";

const Email = ({ onClick }) => {
    const [email, setEmail] = useState('')
    return (
        <Card title='Enter Your Email id' icon='email-emoji.png'>
            <TextInput value={email} onChange={(e) => setEmail(e.target.value)} />
            <div>
                <div className={styles.actionButtonWrap}>
                    <Button text="Next" onClick={onClick} icon='arrow-forward.png' />
                </div>
                <p className={styles.bottomParagraph}>By entering your Email, you're agreeing to oue terms of Service and Privacy Policy. Thanks!</p>
            </div>
        </Card>
    )
}

export default Email
