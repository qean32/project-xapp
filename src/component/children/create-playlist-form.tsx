import React from 'react'
import { Button, InputText } from '../ui'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreatePlayListForm, createPlayListSchema } from '../../model/schema'

interface Props {
}


export const CreatePlayListFormComponent: React.FC<Props> = ({ }: Props) => {
    const form = useForm<CreatePlayListForm>({
        mode: 'onChange',
        resolver: zodResolver(createPlayListSchema)
    })

    const onSubmit: SubmitHandler<CreatePlayListForm> = (data) => {
        console.log(data)
    }

    return (
        <FormProvider {...form} >
            <form className='flex flex-col w-[90%] px-5 gap-3 create-playlist-anim windowreg w-100' onSubmit={form.handleSubmit(onSubmit)} >
                <InputText name='name' title='название' classNameInput='input-padding' />
                <Button place='создать' function_={form.handleSubmit(onSubmit)} />
            </form>
        </FormProvider >
    )
}
