// @ts-nocheck
import { MusicDto } from "../../model"
import { swapMusic } from "../../store/music"
import { getAudioUrl } from "."

export const selectMusic = async (e: React.MouseEvent<HTMLDivElement>, dispath: any, playList?: MusicDto[] = []) => {
    if (e.target?.children) {

        if (e.target.children[1]) {
            const link = e.target.children[1].children[1].href
            if (link.split('.').at(-1) != 'mp3') {
                const link_ = await getAudioUrl(link)
                console.log(link_)
                const name = e.target.children[0].children[1].children[0].textContent
                dispath(
                    swapMusic({
                        current: {
                            ava: (e.target.children[0].children[0].style.backgroundImage).toString().slice(5, -2),
                            author: '',
                            name,
                            link: link_
                        },
                        playList: playList,
                        primePlayList: playList,
                        isNewAudio: true
                    }))
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
}