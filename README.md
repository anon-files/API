# AnonFiles API
An unofficial JavaScript AnonFiles API wrapper.

## Usage
```
npm install anonfiles
```

```js
import AnonFiles from 'anonfiles';
```

## API
### get(id)
Gets info about a file.
```js
var info = await get(id);
```

### upload(path)
Uploads a file to AnonFiles
```js
var response = await upload(path);
```

### download(id, targetDir)
Downloads a file from AnonFiles
```js
await download(id, './Downloads');
```

### extractRawURL(id)
Extracts the raw download link for a file
```js
extractRawURL(id);
```

### Example
```js
import AnonFiles from 'anonfiles';

var info = await AnonFiles.get('u1C0ebc4b0');
console.log(info);

var response = await AnonFiles.upload('./file.txt');
console.log(response);

await AnonFiles.download('u1C0ebc4b0', './Downloads/file.zip');

var url = AnonFiles.extractRawURL('u1C0ebc4b0');
console.log(url);
```

## License
```
The MIT License (MIT)

Copyright (c) 2022 anon-files.github.io developers

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
