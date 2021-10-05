import Spinner from '@/presentation/components/spinner/spinner'
import Styles from './form-status-styles.scss'

import React from 'react'

const FormStatus: React.FC = () => {
  return (
    <div className={Styles.errorWrap}>
      <Spinner className={Styles.spinner} />
      <span className={Styles.error}>Erro</span>
    </div>
  )
}

export default FormStatus
