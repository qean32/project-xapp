import React from 'react'
import { Shadow } from '../ui'

interface Props {
    children: React.ReactNode
    fn: () => void
}


export const ModalSET: React.FC<Props> = ({ children, fn }: Props) => {
    return (
        <div>
            <div onClick={fn}>
                <Shadow />
            </div>

            <div className="modal">
                {children}
            </div>
        </div>
    )
}
