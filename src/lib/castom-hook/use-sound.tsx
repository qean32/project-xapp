import React from "react";
import { MusicDto } from "../../model";
import { useBoolean } from "./use-boolean";
import { useAppSelector, useAppDispatch } from './redux'
import { swapOnlyCurrent, swapMusic } from '../../store/music'
import { getAudioUrl, isTrueAudio, rndArray } from "../function";
import { swapDownload } from "../../store/is-downloading";


export const useSound = () => {
    const audioElem: any = React.useRef();
    const { boolean: isPlay, swap } = useBoolean(false)
    const { current, playList, primePlayList, isNewAudio } = useAppSelector((state) => state.music)
    const { mode } = useAppSelector((state) => state.modeSound)

    const dispatch = useAppDispatch()
    React.useEffect(() => {
        if (mode == "random-play") {
            dispatch(swapMusic({ current, primePlayList, isNewAudio: false, playList: rndArray(playList) }))
        } else if (playList != primePlayList) {
            dispatch(swapMusic({ current, primePlayList, isNewAudio: false, playList: primePlayList }))
        }
    }, [mode])

    const play = () => {
        swap()
        if (!isPlay) {
            audioElem.current.play();
            return
        }

        audioElem.current.pause();
    }

    React.useEffect(() => {
        if (isPlay) {
            audioElem.current.play();
        }
        else {
            audioElem.current.pause();
        }
    }, [isPlay, current])

    const back = async () => {
        const index = playList.findIndex((item: MusicDto) => item.link == current.link);
        if (index == 0) {
            const newCurrent = playList[playList.length - 1]
            swapMusic_(newCurrent)
        }
        else {
            const newCurrent = playList[index - 1]
            swapMusic_(newCurrent)
        }
        audioElem.current.currentTime = 0;
    }


    const next = async () => {
        if (playList.length) {
            const index = playList.findIndex((item: MusicDto) => item.link == current.link);

            if (index == playList.length - 1) {
                dispatch(swapOnlyCurrent(playList[0]))
            }
            else {
                const newCurrent = playList[index + 1]
                swapMusic_(newCurrent)
            }
            audioElem.current.currentTime = 0;
        }
    }

    const onPlaying = () => {
        const duration = audioElem.current.duration;
        const ct = audioElem.current.currentTime;

        dispatch(swapOnlyCurrent({ ...current, "progress": ct / duration * 100, "length": duration }))
    }

    async function swapMusic_(newCurrent: MusicDto) {
        if (typeof (isTrueAudio(newCurrent.link)) != 'string')
            dispatch(swapDownload())
        dispatch(swapOnlyCurrent({ ...newCurrent, link: isTrueAudio(newCurrent.link) ? newCurrent.link : await getAudioUrl(newCurrent.link) }))
    }

    return { current, next, back, play, audioElem, isPlay, onPlaying, isNewAudio }
}