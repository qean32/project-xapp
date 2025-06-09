import { IconAndAText, Search, ToolModeSound, InputText, InputEmail, Checkbox, InputPassword, InputFile } from '../component/ui/'
import { ToolMusic } from '../component/shared/'
import React from 'react'
import { useBoolean } from '../lib/castom-hook'

export const Test = () => {
    const [state, setState] = React.useState('false')
    const { swap, bool } = useBoolean(false)


    return (
        <>
            {/* <Checkbox /> */}

            {/*  <IconAndAText text={'сообщество'} icon='svg/community.svg' /> */}
            <div className='p-5'>
                <ToolMusic left={false} />
                <Search />
                <ToolModeSound />
            </div>

            <div className="p-5 w-60 flex flex-col gap-10">
                <InputText title='zxc' setValue={setState} value={state} max={10} />
                {/* <InputEmail title='zxc' setValue={setState} value={state} />
                <InputPassword title='zxc' setValue={setState} value={state} /> */}
                {/* <InputFile title='zxc' setValue={setState} /> */}
                <Checkbox fn={swap} title='соглашение' value={bool} />
            </div>
        </>
    )
}
