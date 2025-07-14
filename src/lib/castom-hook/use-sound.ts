import React from "react";
import { MusicDto } from "../../model";
import { useBoolean } from "./use-boolean";
import { useAppSelector, useAppDispatch } from '../../lib/castom-hook/redux'
import { swapOnlyCurrent } from '../../store/music'


export const useSound = () => {
    const audioElem: any = React.useRef();
    const { bool: isPlay, swap } = useBoolean(false)
    const { current, playList } = useAppSelector((state) => state.music)
    const dispatch = useAppDispatch()

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

    const back = () => {
        const index = playList.findIndex((item: MusicDto) => item.link == current.link);
        if (index == 0) {
            dispatch(swapOnlyCurrent(playList[playList.length - 1]))
        }
        else {
            dispatch(swapOnlyCurrent(playList[index - 1]))
        }
        audioElem.current.currentTime = 0;
    }


    const next = () => {
        const index = playList.findIndex((item: MusicDto) => item.link == current.link);

        if (index == playList.length - 1) {
            dispatch(swapOnlyCurrent(playList[0]))
        }
        else {
            dispatch(swapOnlyCurrent(playList[index + 1]))
        }
        audioElem.current.currentTime = 0;
    }

    const onPlaying = () => {
        const duration = audioElem.current.duration;
        const ct = audioElem.current.currentTime;

        dispatch(swapOnlyCurrent({ ...current, "progress": ct / duration * 100, "length": duration }))
    }

    return { current, next, back, play, audioElem, isPlay, onPlaying }
}