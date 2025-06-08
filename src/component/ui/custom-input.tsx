import React from 'react'
import { useBoolean } from '../../lib/castom-hook'
import { generateId, renameFile } from '../../lib/function'
import { validateEmail, validatePassword } from '../../lib/function/validate'
import { cn } from '../../export'

export const InputText = ({ title, value, setValue, max, validate = true, className }: {
    title: string
    value: string
    setValue: Function
    max: number
    validate?: boolean,
    className?: string
}) => {
    const valide = useBoolean(false)
    const color = useBoolean(false)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    React.useEffect(() => {
        if (value != '') check()
    }, [value])

    const check = () => {
        value != '' ? color.on() : color.off()

        if (validate)
            false ? valide.off() : valide.on()
    }

    const id_ = generateId()
    return (
        <div className={cn('w-100 relative', className)} >
            <label htmlFor={`${id_}`} className='fill' >
                <p className={color.bool ? 'opacity-60 transform-label' : 'opacity-80'}>{title}</p>
            </label>

            <input type='text' id={`${id_}`}
                onFocus={() => color.on()} onBlur={check} onChange={changeHandler} value={value} />

            <p className={cn('inputwarning text-nowrap', (!valide.bool && 'opacity-0'))}>не используйте латиницу / числа</p>

            <div className='absolute right-5 bottom-3'>
                <p className={cn('inputwarning opacity-100', (!(value.length > max) ? 'whitesmoke' : ''))}> {value.length}/{max} </p>
            </div>
        </div>
    );
}


export const InputPassword = ({ title, value, setValue, className }: {
    title: string
    value: string
    setValue: Function
    className?: string
}) => {
    const valide = useBoolean(false)
    const color = useBoolean(false)
    const view = useBoolean(false)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    React.useEffect(() => {
        value != '' && check()
    }, [value])

    const check = () => {
        value != '' ? color.on() : color.off()
        !validatePassword(value) ? valide.on() : valide.off()
    }

    const id_ = generateId()
    return (
        <div className={cn('w-100 relative', className)}>

            <img src={view.bool ? './svg/unlock.svg' : './svg/lock.svg'} style={{ zIndex: '10' }} alt='' onClick={() => view.swap()} className='lockpass cursor-pointer' />

            <label htmlFor={`${id_}`} className='fill' >
                <p className={color.bool ? 'opacity-60 transform-label' : 'opacity-80'}>{title}</p>
            </label>

            <input type={view.bool ? 'text' : 'password'} id={`${id_}`}
                onFocus={() => color.on()} onBlur={check} onChange={changeHandler} value={value} />
            <p className='inputwarning' style={!valide.bool ? { opacity: '0', bottom: '-4vh' } : { bottom: '-4vh' }}> используйте латиницу и цифры. <br /> минимальная длина - 6</p>
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
            <input type='checkbox' style={{top: '-2px'}} className={cn('transition03 absolute -right-6', (value ? 'opacity-0' : ''))} />
            <img src='./svg/accept.svg'
                alt=''
                style={{top: '4px'}} className={cn('transition03 absolute -right-7', (!value && 'opacity-0'))}
            />
        </div>
    );
}


export const InputEmail = ({ title, value, setValue, className }: {
    title: string
    value: string
    setValue: Function
    className?: string
}) => {
    const valide = useBoolean(false)
    const color = useBoolean(false)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    React.useEffect(() => {
        if (value != '') check()
    }, [value])

    const check = () => {
        if (value != '') { color.on() } else { color.off() }
        if (!validateEmail(value)) { valide.on() } else { valide.off() }
    }

    const id_ = generateId()
    return (
        <div className={cn('w-100 relative', className)} >

            <label htmlFor={`${id_}`} className='fill' >
                <p className={color.bool ? 'opacity-60 transform-label' : 'opacity-80'}>{title}</p>
            </label>

            <input type='text' id={`${id_}`}
                onFocus={() => color.on()} onBlur={check} onChange={changeHandler} value={value} />

            <p className={cn('inputwarning', !valide.bool && 'opacity-0')}>не валидная почта</p>

            <div className='absolute right-5 bottom-3'>
                <p className={cn('inputwarning opacity-100', (!(value.length > 40) ? 'whitesmoke' : ''))}> {value.length}/40 </p>
            </div>
        </div>
    );
}


export const InputFile = ({ title = 'изображение', setValue, className }: {
    title?: string
    setValue: Function
    className?: string
}) => {
    const id_ = generateId()
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
            <input accept='image/png, image/jpeg, image/svg, image/jpg, image/webp' type='file' id={`${id_}`} style={{ display: 'none' }} onChange={changeHandler} />

            <label htmlFor={`${id_}`} className='flex items-start flex-col gap-3' style={{ pointerEvents: 'auto' }}>
                <div className='music-ava flex justify-center items-center' style={{ backgroundImage: `url(${urls[0]})`, width: '70px', height: '50px' }}>
                    {src.length > 0 ? <></> : <img src='./svg/upload.svg' width={'27px'} />}
                </div>
                <p>{title}</p>
            </label>
        </div>
    );
}