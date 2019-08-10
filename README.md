# 一个提供api操作全国省市区数据的js库
[![Build Status](https://travis-ci.org/willson-wang/china-regions.svg?branch=master)](https://travis-ci.org/willson-wang/china-regions.svg?branch=master) [![Coverage Status](https://coveralls.io/repos/github/willson-wang/china-regions/badge.svg)](https://coveralls.io/github/willson-wang/china-regions) [![GitHub](https://img.shields.io/github/license/willson-wang/china-regions)](https://github.com/willson-wang/china-regions/blob/master/LICENSE)

## Directory

```
.
├── demo
├── dist  # production code
├── doc   # document
├── src   # source code
├── test  # unit test
├── CHANGELOG.md
└── TODO.md
```

## Usage
npm installation

```bash
$ npm install --save china-citys
```

Node.js

```js
const regions = require("china-citys");

regions.getProvinces("13") // provinceList
regions.getCitysByProvince("13") // provinceList
```

webpack

```js
import regions from 'china-citys';

regions.getProvinces("13") // provinceList
regions.getCitysByProvince("13") // provinceList
```

Require.js

```js
requirejs(['node_modules/china-citys/dist/index.aio.js'], function (regions) {

    regions.getProvinces("13") // provinceList
    regions.getCitysByProvince("13") // provinceList
})
```

Browser

```html
<script src="node_modules/china-citys/dist/index.aio.js"></script>

<script>
    regions.getProvinces("13") // provinceList
    regions.getCitysByProvince("13") // provinceList
</script>
```

## CHANGELOG
[CHANGELOG.md](https://github.com/willson-wang/china-regions/blob/master/CHANGELOG.md)

## TODO
[TODO.md](https://github.com/willson-wang/china-regions/blob/master/TODO.md)