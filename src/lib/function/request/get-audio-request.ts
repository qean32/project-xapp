export const getAudioRequest = async (url: string) => {
    return fetch(`http://localhost:3000/music/audio?id=${url}`)
        .then(response => response.json())
} 