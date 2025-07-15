import React from 'react'
import { useBoolean } from '../../lib/castom-hook'
import { Button, InputText } from '../ui';
import { plusImg } from '../ui/img';

interface Props {
}


export const CreatePlayList: React.FC<Props> = ({ }: Props) => {
    const { bool, swap } = useBoolean(false);

    return (
        <>
            {!bool ?
                <div className='cursor-pointer flex justify-center items-center transition03 music py-5 mx-6 rounded-md' onClick={swap} >
                    <img src={plusImg} alt="" />
                </div>
                :
                <>
                    <div className='flex flex-col px-5 gap-3 create-playlist-anim'>
                        <InputText name='name' title='название' classNameInput='input-padding' />
                        <Button place='создать' function_={() => { }} />
                    </div>
                </>
            }
        </>
    )
}
