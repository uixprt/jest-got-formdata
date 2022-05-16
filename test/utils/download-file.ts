const download = require('image-downloader');

export function downloadFile(url, filepath) {
  return download.image({
    url,
    dest: filepath
  });
}
