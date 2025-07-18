import React from 'react'
import { cn, saveUser } from '../../lib/function'
import { InputEmail, InputPassword, Button } from '../ui'
import { TypeUseBoolen } from '../../lib/castom-hook'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthFormDto, authSchema } from '../../model/schema'
import { useNavigate } from 'react-router-dom'
import { authService } from '../../service/auth-service'

interface Props {
    className?: string
    on: TypeUseBoolen
}

export const AuthForm: React.FC<Props> = ({ className, on }: Props) => {
    const form = useForm<AuthFormDto>({
        mode: 'onChange',
        resolver: zodResolver(authSchema)
    })
    const navigate = useNavigate()
    const [error, setError] = React.useState<string>()

    const onSubmit: SubmitHandler<AuthFormDto> = (data) => {
        authService.login(data)
            // @ts-ignore
            .then(data => saveUser(data))
            .then(() => navigate('/'))
            .catch((error) => setError(error.response.data.message))
    }

    return (
        <FormProvider {...form} >
            <form className={cn('windowreg relative', className)} onSubmit={form.handleSubmit(onSubmit)} >
                {error && <p className='absolute z-10 bottom-10'>{error}</p>}

                <InputEmail className="w-80" title="почта" name='email' />
                <InputPassword className="w-80" title="пароль" name='password' />
                <div className="flex flex-col gap-4 items-start" style={{ transform: 'translateY(-10px)' }} >
                    <div className='regwarning'>
                        <p> забыли пароль? --анлак</p>
                        <p onClick={on.off}> нет аккаунта? --регистрация</p>
                    </div>
                    <Button place="вход" function_={form.handleSubmit(onSubmit)} />
                </div>

            </form>
        </FormProvider>
    )
}
