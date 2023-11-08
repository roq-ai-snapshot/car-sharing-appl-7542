interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal user information',
    'Book a car',
    'Review a car after booking',
    'View car, company, and team member information',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage company information',
    'Manage car information',
    'Manage bookings',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/a8792d93-dbc4-437a-ab7e-29a39879cdd1',
};
