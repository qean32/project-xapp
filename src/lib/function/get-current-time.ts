export const getCurrentTime = (time: string) => {
    const date = new Date(time).toLocaleString('ru', { timeZone: `${Intl.DateTimeFormat().resolvedOptions().timeZone}` })
    return date.split(' ')[0].split('.').slice(0, -1).join('.'), date.split(' ')[1].split(':').slice(0, -1).join(':')
}