import { Organization } from 'src/organizations/entities/organization.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ChargePoint {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    nullable: false,
  })
  identity: string;

  @ManyToOne(() => Organization, { eager: true })
  cpo: Organization;
}
