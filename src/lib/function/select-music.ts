// @ts-nocheck

import { testPlaylist } from "../../export"
import { MusicDto } from "../../model"
import { swapMusic } from "../../store/music"

export const selectMusic = async (e: React.MouseEvent<HTMLDivElement>, dispath: any, playList?: MusicDto[] = []) => {
    if (e.target?.children) {

        const link = e.target.children[1].children[1].href
        console.log(playList)
        if (link.split('/').at(-1).split('?')?.at(0) != 'videoplayback') {
            const data = fetch(`http://localhost:3000/music/audio?id=${link.split('/').at(-1)}`)
                .then(response => response.json())
                .then(data => {
                    dispath(
                        swapMusic({
                            current: {
                                ava: (e.target.children[0].children[0].style.backgroundImage).toString().slice(5, -2),
                                author: '',
                                name: e.target.children[0].children[1].children[0].textContent,
                                link: data.data
                            },
                            playList: playList,
                            primePlayList: playList,
                            isNewAudio: true
                        }))
                })
        } else {
            dispath(
                swapMusic({
                    current: {
                        ava: (e.target.children[0].children[0].style.backgroundImage).toString().slice(5, -2),
                        author: '',
                        name: e.target.children[0].children[1].children[0].textContent,
                        link: link
                    },
                    playList: playList,
                    primePlayList: playList,
                    isNewAudio: true
                }))
        }
    }
}