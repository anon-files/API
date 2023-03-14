import fs from 'fs';
import fetch from 'node-fetch';
import FormData from 'form-data';
import path from 'path';

const CDN_URL_REGEX = /https:\/\/cdn-[^"]+/;

const domains = ['anonfiles.com', 'filechan.org', 'hotfile.io', 'letsupload.cc', 'lolabits.se', 'megaupload.nz', 'myfile.is', 'rapidshare.nu', 'share-online.is', 'upvid.cc', 'vshare.is'];

async function get(id, domain) {
    try {
        const response = await fetch(`https://api.${domains[domain ?? 0]}/v2/file/${id}/info`);
        return await response.json();
    } catch (error) {
        console.error(error);
        return {};
    }
}

async function uploadBlob(blob, name, domain) {
    try {
        let data = new FormData();
        data.append('file', blob, name);
        const response = await fetch(`https://api.${domains[domain ?? 0]}/upload`, {
            method: 'POST',
            body: data
        });
        return await response.json();
    } catch (error) {
        console.error(error);
        return {};
    }
}

async function upload(filePath, domain) {
    return uploadBlob(fs.createReadStream(filePath), path.parse(filePath).base, domain);
}

async function download(fileURL, domain, filePath) {
    if (!isURL(fileURL)) {
        try {
            const info = await get(fileURL, domain);
            if (!info['status']) {
                console.log('File does not exist');
                return;
            }
            fileURL = (await get(fileURL))['data']['file']['url']['full'];
        } catch (error) {
            console.error(error);
            return;
        }
    }
    const response = await fetch(fileURL);
    var data = await response.text();
    let url = extractURL(data);
    filePath = filePath || `./${extractName(data)}`;

    const fileDownload = await fetch(url);
    const fileStream = fs.createWriteStream(filePath);
    await new Promise((resolve, reject) => {
        fileDownload.body.pipe(fileStream);
        fileDownload.body.on('error', reject);
        fileStream.on('finish', resolve);
    });
}

function extractURL(data) {
    try {
        return data.match(CDN_URL_REGEX)[0];
    } catch {
        throw new Error('Raw URL not found. Make sure the file exists.');
    }
}

function extractName(data) {
    return data.match(/text-center text-wordwrap">[^<]+/)[0].replace('text-center text-wordwrap">', '');
}

function isURL(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

async function extractRawURL(id, domain) {
    const urlData = await get(id, domain);
    if (!urlData['status']) {
        return;
    }
    const url = urlData['data']['file']['url']['full'];
    const response = await fetch(url);
    const websiteData = await response.text();
    return extractURL(websiteData);
}

async function extractFileName(id, domain) {
    const urlData = await get(id, domain);
    if (!urlData['status']) {
        return;
    }
    const url = urlData['data']['file']['url']['full'];
    const response = await fetch(url);
    const websiteData = await response.text();
    return extractName(websiteData);
}

const AnonFiles = { get, upload, uploadBlob, download, extractRawURL, extractFileName };
export default AnonFiles;
