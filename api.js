async function get(id) {
    const response = await fetch(`https://api.anonfiles.com/v2/file/${id}/info`);
    return await response.json();
}

async function upload(file) {
    let data = new FormData();
    data.append('file', file);
    const response = await fetch("https://api.anonfiles.com/upload", {
        method: 'POST',
        body: data
    });
    return await response.json();
}
