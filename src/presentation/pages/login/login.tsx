import {
  LoginHeader,
  Input,
  FormStatus,
  Footer
} from '@/presentation/components/'
import Context from '@/presentation/contexts/form/form-context'
import Styles from './login-styles.scss'

import React, { useState } from 'react'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={state}>
        <form action="" className={Styles.form}>
          <h2>Login</h2>
          <Input id="email" type="email" placeholder="Digite seu e-mail" />
          <Input id="password" type="password" placeholder="Digite sua senha" />
          <button type="submit" className={Styles.subimit}>Entrar</button>
          <span className={Styles.link}> Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
