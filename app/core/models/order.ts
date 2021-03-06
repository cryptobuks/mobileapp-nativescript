import { Address } from "./address";
import { LineItem } from "./line_item";
import { Payment } from "./payment";

export class Order {
  id: number;
  number: string;
  item_total: string;
  total: string;
  ship_total: string;
  state: string;
  adjustment_total: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  completed_at: string;
  payment_total: string;
  shipment_state: string;
  payment_state: string;
  email: string;
  special_instructions: string;
  channel: string;
  included_tax_total: string;
  additional_tax_total: string;
  display_included_tax_total: string;
  display_additional_tax_total: string;
  tax_total: string;
  currency: string;
  considered_risky: boolean;
  canceler_id: string;
  total_quantity: string;
  token: string;
  bill_address: [Address];
  ship_address: Address;
  line_items: [LineItem];
  payments: [Payment];
  display_total: string;
}

// NOTE: This just mimics the serializer exposed in the API
// Not sure if it is required, review it in APRIL
// tslint:disable-next-line:max-classes-per-file
export class LightOrder {
  number: string;
  payment_state: string;
  completed_at: string;
  state: string;
  total: string;
  shipment_state: string;
}
