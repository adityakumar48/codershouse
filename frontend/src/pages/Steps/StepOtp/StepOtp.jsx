import React, { useState } from 'react'
import Button from '../../../components/shared/Button/Button';
import Card from '../../../components/shared/Card/Card';
import styles from "./StepOtp.module.css";
import TextInput from '../../../components/shared/TextInput/TextInput';
import { verifyOtp } from '../../../http'
import { useSelector } from 'react-redux'
import { setAuth } from '../../../store/authSlice'
import { useDispatch } from 'react-redux'

const StepOtp = () => {
    const [otp, setOtp] = useState('')
    const dispatch = useDispatch()
    const { phone, hash } = useSelector((state) => state.auth.otp)
    async function submit() {
        if (!otp || !phone || !hash) return;
        try {
            const { data } = await verifyOtp({ otp, phone, hash })
            console.log(data);
            dispatch(setAuth(data))

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className={styles.cardWrapper}>
            <Card title='Enter the code we just texted you' icon='lock-emoji.png'>
                <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} />
                <div>
                    <div className={styles.actionButtonWrap}>
                        <Button text="Next" onClick={submit} icon='arrow-forward.png' />
                    </div>
                    <p className={styles.bottomParagraph}>By entering your Number, you're agreeing to oue terms of Service and Privacy Policy. Thanks!</p>
                </div>

            </Card>
        </div>
    )
}

export default StepOtp
