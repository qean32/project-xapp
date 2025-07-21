import React from 'react'
import { useBoolean } from '../../lib/castom-hook'
import { plusImg } from '../import';
import { CreatePlayListFormComponent } from '../children';

interface Props {
}


export const CreatePlayList: React.FC<Props> = ({ }: Props) => {
    const { boolean, swap } = useBoolean(false);

    return (
        <>
            {!boolean ?
                <div className='cursor-pointer flex justify-center items-center transition03 music py-5 mx-6 rounded-md' onClick={swap} >
                    <img src={plusImg} alt="" />
                </div>
                :
                <>
                    <CreatePlayListFormComponent />
                </>
            }
        </>
    )
}
