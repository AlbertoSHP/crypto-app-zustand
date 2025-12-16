import { type PropsWithChildren } from 'react'

const ErrorMessage = ({children}: PropsWithChildren) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default ErrorMessage
