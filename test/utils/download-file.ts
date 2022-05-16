import download from 'image-downloader';

export async function downloadFile(url, filepath): Promise<string> {
  const { filename } = await download.image({
    url,
    dest: filepath,
  });

  return filename;
}
