class YoutubePlayer {
  static getEmbedSrc(videoId, autoplay, playlist, subtitles) {
    const origin = encodeURIComponent(document.location.origin);
    const referrer = encodeURIComponent(document.location.href);

    const playlistParams = playlist ? 'playlist?list=' : '';
    const paramSymbol = playlist ? '&' : '?';

    const subtitlesParams = subtitles ? `&cc_load_policy=1&cc_lang_pref=${subtitles}` : '';

    return `https://www.youtube-nocookie.com/embed/${playlistParams}${videoId}${paramSymbol}origin=${origin}&autoplay=${autoplay}${subtitlesParams}&widget_referrer=${referrer}&enablejsapi=1&widgetid=1`;
  }
}

export default YoutubePlayer;
