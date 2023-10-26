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
  tenantRoles: ['Business Owner', 'Inventory Manager', 'Sales Representative'],
  tenantName: 'Organization',
  applicationName: 'Inventory Management System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read product information',
    'Read organization information',
    'Make sales',
    'Read own user information',
  ],
  ownerAbilities: ['Manage users', 'Manage organizations', 'Manage products', 'Manage sales'],
  getQuoteUrl: 'https://app.roq.ai/proposal/f7080ba1-c003-4441-8996-d61fe74dd7d6',
};
