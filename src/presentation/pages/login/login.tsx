import LoginHeader from '@/presentation/components/login-header/login-header'
import Input from '@/presentation/components/input/input'
import FormStatus from '@/presentation/components/form-status/form-status'
import Footer from '@/presentation/components/footer/footer'
import Styles from './login-styles.scss'

import React from 'react'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <form action="" className={Styles.form}>
        <h2>Login</h2>
        <Input id="email" type="email" placeholder="Digite seu e-mail" />
        <Input id="password" type="password" placeholder="Digite sua senha" />
        <button type="submit" className={Styles.subimit}>Entrar</button>
        <span className={Styles.link}> Criar conta</span>
        <FormStatus />
      </form>
      <Footer />
    </div>
  )
}

export default Login
