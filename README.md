# AnonFiles API
An unofficial JavaScript AnonFiles API wrapper.

## Not Working as of August 2023
In August 2023, AnonFiles has shut down so this API wrapper is no longer functional.

## Usage
```
npm install anonfiles
```

```js
import AnonFiles from 'anonfiles';
```

## Domain id list
```
0 — anonfiles.com
1 — filechan.org
2 — hotfile.io
3 — letsupload.cc
4 — lolabits.se
5 — megaupload.nz
6 — myfile.
8 — share-online.is
9 — upvid.cc
10 — vshare.is
```

## API
### get(id, domain)
Gets info about a file.

Domain is the website domain id.
```js
var info = await get(id, 0);
```

### uploadBlob(blob, name, domain)
Uploads a blob to AnonFiles

Domain is the website domain id.
```js
var response = await uploadBlob(blob, name, 0);
```

### upload(path, domain)
Uploads a file to AnonFiles

Domain is the website domain id.
```js
var response = await upload(path, 0);
```

### download(id, domain, targetDir)
Downloads a file from AnonFiles
```js
await download(id, 0, './Downloads');
```

### extractRawURL(id, domain)
Extracts the raw download link for a file

Domain is the website domain id.
```js
var url = await extractRawURL(id, 0);
```

### extractFileName(id, domain)
Returns the file name for a file.

Domain is the website domain id.
```js
var name = await extractFileName(id, 0);
```

### Example
```js
import AnonFiles from 'anonfiles';

var info = await AnonFiles.get('u1C0ebc4b0', 0);
console.log(info);

var response = await AnonFiles.upload('./file.txt', 0);
console.log(response);

await AnonFiles.download('u1C0ebc4b0', 0, './Downloads/file.zip');

var url = await AnonFiles.extractRawURL('u1C0ebc4b0', 0);
console.log(url);

var fileName = await AnonFiles.extractFileName('u1C0ebc4b0', 0);
console.log(fileName);
```

## License
```
The MIT License (MIT)

Copyright (c) 2022-2023 anon-files.github.io developers

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
