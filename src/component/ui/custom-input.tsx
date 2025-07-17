import React from 'react'
import { useBoolean } from '../../lib/castom-hook'
import { cn, generateId, renameFile } from '../../lib/function'
import { useFormContext } from 'react-hook-form'
import { acceptImg, lockImg, unlockImg, uploadImg } from '../import'

export const InputText = ({ title, max, validate = true, className, name, classNameInput }: {
    title: string
    max?: number
    name: string
    validate?: boolean,
    className?: string
    classNameInput?: string
}) => {
    const { register, watch, formState: { errors } } = useFormContext()
    const textError = errors[name]?.message as string;
    const value = watch(name)
    const color = useBoolean(false)

    const check = () => {
        value != '' ? color.on() : color.off()
    }

    const id = generateId().toString()
    return (
        <div className={cn('w-100 relative', className)} >
            <label htmlFor={id} className='fill' >
                <p className={color.bool ? 'opacity-60 transform-label' : 'opacity-80'}>{title}</p>
            </label>

            <input type='text' id={id} {...register(name)} onFocus={() => color.on()} onBlur={check} className={classNameInput} />

            <p className={cn('inputwarning text-nowrap', (!textError && 'opacity-0'))}>{validate && textError && textError}</p>

            {max &&
                <div className='absolute right-5 bottom-3'>
                    <p className={cn('inputwarning opacity-100 count-input', (!(value?.length > 40) ? 'whitesmoke' : ''))}>{value?.length}/{max}</p>
                </div>
            }
        </div>
    );
}


export const InputPassword = ({ title, className, name }: {
    title: string
    className?: string
    name: string
}) => {
    const { register, watch, formState: { errors } } = useFormContext()
    const textError = errors[name]?.message as string;
    const value = watch(name)
    const view = useBoolean(false)
    const color = useBoolean(false)

    const check = () => {
        value != '' ? color.on() : color.off()
    }

    const id = generateId().toString()
    return (
        <div className={cn('w-100 relative', className)}>

            <img src={view.bool ? unlockImg : lockImg} style={{ zIndex: '10' }} alt='' onClick={() => view.swap()} className='lockpass cursor-pointer' />

            <label htmlFor={id} className='fill' >
                <p className={color.bool ? 'opacity-60 transform-label' : 'opacity-80'}>{title}</p>
            </label>

            <input type={view.bool ? 'text' : 'password'} id={id} {...register(name)}
                onFocus={() => color.on()} onBlur={check} />
            <p className={cn('inputwarning text-nowrap', (!textError && 'opacity-0'))}> {textError && textError} </p>
        </div>
    );
}

export const Checkbox = ({ title, fn, value, className }: {
    value: boolean
    fn: Function
    title: string
    className?: string
}) => {
    return (
        <div onClick={() => fn()} className={cn('cursor-pointer relative fit-content', className)} >
            <p>{title}</p>
            <input type='checkbox' style={{ top: '-2px' }} className={cn('transition03 absolute -right-6', (value ? 'opacity-0' : ''))} />
            <img src={acceptImg}
                alt=''
                style={{ top: '4px' }} className={cn('transition03 absolute -right-7', (!value && 'opacity-0'))}
            />
        </div>
    );
}


export const InputEmail = ({ title, className, name }: {
    title: string
    className?: string
    name: string
}) => {
    const { register, watch, formState: { errors } } = useFormContext()
    const textError = errors[name]?.message as string;
    const value = watch(name)
    const color = useBoolean(false)

    const check = () => {
        if (value != '') { color.on() } else { color.off() }
    }

    const id = generateId().toString()
    return (
        <div className={cn('w-100 relative', className)} >

            <label htmlFor={id} className='fill' >
                <p className={color.bool ? 'opacity-60 transform-label' : 'opacity-80'}>{title}</p>
            </label>

            <input type='text' {...register(name)} onFocus={() => color.on()} onBlur={check} />
            <p className={cn('inputwarning', !textError && 'opacity-0')}>{textError}</p>

            <div className='absolute right-5 bottom-3'>
                <p className={cn('inputwarning opacity-100 count-input', (!(value?.length > 40) ? 'whitesmoke' : ''))}>{value?.length}/40</p>
            </div>
        </div>
    );
}


export const InputFile = ({ title = 'изображение', setValue, className }: {
    title?: string
    setValue: Function
    className?: string
}) => {
    const id = generateId().toString()
    const [src, setSrc] = React.useState<any>([]);
    const urls = src.map((file: any) => URL.createObjectURL(file));

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        if (!e.target.files[0]) return

        setSrc([e.target.files[0]])
        setValue(renameFile(e))
    }
    return (
        <div className={cn('w-100 relative', className)}>
            <input accept='image/png, image/jpeg, image/svg, image/jpg, image/webp' type='file' id={id} style={{ display: 'none' }} onChange={changeHandler} />

            <label htmlFor={id} className='flex items-start flex-col gap-3' style={{ pointerEvents: 'auto' }}>
                <div className='music-ava flex justify-center items-center' style={{ backgroundImage: `url(${urls[0]})`, width: '70px', height: '50px' }}>
                    {src.length > 0 ? <></> : <img src={uploadImg} width={'27px'} />}
                </div>
                <p>{title}</p>
            </label>
        </div>
    );
}