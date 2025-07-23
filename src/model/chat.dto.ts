import { UserDto } from ".";

export interface ChatDto {
    updateadAt: boolean,
    isView: boolean,
    hashMessage: boolean,
    fromId: UserDto,
    toId: UserDto
    chatId: string
}