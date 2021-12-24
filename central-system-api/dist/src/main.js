"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const logger_service_1 = require("@nestjs/common/services/logger.service");
const core_1 = require("@nestjs/core");
const document_builder_1 = require("@nestjs/swagger/dist/document-builder");
const swagger_module_1 = require("@nestjs/swagger/dist/swagger-module");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const logger = new logger_service_1.Logger();
const ENV = process.env['ENV'];
const APP = process.env['APP'];
const PORT = process.env['PORT'] || 3000;
const VERSION = process.env['VERSION'];
logger.setContext(`App: ${APP} * Env: ${ENV}`);
async function bootstrap() {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
        app.useGlobalPipes(new common_1.ValidationPipe());
        app.useStaticAssets(path_1.join(__dirname, '../../', 'public'));
        app.setBaseViewsDir([
            __dirname,
            '../../',
            'views',
            __dirname,
            '../../',
            'templates',
        ]),
            app.setViewEngine('pug');
        const options = new document_builder_1.DocumentBuilder()
            .setTitle(APP)
            .setDescription(`${APP} - ${ENV}`)
            .setVersion(VERSION)
            .addTag(APP)
            .addBearerAuth()
            .build();
        const document = swagger_module_1.SwaggerModule.createDocument(app, options);
        swagger_module_1.SwaggerModule.setup('api', app, document, {
            swaggerOptions: {
                filter: true,
                docExpansion: "none",
                displayRequestDuration: true
            }
        });
        await app.listen(PORT);
        const url = await app.getUrl();
        logger.verbose(`Server run on: ${url}`);
        logger.verbose(`Api documentation run on: ${url}/api`);
    }
    catch (error) {
        logger.error(`❌ ${error.message}`);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map