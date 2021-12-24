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
exports.OrganizationsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const organization_entity_1 = require("./entities/organization.entity");
const uuid_1 = require("uuid");
let OrganizationsService = class OrganizationsService {
    constructor(organizationRepository) {
        this.organizationRepository = organizationRepository;
    }
    create(createOrganizationDto) {
        createOrganizationDto.id = uuid_1.v4();
        return this.organizationRepository.save(createOrganizationDto);
    }
    async findAll() {
        return await this.organizationRepository.find({
            order: { name: 'ASC' },
        });
    }
    update(id, updateOrganizationDto) {
        return this.organizationRepository.update(id, updateOrganizationDto);
    }
    remove(id) {
        return this.organizationRepository.delete(id);
    }
};
OrganizationsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(organization_entity_1.Organization)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrganizationsService);
exports.OrganizationsService = OrganizationsService;
//# sourceMappingURL=organizations.service.js.map