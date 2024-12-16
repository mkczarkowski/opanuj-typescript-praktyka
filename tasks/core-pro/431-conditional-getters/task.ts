type Order = {
  id: number;
  date: Date;
  items: string[];
};

type APIClient = {
  getOrder: (id: number) => Order;
  getOrders: () => Order[];
  createOrder: (order: Order) => Order;
  updateOrder: (order: Order) => Order;
  deleteOrder: (id: number) => void;
};

type JustGetters<T> = T;

type APIClientGetters = JustGetters<APIClient>;

function deleteById(client: APIClientGetters, id: number) {
  // @ts-expect-error
  client.deleteOrder(id);
}

export function getAllOrders(client: APIClientGetters) {
  return client.getOrders();
}
