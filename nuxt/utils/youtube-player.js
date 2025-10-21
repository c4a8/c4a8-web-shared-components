class YoutubePlayer {
  static getEmbedSrc(videoId, autoplay, playlist) {
    const origin = encodeURIComponent(document.location.origin);
    const referrer = encodeURIComponent(document.location.href);

    const playlistParams = playlist ? 'playlist?list=' : '';
    const paramSymbol = playlist ? '&' : '?';

    return `https://www.youtube-nocookie.com/embed/${playlistParams}${videoId}${paramSymbol}origin=${origin}&autoplay=${autoplay}&widget_referrer=${referrer}&enablejsapi=1&widgetid=1`;
  }
}

export default YoutubePlayer;
