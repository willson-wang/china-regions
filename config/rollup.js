const pkg = require("../package.json");
 
const name = pkg.name.slice(pkg.name.indexOf("-") + 1);
const version = pkg.version;
console.log(name);
const banner = 
`/*!
 * type ${version} (https://github.com/willson-wang/china-regions)
 * API https://github.com/willson-wang/china-regions/master/doc/api.md
 * Copyright 2019-${(new Date).getFullYear()} china-regions. All Rights Reserved
 * Licensed under MIT (https://github.com/willson-wang/china-regions/master/LICENSE)
 */
`;


export default {
    name,
    banner
};
