import React from 'react'
import { cn } from '../../lib/function'
import { InputEmail, InputText, InputPassword, Button } from '../ui'
import { TypeUseBoolen } from '../../lib/castom-hook'

interface Props {
    className?: string
    on: TypeUseBoolen
}


export const RegistrationForm: React.FC<Props> = ({ className, on }: Props) => {
    return (
        <form className={cn('windowreg', className)}>
            <InputText className="w-80" title="имя" max={20} />
            <InputEmail className="w-80" title="почта" name='registration-email' />
            <InputPassword className="w-80" title="пароль" />
            <div className="regwarning">
                <p onClick={on.on}> есть аккаунт? --войти</p>
            </div>
            <Button title="регистрация" function_={() => { }} />
        </form>
    )
}
