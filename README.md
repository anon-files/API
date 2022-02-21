# API
An unofficial JavaScript AnonFiles API wrapper.

## Usage
### Browser
Add the following code to your HTML file.
```html
<script src="https://cdn.jsdelivr.net/gh/anon-files/API@main/api.js"></script>
```

### Node.js/Deno
This wrapper is designed specifically for the browser. However, it could still work on Node.js/Deno with some modules.

## API
### get(id)
Gets info about a file
```js
let info = await get(id);
console.log(info);
```

Example Request
```js
let info = await get('u1C0ebc4b0');
console.log(info);
```

### upload(file)
Uploads a file to AnonFiles
```js
let response = await upload(file);
```

Example Request
```js
var input = document.querySelector('input[type="file"]');
var response = await upload(input.files[0]);

console.log(response);
```

A more detailed example can be found in the **[examples](https://github.com/anon-files/API/tree/main/examples)** folder.

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
