import LoginHeader from '@/presentation/components/login-header/login-header'
import Spinner from '@/presentation/components/spinner/spinner'
import Footer from '@/presentation/components/footer/footer'
import Styles from './login-styles.scss'

import React from 'react'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <form action="" className={Styles.form}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input id="email" type="email" placeholder="Digite seu e-mail" />
          <span className={Styles.status}>🔴</span>
        </div>
        <div className={Styles.inputWrap}>
          <input id="password" type="password" placeholder="Digite sua senha" />
          <span className={Styles.status}>🔴</span>
        </div>
        <button type="submit" className={Styles.subimit}>Entrar</button>
        <span className={Styles.link}> Criar conta</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Erro</span>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default Login
