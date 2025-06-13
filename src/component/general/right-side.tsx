import React from 'react'
import { cn } from '../../lib/function'
import { DefaultContiner } from '../hoc'
import { PlayList } from '../shared'

interface Props {
    className?: string
    playList?: boolean
}


export const RightSide: React.FC<Props> = ({ className, playList = false }: Props) => {
    // const navigate = useNavigate()

    return (
        <div className={cn('mt-8 min-w-[280px]', className)}>
            <div className="flex justify-between mb-8">
                <h2>НИКНЕЙМ</h2>
                <div className="ava music-ava h-[70px] w-[100px] bg-color-light"></div>
            </div>

            {playList &&
                <DefaultContiner className="pt-5 px-0 max-h-[30%] min-h-[300px] overflow-hidden">
                    <h2 className="px-5">ПЛЕЙЛИСТЫ</h2>

                    <div className="flex flex-col relative pt-10 overflow-y-scroll max-h-[300px]">
                        <PlayList />
                        <PlayList />
                        <PlayList />
                        <PlayList />
                        <PlayList />
                        <PlayList />
                        <PlayList />
                    </div>
                </DefaultContiner>
            }
        </div>
    )
}
