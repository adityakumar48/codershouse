import React, { useEffect, useState } from 'react'
import Button from '../../../components/shared/Button/Button';
import Card from '../../../components/shared/Card/Card';
import styles from "./StepAvatar.module.css";
import { useDispatch, useSelector } from 'react-redux'
import { setAvatar } from '../../../store/activateSlice';
import { activate } from '../../../http'
import { setAuth } from '../../../store/authSlice';
import Loader from '../../../components/shared/Loader/Loader';

const StepAvatar = ({ }) => {
    const dispatch = useDispatch();
    const { name, avatar } = useSelector(state => state.activate)
    const [image, setImage] = useState('/images/monkey-avatar.png')
    const [loading, setLoading] = useState(false)
    const [unMounted, setUnMounted] = useState(false)
    function captureImage(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            setImage(reader.result);
            dispatch(setAvatar(reader.result))
        }
    }
    async function submit() {
        if (!name || !avatar) return;
        setLoading(true)
        try {
            const { data } = await activate({ name, avatar })
            if (data.auth) {
                if (!unMounted) {
                    dispatch(setAuth(data))
                }
            }
        } catch (err) {
            console.log(err);

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        return () => {
            setUnMounted(true)
        }
    }, [])


    if (loading) return <Loader message="Activation in progress..." />
    return (
        <>
            <Card title={`Okay, ${name}`} icon='monkey-emoji.png'>
                <p className={styles.subheading}>How's this photo?</p>
                <div className={styles.avatarWrapper}>
                    <img className={styles.avatarImage} src={image} alt="avatar" />
                </div>
                <div>
                    <input onChange={captureImage} id="avatarInput" type="file" className={styles.avatarInput} />
                    <label className={styles.avatarlabel} htmlFor="avatarInput">Choose a different Photo</label>
                </div>
                <div className={styles.actionButtonWrap}>
                    <Button text="Next" onClick={submit} icon='arrow-forward.png' />
                </div>


            </Card>
        </>
    )
}

export default StepAvatar
