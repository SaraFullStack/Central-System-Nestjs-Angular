import { CreateOrganizationDto } from './create-organization.dto';
declare const UpdateOrganizationDto_base: import("@nestjs/common").Type<Partial<CreateOrganizationDto>>;
export declare class UpdateOrganizationDto extends UpdateOrganizationDto_base {
    readonly name: string;
    readonly legalEntity: string;
}
export {};
