import React from "react"

export const useBoolean = (initialValue: boolean = false) => {
    const [bool, setBool] = React.useState<boolean>(initialValue)

    const swap = () => {
        setBool((prev: boolean) => !prev)
    }

    const on = () => setBool(true)
    const off = () => setBool(false)

    return { bool, swap, on, off }
}

export type TypeUseBoolen = ReturnType<typeof useBoolean>