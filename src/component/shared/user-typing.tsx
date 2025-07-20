import React from 'react'
import { useTyping } from '../../lib/castom-hook';

interface Props {
}


export const UserTyping: React.FC<Props> = ({ }: Props) => {
    const { valueTyping } = useTyping();

    return (
        <>
            {valueTyping && <p className="fixed top-3 py-2">Собеседник печатает...</p>}
        </>
    )
}
