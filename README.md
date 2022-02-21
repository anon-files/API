# API
An unofficial JavaScript AnonFiles API wrapper.

## Usage
### Browser
Add the following code to your HTML file.
```html
<script src="https://cdn.jsdelivr.net/gh/anon-files/API@main/dist/api.min.js"></script>
```

A CORS proxy is required for this API to function in the browser.

### Node.js
```
npm install anonfiles
```

AnonFiles is an ES module

ES6 Imports
```js
import AnonFiles from 'anonfiles';
```

## Browser API
#### get(id, proxyUrl)
Gets info about a file.

In order to bypass CORS in the browser, a CORS proxy is used for all requests.

You can use your own CORS proxy by passing it in the `proxyUrl` parameter.

```js
let info = await get(id, 'https://cors.bridged.cc');
console.log(info);
```

Example Request
```js
let info = await get('u1C0ebc4b0');
console.log(info);
```

#### upload(file, proxyUrl)
Uploads a file to AnonFiles

In order to bypass CORS in the browser, a CORS proxy is used for all requests.

You can use your own CORS proxy by passing it in the `proxyUrl` parameter.

```js
let response = await upload(file, 'https://cors.bridged.cc');
```

Example Request
```js
var input = document.querySelector('input[type="file"]');
var response = await upload(input.files[0]);

console.log(response);
```

A more detailed example can be found in the **[examples](https://github.com/anon-files/API/tree/main/examples)** folder.

#### Warning
If you are going to use this API in the browser, it is recommended that you use your own CORS proxy to prevent security risks.

For instructions on setting up your own CORS proxy, see https://github.com/Rob--W/cors-anywhere#demo-server

## Node.js API
#### get(id)
Gets info about a file.
```js
var info = await get(id);
```

#### upload(path)
Uploads a file to AnonFiles
```js
var response = await upload(path);
```

#### Example
Example Usage
```js
const API = AnonFiles();

var info = await API.get('u1C0ebc4b0');
console.log(info);

var response = await API.upload('./file.txt');
console.log(response);
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
