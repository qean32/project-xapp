import React from "react";
import { MusicDto } from "../../model";
import { useBoolean } from "./use-boolean";
import { useAppSelector, useAppDispatch } from './redux'
import { swapOnlyCurrent, swapMusic, swapCurrent } from '../../store/music'
import { getAudioUrl, isTrueAudio, rndArray } from "../function";
import { swapBigFileNotification, swapDownloadFileNotification } from "../../store/state-file";
import { bigFileMessage } from "../../export";


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

    const back = (_?: Event | any, swapCount: number = 1) => {
        const index = playList.findIndex((item: MusicDto) => item.link == current.link);
        if (index <= 0) {
            swapMusic_(playList[playList.length - swapCount], 'back')
        }
        else {
            swapMusic_(playList[index - swapCount], "back")
        }
        audioElem.current.currentTime = 0;
    }


    const next = (_?: Event | any, swapCount: number = 1) => {
        if (playList.length) {
            const index = playList.findIndex((item: MusicDto) => item.link == current.link);
            if (index >= playList.length - swapCount) {
                swapMusic_(playList[0], 'next')
            }
            else {
                swapMusic_(playList[index + swapCount], "next")
            }
            audioElem.current.currentTime = 0;
        }
    }

    const onPlaying = () => {
        const duration = audioElem.current.duration;
        const ct = audioElem.current.currentTime;

        dispatch(swapCurrent({ ...current, "progress": ct / duration * 100, "length": duration }))
    }

    async function swapMusic_(newCurrent: MusicDto, direction?: 'next' | 'back') {
        const audioLink = isTrueAudio(newCurrent.link)
        if (typeof audioLink != 'string')
            dispatch(swapDownloadFileNotification())
        if (audioLink != bigFileMessage) {
            dispatch(swapOnlyCurrent({ ...newCurrent, link: audioLink ? newCurrent.link : await getAudioUrl(newCurrent.link) }))
        } else {
            dispatch(swapBigFileNotification())
            direction == 'next' && next(0, 2)
            direction == 'back' && back(0, 2)
        }
    }

    return { current, next, back, play, audioElem, isPlay, onPlaying, isNewAudio }
}