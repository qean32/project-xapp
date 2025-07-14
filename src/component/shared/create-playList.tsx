import React from 'react'
import { useBoolean } from '../../lib/castom-hook'
import { Button, InputText } from '../ui';

interface Props {
}


export const CreatePlayList: React.FC<Props> = ({ }: Props) => {
    const { bool, swap } = useBoolean(false);

    return (
        <>
            {!bool ?
                <div className='cursor-pointer flex justify-center items-center transition03 music py-5 mx-6 rounded-md' onClick={swap} >
                    <img src="/svg/plus.svg" alt="" />
                </div>
                :
                <>
                    <div className='flex flex-col px-5 gap-5 create-playlist-anim'>
                        <InputText name='name' title='название' />
                        <Button title='создать' function_={() => { }} />
                    </div>
                </>
            }
        </>
    )
}
