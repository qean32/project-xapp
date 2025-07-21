import React from "react"

export const useBoolean = (initialValue: boolean = false) => {
    const [boolean, setBoolean] = React.useState<boolean>(initialValue)

    const swap = () => {
        setBoolean((prev: boolean) => !prev)
    }

    const on = () => setBoolean(true)
    const off = () => setBoolean(false)

    return { boolean, swap, on, off }
}

export type TypeUseBoolen = ReturnType<typeof useBoolean>