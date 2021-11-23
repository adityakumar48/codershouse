import React from 'react'
import styles from './Home.module.css'
import { useHistory } from 'react-router-dom'
import Card from '../../components/shared/Card/Card'
import Button from '../../components/shared/Button/Button'

const Home = () => {
    const history = useHistory();

    const signInLinkStyle = {
        color: '#0077FF',
        fontWeight: 'bold',
        textDecoration: 'none',
        marginLeft: '10px'
    }

    function startRegister() {
        history.push('/authenticate')
    }
    return (
        <div className={styles.cardWrapper}>
            <Card title='Welcome To Codershouse' icon='logo.png'>
                <p className={styles.text}>we're working hard to get Coderhouse ready for everyone! while we wrap up the finishing touches, we're adding people gradually to make sure nothing breaks </p>
                <div>
                    <Button onClick={startRegister} text="Let's Go" icon='arrow-forward.png' />
                </div>
                <div className={styles.signinWrapper}>
                    <span className={styles.hasInvite}>Have an Invite text?</span>
                </div>

            </Card>

        </div>
    )
}

export default Home
