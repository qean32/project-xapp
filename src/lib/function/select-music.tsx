// @ts-nocheck

import { testPlaylist } from "../../export"
import { swapMusic } from "../../store/music"

export const selectMusic = async (e: React.MouseEvent<HTMLDivElement>, dispath: any) => {
    if (e.target?.children) {
        const data = fetch(`http://localhost:3000/music/audio?id=${(e.target.children[1].children[1].href).split('/').at(-1)}`)
            .then(response => response.json())
            .then(data => {
                dispath(swapMusic({
                    current: {
                        ava: (e.target.children[0].children[0].style.backgroundImage).toString().slice(5, -2),
                        author: '',
                        name: e.target.children[0].children[1].children[0].textContent,
                        link: data.data
                    },
                    playList: [],
                    primePlayList: [],
                    isNewAudio: true
                }))
            })
    }
}