const videosId = ['yhGN4MHuPXE', '29pLD_oXHlU'];

export function selectRandomVideos() {
    const index = Math.floor(Math.random() * videosId.length);
    const random = videosId[index];
    return random
}