import { InventoryInterface } from 'interfaces/inventory';
import { SalesInterface } from 'interfaces/sales';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  quantity: number;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  inventory?: InventoryInterface[];
  sales?: SalesInterface[];
  organization?: OrganizationInterface;
  _count?: {
    inventory?: number;
    sales?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  organization_id?: string;
}
