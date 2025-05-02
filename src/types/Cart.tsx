export interface Cart {
  [id: number]: {
    name: string;
    count: number;
    price: number;
  };
}
