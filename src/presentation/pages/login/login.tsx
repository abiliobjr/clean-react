import {
  LoginHeader,
  Input,
  FormStatus,
  Footer
} from '@/presentation/components/'

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
