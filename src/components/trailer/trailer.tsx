import { useEffect, useState } from 'react'
import { selectRandomVideos } from '../../utilities/functions'
import './styles.css'
import axios from 'axios';

interface IVideo {
    id: string,
    snippet: {
        title: string,
        description: string
    }
}

function Trailer(){
    const [videoData, setVideoData] = useState({} as IVideo);
    
    const videoId = selectRandomVideos();
    
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyDeTcmAPDBl7cmV-R4OeGGn8xS5Q_FaifE`
    
    async function loadVideo(url: string) {
        try {
            const response = await axios.get(url)
            console.log(response.data.items[0])
            return response.data.items[0]
        } catch(error) {
            console.log(error)
            alert('Erro ao carregar vídeo');
            return {id: '', snippet: {title: '', description: ''}};
        }
    }

    const fetchData = async () => {
        const data = await loadVideo(url);
        setVideoData(data);
    };
    
    useEffect(() => {
        fetchData();
    }, [])

    console.log(videoData);

    return (
        <div className="trailer-content" >
            <iframe src={`https://www.youtube.com/embed/${videoData.id}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <div id="sinopse" >
                <p className="video-title" >
                    {videoData.snippet? videoData.snippet.title : ''}
                </p>
                <p className="video-description" >
                    {videoData.snippet? videoData.snippet.description : ''}
                </p>
                <a href="https://youtu.be/Ch9N7LmRsFE" target="_blank" rel="noreferrer">
                    <button className="button">Assista no Youtube</button>
                </a>
            </div>
        </div>
    )
}

export default Trailer