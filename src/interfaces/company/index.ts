import { CarInterface } from 'interfaces/car';
import { TeamMemberInterface } from 'interfaces/team-member';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  established_date?: any;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  car?: CarInterface[];
  team_member?: TeamMemberInterface[];

  _count?: {
    car?: number;
    team_member?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  name?: string;
  tenant_id?: string;
}
