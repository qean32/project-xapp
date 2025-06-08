import { IconAndAText, Search, ToolModeSound } from '../component/ui/'
import { Music, MusicShort, PlayList, ToolMusic } from '../component/shared/'

export const Test = () => {
    return (
        <>
            <IconAndAText text={'сообщество'} icon='svg/community.svg' />
            <div className='p-5'>
                <div className='flex gap-2 mb-5'>
                    <IconAndAText text={'чат'} icon='svg/message.svg' />
                </div>

                <ToolMusic left={false} />
                <Search />
                <ToolModeSound />

                {/* <div className='p-5'>
                    <Music />
                    <Music />
                    <Music />
                </div>


                <div className='p-5'>
                    <MusicShort />
                    <MusicShort />
                    <MusicShort />
                </div>


                <div className='p-5'>
                    <PlayList />
                    <PlayList />
                    <PlayList />
                </div> */}
            </div>
        </>
    )
}
