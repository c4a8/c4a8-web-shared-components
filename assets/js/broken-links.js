var links = document.querySelectorAll('a[href]');
var linkReport = [];
var linksChecked = 0;

// put all internal links into an array
// for each link load the page and select the body and create a new document for it and get the links on the pages again
// until the array is empty and every link got checked

// TODO check if link is internal or external

class BrokenLinks {
  constructor(rootUrl) {
    this.rootUrl = rootUrl;
    this.errors = [];
    this.links = {};
    this.prevLink = {};
    this.options = {
      // method: 'HEAD',
      mode: 'cors',
      //mode: 'no-cors',
      redirect: 'follow',
    };

    this.start();
  }

  async start() {
    await this.getUrl(this.rootUrl);

    this.showErrors();
    console.log(this.prevLink);
    console.log(this.errors);
  }

  showErrors() {
    //console.debug('errors', this.errors);
  }

  getUrl(url, previousUrl) {
    //if (this.links[url]) return;
    this.prevLink[url] = 'Previous Url: ' + previousUrl;

    return new Promise((resolve) => {
      const external = this.isExternal(url);

      fetch(url, this.options)
        .then((response) => {
          this.handleResponse(response, external, url);

          resolve();
        })
        .catch((error) => {
          this.handleError({ url, error, previousUrl });

          resolve();
        });
    });
  }

  isInvalidHref(href) {
    return href == null || href.length <= 1 || href.includes('index.html') || !href.includes('/');
  }

  isExternal(url) {
    const origin = document.location.origin;
    const regex = new RegExp(`^(${origin})?`);

    return url.match(regex) ? false : true;
  }

  async handleResponse(response, external, test) {
    const { url } = response;
    if (this.links[url]) return;

    if (external) {
      this.links[url] = external;

      this.checkLinks();
    } else {
      response.text().then((html) => {
        this.links[url] = {
          html,
        };

        this.checkLinks();
      });
    }
  }

  async checkLinks() {
    const linkKeys = Object.keys(this.links);

    for (let i = 0; i < linkKeys.length; i++) {
      const key = linkKeys[i];
      const link = this.links[key];

      if (!link.html) continue;

      const parser = new DOMParser();
      const site = parser.parseFromString(link.html, 'text/html');

      this.links[key].html = 'parsed';

      await this.getLinksOnSite(site, key);
    }
  }

  handleError(data) {
    const { url, error, previousUrl } = data;

    this.errors.push({
      url,
      error,
      previousUrl,
    });
  }

  async getLinksOnSite(site, url) {
    const links = site.querySelectorAll('a');

    for (var i = 0; i < links.length; i++) {
      const hrefAttr = links[i].getAttribute('href');

      if (this.isInvalidHref(hrefAttr) == false) {
        // links[i].href = this.normalizeLink(links[i].href);

        const link = links[i];
        const linkUrl = this.getAbsoluteUrl(link, url);

        if (this.isValidLink(linkUrl) && !this.links[linkUrl]) {
          await this.getUrl(linkUrl, url);
        }
      }
    }
  }

  normalizeLink(link) {
    link = link.endsWith('.html') ? link.slice(0, -5) : link;
    link = link.endsWith('/') ? link.slice(0, -1) : link;

    return link;
  }

  getAbsoluteUrl(link, siteUrl) {
    const href = link.getAttribute('href');
    const isAbsolute = href.indexOf('/') !== -1;

    return isAbsolute ? link.href : `${siteUrl}${href}`;
  }

  isValidLink(url) {
    const regex = /^(http(s)?:\/\/)?[\w.-]+(:\d+)?(\/[\w\.-]*)*$/g;

    return url.match(regex) ? true : false;
  }
}
