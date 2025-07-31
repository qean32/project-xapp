import { MusicDto } from './model'

export const en = {
    connection: 'connection',
    disconnection: 'disconnection',

    notificationSend: 'notificationSend',
    serverSend: "serverSend",
    serverView: "serverView",
    serverTyping: "serverTyping",
    serverUpdate: "serverUpdate",
    serverRemove: "serverRemove",

    clientSend: "clientSend",
    clientTyping: "clientTyping",
    clientView: "clientView",
    clientUpdate: "clientUpdate",
    clientRemove: "clientRemovee"
}

export const style = {
    $bg_color: '#292929',
    $bg_color_dark: '#262626',
    $bg_color_light: '#333333',
    $bg_color_light_: '#373737',

    $text_color: '#D2D2D2',
    $plate_color: '#2C2C2C',
}

export const accessTokenWord = 'JWT'
export { axiosInstance } from './service/instance'
// export const host = 'http://localhost:5173/'
export const serverHost = 'http://localhost:3000/'
export const tokenStorage = 'tokenStorage'
export const bigFileMessage = 'Слишком большой фаил'

export const customAttribute = {
    dataId: 'data-id'
}

export const serverWork = 'serverWork!'

export const testPlaylist: MusicDto[] = [
    {
        link: "https://cdn8.deliciousoranges.com/s1/get/cuts/8d/a0/8da055bc2698e2d3f2fcebefc72c445d/67056433/Serega_pirat_-_am_fp_b128f0d165.mp3",
        author: 'Serega Pirat',
        ava: 'https://i.pinimg.com/736x/ac/c7/7f/acc77fc9e4be6f7f83de39486ff221f0.jpg',
        name: 'fp am'
    },
    {
        link: 'https://cdn15.deliciousoranges.com/s1/get/music/20210219/Serega_pirat_-_dead_inside_72716179.mp3',
        author: 'Serega Pirat',
        ava: 'https://i.pinimg.com/736x/33/45/40/334540eeb773f3c2a192f9cfcd37e78c.jpg',
        name: 'dead inside'
    },
    {
        link: 'https://cdn2.deliciousoranges.com/s1/get/cuts/d4/87/d4870c957a77b4f9ce597548a2ebfbb6/73433358/Serega_pirat_-_Masha_b128f0d151.mp3',
        author: 'Serega Pirat',
        ava: 'https://i.pinimg.com/1200x/d3/99/bc/d399bc4b020f56d316e4c3de3702e2cb.jpg',
        name: 'Masha'
    },
    {
        link: "https://cdn8.deliciousoranges.com/s1/get/cuts/8d/a0/8da055bc2698e2d3f2fcebefc72c445d/67056433/Serega_pirat_-_am_fp_b128f0d165.mp3",
        author: 'Serega Pirat',
        ava: 'https://i.pinimg.com/736x/ac/c7/7f/acc77fc9e4be6f7f83de39486ff221f0.jpg',
        name: 'fp am2'
    },
    {
        link: 'https://cdn15.deliciousoranges.com/s1/get/music/20210219/Serega_pirat_-_dead_inside_72716179.mp3',
        author: 'Serega Pirat',
        ava: 'https://i.pinimg.com/736x/33/45/40/334540eeb773f3c2a192f9cfcd37e78c.jpg',
        name: 'dead inside2'
    },
    {
        link: 'https://cdn2.deliciousoranges.com/s1/get/cuts/d4/87/d4870c957a77b4f9ce597548a2ebfbb6/73433358/Serega_pirat_-_Masha_b128f0d151.mp3',
        author: 'Serega Pirat',
        ava: 'https://i.pinimg.com/1200x/d3/99/bc/d399bc4b020f56d316e4c3de3702e2cb.jpg',
        name: 'Masha2'
    },
    {
        link: "https://cdn8.deliciousoranges.com/s1/get/cuts/8d/a0/8da055bc2698e2d3f2fcebefc72c445d/67056433/Serega_pirat_-_am_fp_b128f0d165.mp3",
        author: 'Serega Pirat',
        ava: 'https://i.pinimg.com/736x/ac/c7/7f/acc77fc9e4be6f7f83de39486ff221f0.jpg',
        name: 'fp am3'
    },
    {
        link: 'https://cdn15.deliciousoranges.com/s1/get/music/20210219/Serega_pirat_-_dead_inside_72716179.mp3',
        author: 'Serega Pirat',
        ava: 'https://i.pinimg.com/736x/33/45/40/334540eeb773f3c2a192f9cfcd37e78c.jpg',
        name: 'dead inside3'
    },
    {
        link: 'https://cdn2.deliciousoranges.com/s1/get/cuts/d4/87/d4870c957a77b4f9ce597548a2ebfbb6/73433358/Serega_pirat_-_Masha_b128f0d151.mp3',
        author: 'Serega Pirat',
        ava: 'https://i.pinimg.com/1200x/d3/99/bc/d399bc4b020f56d316e4c3de3702e2cb.jpg',
        name: 'Masha3'
    },
]