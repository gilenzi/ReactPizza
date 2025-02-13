import {useLoaderData} from 'react-router-dom';
import PizzaCard from '../../ui/pizza-card/pizza-card';

export interface IMenuItem {
  id: number;
  name: string;
  unitPrice: number;
  soldOut: boolean;
  imageUrl: string;
  ingredients: string[];
}

export default function Menu() {
  const {data: menu} = useLoaderData();

  const menuCards = menu.map((menuItem: IMenuItem) => (
    <PizzaCard key={menuItem.id} data={menuItem} />
  ));
  return <ul>{menuCards}</ul>;
}
