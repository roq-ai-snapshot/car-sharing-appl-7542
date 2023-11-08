import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface TeamMemberInterface {
  id?: string;
  name: string;
  position: string;
  start_date?: any;
  end_date?: any;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  _count?: {};
}

export interface TeamMemberGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  position?: string;
  company_id?: string;
}
