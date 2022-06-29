import fs from 'fs';
import fetch from 'node-fetch';
import FormData from 'form-data';

const domains = ['anonfiles.com', 'filechan.org', 'hotfile.io', 'letsupload.cc', 'lolabits.se', 'megaupload.nz', 'myfile.is', 'rapidshare.nu', 'share-online.is', 'upvid.cc', 'vshare.is'];

async function get(id, domain) {
    const response = await fetch(`https://api.${domains[domain ?? 0]}/v2/file/${id}/info`);
    return await response.json();
}

async function upload(path, domain) {
    let data = new FormData();
    data.append('file', fs.createReadStream(path));
    const response = await fetch(`https://api.${domains[domain ?? 0]}/upload`, {
        method: 'POST',
        body: data
    });
    return await response.json();
}

async function download(fileURL, path) {
    if (!/((http|https):\/\/)(www.)?(anonfiles\.com|filechan\.org|hotfile\.io|letsupload\.cc|lolabits\.se|megaupload\.nz|myfile\.is|rapidshare\.nu|share-online\.is|upvid\.cc|vshare\.is)\b([-a-zA-Z0-9@:%._\+~#?&//=]*)/.test(fileURL)) {
        fileURL = (await get(fileURL))['data']['file']['url']['full'];
    }
    const response = await fetch(fileURL);
    var data = await response.text();
    let url = extractRawURL(data);
    path = path || extractFileName(data)

    const fileDownload = await fetch(url);
    const fileStream = fs.createWriteStream(path);
    await new Promise((resolve, reject) => {
        fileDownload.body.pipe(fileStream);
        fileDownload.body.on('error', reject);
        fileStream.on('finish', resolve);
    });
}

function extractRawURL(id, domain) {
    const urlData = await get(id, domain);
    const url = urlData['data']['file']['url']['full'];
    const response = await fetch(url);
    const websiteData = await response.text();
    return websiteData.match(/https:\/\/cdn-[0-9]{3}.(anonfiles\.com|filechan\.org|hotfile\.io|letsupload\.cc|lolabits\.se|megaupload\.nz|myfile\.is|rapidshare\.nu|share-online\.is|upvid\.cc|vshare\.is)\/[aA-zZ0-9]+\/[aA-zZ0-9]+-[aA-zZ0-9]+\/[^"]+/)[0];
}

function extractFileName(id, domain) {
    const urlData = await get(id, domain);
    const url = urlData['data']['file']['url']['full'];
    const response = await fetch(url);
    const websiteData = await response.text();
    return websiteData.match(/text-center text-wordwrap">[^<]+/)[0].replace('text-center text-wordwrap">', '');
}

const AnonFiles = { get, upload, download, extractRawURL, extractFileName };
export default AnonFiles;
