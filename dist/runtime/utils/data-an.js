// File name was changed because of u-block thinking this is a bad file
import Tools from './tools.js';
import Form from './components/form.js';

class Analytics {
  static rootSelector = '[data-analytics]';
  static instances = [];

  constructor(root) {
    this.root = root;
    this.code = this.root.dataset.analytics;
    this.parent = Tools.getParent(this.root, Form.rootSelector);
    this.formInstance = Form.initElement(this.parent, { noEvents: true });
    this.form = this.formInstance?.form;

    this.bindEvents();
  }

  isInForm() {
    return this.form ? true : false;
  }

  bindEvents() {
    if (this.isInForm()) {
      this.form?.addEventListener('submit', this.handleSubmit.bind(this));
    } else {
      this.root.addEventListener('click', this.handleClick.bind(this));
    }
  }

  handleClick() {
    this.track(undefined, () => {});
  }

  handleSubmit(e) {
    e.stopImmediatePropagation();
    e.preventDefault();

    if (this.isFormValidated(e)) {
      this.track(undefined, () => {
        this.form.submit();
      });
    }
  }

  isFormValidated(e) {
    return this.formInstance?.validate(e) && this.formInstance.triggerExternalValidation();
  }

  track(url, callback) {
    Analytics.track(this.code, callback, url);
  }

  static isGALoaded() {
    return dataLayer.filter((item) => item.event === 'gtm.dom').length > 0;
  }

  static trackEvent(eventName, params = {}) {
    if (window.gtag && Analytics.isGALoaded()) {
      dataLayer.push({ event: eventName, ...params });
    } else {
      console.error('GTag not found or Collect not loaded');
    }
  }

  static track(code, callback, url) {
    if (window.gtag && code && Analytics.isGALoaded()) {
      window.gtag('event', 'conversion', {
        send_to: code,
        event_callback: callback,
      });
    } else {
      console.error('GTag not found or Collect not loaded');
      callback();
    }
  }

  static createVideoTracker(videoId, getIframeContainer) {
    const YOUTUBE_ORIGIN = 'https://www.youtube-nocookie.com';
    const COMPLETE_THRESHOLD = 0.95;

    let postMessageHandler = null;
    let videoTitle = '';

    function handlePostMessage(event) {
      if (event.origin !== YOUTUBE_ORIGIN) return;

      let data;
      try {
        data = JSON.parse(event.data);
      } catch {
        return;
      }

      if (data?.event === 'infoDelivery') {
        const { currentTime, duration, videoData } = data.info;
        const percentage = currentTime / duration;

        if (!videoTitle && videoData?.title) {
          videoTitle = videoData.title;
          Analytics.trackEvent('video_start', {
            video_id: videoId,
            'gtm.videoTitle': videoTitle,
          });
        }

        if (duration) {
          Analytics.trackEvent('video_progress', {
            video_id: videoId,
            'gtm.videoCurrentTime': currentTime,
            'gtm.videoDuration': duration,
            'gtm.videoPercent': Math.round(percentage * 100),
            ...(videoTitle && { 'gtm.videoTitle': videoTitle }),
          });
        }

        if (percentage >= COMPLETE_THRESHOLD) {
          Analytics.trackEvent('video_complete', {
            video_id: videoId,
            'gtm.videoCurrentTime': currentTime,
            'gtm.videoDuration': duration,
            ...(videoTitle && { 'gtm.videoTitle': videoTitle }),
          });
        }
      }
    }

    function bind() {
      if (!postMessageHandler) {
        postMessageHandler = handlePostMessage;
        window.addEventListener('message', postMessageHandler);
      }

      const container = getIframeContainer();
      if (!container) return;

      const iframe = container.querySelector('iframe');
      if (!iframe) return;

      iframe.addEventListener('load', () => {
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: 'listening', id: 1, channel: 'widget' }),
          YOUTUBE_ORIGIN
        );
      });
    }

    function destroy() {
      if (postMessageHandler) {
        window.removeEventListener('message', postMessageHandler);
        postMessageHandler = null;
      }
    }

    return { bind, destroy };
  }

  static init() {
    this.instances = [];

    [].forEach.call(document.querySelectorAll(this.rootSelector), (element) => {
      this.instances.push(new this(element));
    });
  }
}

export default Analytics;
