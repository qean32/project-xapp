import React from 'react'
import { cn, setToken } from '../../lib/function'
import { InputEmail, InputText, InputPassword, Button } from '../ui'
import { TypeUseBoolen } from '../../lib/castom-hook'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { RegistrationFormDto, registrationSchema } from '../../model/schema'
import { useNavigate } from 'react-router-dom'
import { authService } from '../../service/auth-service'

interface Props {
    className?: string
    on: TypeUseBoolen
}


export const RegistrationForm: React.FC<Props> = ({ className, on }: Props) => {
    const form = useForm<RegistrationFormDto>({
        resolver: zodResolver(registrationSchema),
        mode: 'onChange'
    })
    const [error, setError] = React.useState<string>()
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<RegistrationFormDto> = (data) => {
        authService.registration(data)
            // @ts-ignore
            .then(data => setToken(data))
            .then(() => navigate('/'))
            .catch((error) => setError(error.response.data.message))
    }


    return (
        <FormProvider {...form}>
            <form className={cn('windowreg', className)} onSubmit={form.handleSubmit(onSubmit)}>
                {error && <p className='absolute z-10 -bottom-1'>{error}</p>}

                <InputText title="имя" max={20} name='name' className="w-80" />
                <InputEmail title="почта" name='email' className="w-80" />
                <InputPassword title="пароль" name='password' className="w-80" />
                <div className="regwarning flex flex-col gap-4">
                    <p onClick={on.on}> есть аккаунт? --войти</p>
                    <Button place="регистрация" function_={form.handleSubmit(onSubmit)} />
                </div>
            </form>
        </FormProvider>
    )
}
