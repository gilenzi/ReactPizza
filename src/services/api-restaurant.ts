import { CartItem } from "../state/cart/cart-slice";

const API_URL = import.meta.env.VITE_API_URL;

export const getMenu = async () => {
  try {
    const res = await fetch(`${API_URL}/menu`);
    const menu = await res.json();

    if (!res.ok) {
      throw new Error("Faild to fetch menu.");
    }

    return menu;
  } catch (error) {
    console.log("Fetch menu error:", error);
  }
};

export interface NewOrder {
  address: string;
  cart: CartItem[];
  customer: string;
  phone: string;
  priority: boolean;
  position: string;
}

export const createNewOrder = async (newOrder: NewOrder) => {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(
        `Failed to create new order: ${res.statusText} ${res.status} `
      );
    }

    const { data } = await res.json();
    return data;
  } catch (error) {
    console.log("Creating order error:", error);
  }
};

export async function getOrder(id: string) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}
