async function get(id, proxyUrl) {
    proxyUrl = proxyUrl || "https://cors.bridged.cc";
    const response = await fetch(`${proxyUrl}/https://api.anonfiles.com/v2/file/${id}/info`);
    return await response.json();
}

async function upload(file, proxyUrl) {
    proxyUrl = proxyUrl || "https://cors.bridged.cc";
    let data = new FormData();
    data.append('file', file);
    const response = await fetch(`${proxyUrl}/https://api.anonfiles.com/upload`, {
        method: 'POST',
        body: data
    });
    return await response.json();
}
