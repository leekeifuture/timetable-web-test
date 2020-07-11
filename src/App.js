import * as axios from 'axios'
import React from 'react'
import TelegramLoginButton from 'telegram-login-button'
import styles from './App.module.css'

const App = () => {
    const signUpTelegramAccount = (telegramAccount) => {
        axios.post('http://localhost:8080/api/v1/sign/up/telegram', {
            id: telegramAccount.id,
            firstName: telegramAccount.first_name,
            username: telegramAccount.username,
            photoUrl: telegramAccount.photo_url,
            authDate: telegramAccount.auth_date,
            hash: telegramAccount.hash
        }, {withCredentials: true}).then(response => {
            console.log(response)
        })
    }

    return (
        <div className={styles.app}>
            <header className={styles.appHeader}>
                <TelegramLoginButton
                    botName="ttschedule_bot"
                    dataOnauth={telegramAccount => signUpTelegramAccount(telegramAccount)}
                    usePic
                />
            </header>
        </div>
    )
}

export default App
