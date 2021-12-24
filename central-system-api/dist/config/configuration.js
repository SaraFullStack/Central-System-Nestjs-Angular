"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let ENV = '.env.development';
const configuration = () => {
    if (process.env['ENV'] === 'PRODUCTION') {
        ENV = '.env.production';
    }
    else if (process.env['ENV'] === 'STAGING') {
        ENV = '.env.staging';
    }
    console.log(ENV);
    return ENV;
};
exports.default = configuration;
//# sourceMappingURL=configuration.js.map