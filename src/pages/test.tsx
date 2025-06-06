import { IconAndAText, Search, ToolModeSound } from '../component/ui/'

export const Test = () => {
    return (
        <>
            <div className='p-5'>
                <div className='flex gap-2 mb-5'>
                    <IconAndAText text={'сообщество'} icon='svg/community.svg' />
                    <IconAndAText text={'чат'} icon='svg/message.svg' />
                </div>

                <Search />
                <ToolModeSound />
            </div>
        </>
    )
}
