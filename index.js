import fs from 'fs';
import fetch from 'node-fetch';
import FormData from 'form-data';

class AnonFiles {
    async get(id) {
        const response = await fetch(`https://api.anonfiles.com/v2/file/${id}/info`);
        return await response.json();
    }

    async upload(path) {
        let data = new FormData();
        data.append('file', fs.createReadStream(path));
        const response = await fetch('https://api.anonfiles.com/upload', {
            method: 'POST',
            body: data
        });
        return await response.json();
    }
}

export default AnonFiles;
