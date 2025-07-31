export const getRoomId = (to: number, from: number) => {
    return [to, from].sort((a, b) => a - b).join('-')
}