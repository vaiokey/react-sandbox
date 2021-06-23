import { ReactElement, ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  isClicked: boolean
  onClick: () => void
}

export function Button({
  children,
  isClicked,
  onClick,
}: ButtonProps): ReactElement {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: isClicked ? 'lightblue' : 'lightgreen' }}
    >
      {children}
    </button>
  )
}
