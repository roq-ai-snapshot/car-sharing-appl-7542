import { BookingInterface } from 'interfaces/booking';
import { ReviewInterface } from 'interfaces/review';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  model: string;
  manufacturer: string;
  year: number;
  color?: string;
  registration_number: string;
  mileage?: number;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  review?: ReviewInterface[];
  company?: CompanyInterface;
  _count?: {
    booking?: number;
    review?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  model?: string;
  manufacturer?: string;
  color?: string;
  registration_number?: string;
  company_id?: string;
}
