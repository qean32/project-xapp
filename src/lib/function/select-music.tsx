import { testPlaylist } from "../../export"
import { swapMusic } from "../../store/music"

export const selectMusic = (e: React.MouseEvent<HTMLDivElement>, dispath: any) => {
    dispath(swapMusic({
        current: {
            // @ts-ignore
            ava: (e.target.children[0].children[0].style.backgroundImage).toString().slice(5, -2),
            // @ts-ignore
            author: e.target.children[0].children[1].children[0].textContent,
            // @ts-ignore
            name: e.target.children[0].children[1].children[1].textContent,
            // @ts-ignore
            link: e.target.children[1].children[1].href,
        },
        playList: testPlaylist,
        primePlayList: testPlaylist,
        isNewAudio: true
    }))
}