// @ts-nocheck

import { testPlaylist } from "../../export"
import { swapMusic } from "../../store/music"

export const selectMusic = (e: React.MouseEvent<HTMLDivElement>, dispath: any) => {
    if (e.target?.children) {

        dispath(swapMusic({
            current: {
                ava: (e.target.children[0].children[0].style.backgroundImage).toString().slice(5, -2),
                author: e.target.children[0].children[1].children[0].textContent,
                name: e.target.children[0].children[1].children[1].textContent,
                link: e.target.children[1].children[1].href,
            },
            playList: testPlaylist,
            primePlayList: testPlaylist,
            isNewAudio: true
        }))
    }
}