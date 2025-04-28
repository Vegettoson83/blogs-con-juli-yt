<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blogs Con Juli - YouTube Feed</title>
    <style>
        /* --- Your original CSS here --- */
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="welcome-banner">
        <h1 class="welcome-text">Bienvenidos a mi canal</h1>
    </div>
    
    <div class="container">
        <div id="channel-container" class="channel-header">
            <div class="loading">Cargando información del canal...</div>
        </div>
        
        <div id="videos-container" class="video-grid">
            <div class="loading">Cargando videos...</div>
        </div>
    </div>

<script>
// --- Configuration ---
const API_KEY = 'AIzaSyCT8bPyUWOnbUCs36rFucoPnAs3eX9xlUw';
const CHANNEL_ID = 'UCw_SZuRMPAFSxWFGr3IhAZQ';

const channelContainer = document.getElementById('channel-container');
const videosContainer = document.getElementById('videos-container');

// --- Utility Functions ---
function formatViewCount(count) {
    if (count >= 1e6) return (count / 1e6).toFixed(1) + 'M';
    if (count >= 1e3) return (count / 1e3).toFixed(1) + 'K';
    return count.toString();
}

function formatDuration(duration) {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = (match[1] || '0H').slice(0, -1);
    const minutes = (match[2] || '0M').slice(0, -1);
    const seconds = (match[3] || '0S').slice(0, -1);
    return `${hours > 0 ? hours + ':' : ''}${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
}

function formatPublishedDate(date) {
    const now = new Date();
    const published = new Date(date);
    const diffDays = Math.floor((now - published) / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return 'Hoy';
    if (diffDays === 1) return 'Ayer';
    if (diffDays < 7) return `Hace ${diffDays} días`;
    if (diffDays < 30) return `Hace ${Math.floor(diffDays / 7)} semanas`;
    if (diffDays < 365) return `Hace ${Math.floor(diffDays / 30)} meses`;
    return `Hace ${Math.floor(diffDays / 365)} años`;
}

// --- Fetch Functions ---
async function fetchChannelInfo() {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${CHANNEL_ID}&key=${API_KEY}`);
        const data = await response.json();
        if (!data.items || data.items.length === 0) throw new Error('Canal no encontrado');
        
        const channel = data.items[0];
        const html = `
            <img class="channel-avatar" src="${channel.snippet.thumbnails.default.url}" alt="Avatar del Canal">
            <div class="channel-info">
                <h2 class="channel-name">${channel.snippet.title}</h2>
                <div class="channel-stats">${formatViewCount(channel.statistics.subscriberCount)} suscriptores • ${channel.statistics.videoCount} videos</div>
            </div>
            <button class="subscribe-button" onclick="window.open('https://www.youtube.com/channel/${CHANNEL_ID}?sub_confirmation=1', '_blank')">Suscribirse</button>
        `;
        channelContainer.innerHTML = html;
    } catch (error) {
        console.error('Error fetching channel info:', error);
        channelContainer.innerHTML = `<div class="error">${error.message}</div>`;
    }
}

async function fetchChannelVideos() {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=12&order=date&type=video&key=${API_KEY}`);
        const data = await response.json();
        if (!data.items || data.items.length === 0) throw new Error('No hay videos disponibles');
        
        const videoIds = data.items.map(item => item.id.videoId).join(',');
        const detailsResponse = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${API_KEY}`);
        const detailsData = await detailsResponse.json();
        
        const videosHTML = data.items.map((item, idx) => {
            const video = detailsData.items[idx];
            return `
                <div class="video-card">
                    <div class="thumbnail">
                        <img src="${item.snippet.thumbnails.high.url}" alt="Miniatura">
                        <span class="video-duration">${formatDuration(video.contentDetails.duration)}</span>
                    </div>
                    <div class="video-info">
                        <div class="video-title">${item.snippet.title}</div>
                        <div class="video-channel">${item.snippet.channelTitle}</div>
                        <div class="video-stats">${formatViewCount(video.statistics.viewCount)} vistas • ${formatPublishedDate(item.snippet.publishedAt)}</div>
                    </div>
                </div>
            `;
        }).join('');
        videosContainer.innerHTML = videosHTML;
    } catch (error) {
        console.error('Error fetching channel videos:', error);
        videosContainer.innerHTML = `<div class="error">${error.message}</div>`;
    }
}

// --- Initialize ---
fetchChannelInfo();
fetchChannelVideos();
</script>

</body>
</html>
