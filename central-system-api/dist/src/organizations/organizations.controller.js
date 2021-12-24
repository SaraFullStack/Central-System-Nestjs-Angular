"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationsController = void 0;
const common_1 = require("@nestjs/common");
const organizations_service_1 = require("./organizations.service");
const create_organization_dto_1 = require("./dto/create-organization.dto");
const update_organization_dto_1 = require("./dto/update-organization.dto");
const swagger_1 = require("@nestjs/swagger");
const organization_entity_1 = require("./entities/organization.entity");
let OrganizationsController = class OrganizationsController {
    constructor(organizationsService) {
        this.organizationsService = organizationsService;
    }
    create(createOrganizationDto) {
        return this.organizationsService.create(createOrganizationDto);
    }
    async findAll() {
        return await this.organizationsService.findAll();
    }
    update(id, updateOrganizationDto) {
        return this.organizationsService.update(id, updateOrganizationDto);
    }
    remove(id) {
        return this.organizationsService.remove(id);
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ description: 'Create New Organization' }),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.CREATED,
        description: 'Create successfully',
        type: organization_entity_1.Organization,
    }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_organization_dto_1.CreateOrganizationDto]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({ description: 'Search Charge Points' }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.CREATED, description: 'Create successfully', type: organization_entity_1.Organization }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrganizationsController.prototype, "findAll", null);
__decorate([
    common_1.Put(':id'),
    swagger_1.ApiOperation({ description: 'Update Charge Point' }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.ACCEPTED, description: 'Update successfully' }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_organization_dto_1.UpdateOrganizationDto]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    swagger_1.ApiOperation({ description: 'Delete Charge Point' }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.ACCEPTED, description: 'Delete successfully' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "remove", null);
OrganizationsController = __decorate([
    swagger_1.ApiTags('Organizations'),
    common_1.Controller('organizations'),
    __metadata("design:paramtypes", [organizations_service_1.OrganizationsService])
], OrganizationsController);
exports.OrganizationsController = OrganizationsController;
//# sourceMappingURL=organizations.controller.js.map