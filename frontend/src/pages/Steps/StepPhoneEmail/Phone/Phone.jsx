import React, { useState } from 'react'
import Button from '../../../../components/shared/Button/Button';
import Card from '../../../../components/shared/Card/Card';
import TextInput from '../../../../components/shared/TextInput/TextInput';
import { sendOtp } from '../../../../http/index';
import styles from "../StepPhoneEmail.module.css";
import { useDispatch } from 'react-redux'
import { setOtp } from '../../../../store/authSlice'
const Phone = ({ onClick }) => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const dispatch = useDispatch()

    async function submit() {
        if (!phoneNumber) return;
        const { data } = await sendOtp({ phone: phoneNumber });
        console.log(data);
        dispatch(setOtp({ phone: data.phone, hash: data.hash }))
        onClick();
    }

    return (
        <Card title='Enter Your Phone Number' icon='phone.png'>
            <TextInput value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            <div>
                <div className={styles.actionButtonWrap}>
                    <Button text="Next" onClick={submit} icon='arrow-forward.png' />
                </div>
                <p className={styles.bottomParagraph}>By entering your Number, you're agreeing to oue terms of Service and Privacy Policy. Thanks!</p>
            </div>

        </Card>
    )
}

export default Phone
