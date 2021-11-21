import React, { useState } from 'react'
import Button from '../../../components/shared/Button/Button';
import Card from '../../../components/shared/Card/Card';
import styles from "./StepName.module.css";
import TextInput from '../../../components/shared/TextInput/TextInput';
import { useDispatch, useSelector } from 'react-redux'
import { setName } from '../../../store/activateSlice'

const StepName = ({ onClick }) => {
    const { name } = useSelector(state => state.activate)
    const dispatch = useDispatch();

    const [fullname, setFullname] = useState(name)
    function nextStep() {
        if (!fullname) {
            return;
        }
        dispatch(setName(fullname))
        onClick()
    }
    return (
        <>
            <Card title="What's Your Full Name" icon='goggle-emoji.png'>
                <TextInput value={fullname} onChange={(e) => setFullname(e.target.value)} />
                <div>
                    <p className={styles.paragraph}>People use real names at codershouse :) </p>
                    <div className={styles.actionButtonWrap}>
                        <Button text="Next" onClick={nextStep} icon='arrow-forward.png' />
                    </div>
                </div>

            </Card>
        </>
    )
}

export default StepName
