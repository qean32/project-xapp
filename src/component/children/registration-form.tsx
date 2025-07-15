import React from 'react'
import { cn } from '../../lib/function'
import { InputEmail, InputText, InputPassword, Button } from '../ui'
import { TypeUseBoolen } from '../../lib/castom-hook'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { RegistrationFormDto, registrationSchema } from '../../model/schema'

interface Props {
    className?: string
    on: TypeUseBoolen
}


export const RegistrationForm: React.FC<Props> = ({ className, on }: Props) => {
    const form = useForm<RegistrationFormDto>({
        resolver: zodResolver(registrationSchema),
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<RegistrationFormDto> = (data) => {
        console.log(data)
    }


    return (
        <FormProvider {...form}>
            <form className={cn('windowreg', className)} onSubmit={form.handleSubmit(onSubmit)}>
                <InputText title="имя" max={20} name='name' className="w-80" />
                <InputEmail title="почта" name='email' className="w-80" />
                <InputPassword title="пароль" name='password' className="w-80" />
                <div className="regwarning">
                    <p onClick={on.on}> есть аккаунт? --войти</p>
                </div>
                <Button place="регистрация" function_={form.handleSubmit(onSubmit)} />
            </form>
        </FormProvider>
    )
}
