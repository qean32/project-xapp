export interface MessageDto {
    id: number
    chatId: number
    hashMessage: string
    isView: boolean
    files?: string
    to: number
    from: number
}