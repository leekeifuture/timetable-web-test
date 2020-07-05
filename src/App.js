import React from 'react'
import TelegramLoginButton from 'telegram-login-button'
import styles from './App.module.css'

function App() {
    return (
        <div className={styles.app}>
            <header className={styles.appHeader}>
                <TelegramLoginButton
                    botName="ttschedule_bot"
                    dataOnauth={user => console.log(user)}
                    usePic
                />
            </header>
        </div>
    )
}

export default App
