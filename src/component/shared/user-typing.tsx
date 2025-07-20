import React from 'react'

interface Props {
    valueTyping: boolean
}


export const UserTyping: React.FC<Props> = ({ valueTyping }: Props) => {

    return (
        <>
            {valueTyping && <p className="fixed top-3 py-2">Собеседник печатает...</p>}
        </>
    )
}