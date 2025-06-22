import React from 'react'
import { cn } from '../../lib/function'
import { InputEmail, InputPassword, Button } from '../ui'
import { TypeUseBoolen } from '../../lib/castom-hook'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { authSchema } from '../../model/schema'

type Iform = {
    email: string
    password: string
}

interface Props {
    className?: string
    on: TypeUseBoolen
}

export const AuthForm: React.FC<Props> = ({ className, on }: Props) => {
    const form = useForm<Iform>({
        mode: 'onChange',
        resolver: zodResolver(authSchema)
    })

    const onSubmit: SubmitHandler<Iform> = (data) => {
        console.log(data)
    }

    return (
        <FormProvider {...form} >
            <form className={cn('windowreg', className)} onSubmit={form.handleSubmit(onSubmit)} >
                <InputEmail className="w-80" title="почта" name='email' />
                <InputPassword className="w-80" title="пароль" />
                <div className="regwarning">
                    <p> забыли пароль? --анлак</p>
                    <p onClick={on.off}> нет аккаунта? --регистрация</p>
                </div>

                <Button title="вход" function_={form.handleSubmit(onSubmit)} />
            </form>
        </FormProvider>
    )
}
