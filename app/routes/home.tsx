import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';
// import { table } from 'console';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

const data = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];

function FilterableProductTable() {
  return (
    <div>
      <SearchBar />
      <ProductTable />
    </div>
  );
}

function ProductTable() {
  const categories = [...new Set(data.map((x) => x.category))];
  // console.log(categories);
  const body = [];

  let keyIndex = 0;
  categories.forEach((c) => {
    body.push(<ProductCategoryRow category={c} id={c} />);

    data
      .filter((e) => e.category === c)
      .forEach((item) => {
        console.log(`${c}: ${item.name}`);
        body.push(
          <ProductRow product={item.name} price={item.price} id={item.name} />
        );
        keyIndex++;
      });
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  );
}

function SearchBar() {
  return <input type="text" />;
}

function ProductCategoryRow({ category, id }) {
  return (
    <tr key={id}>
      <td>{category}</td>
    </tr>
  );
}

function ProductRow({ product, price, id }) {
  return (
    <tr key={id}>
      <td>{product}</td>
      <td>{price}</td>
    </tr>
  );
}

export default function Home() {
  // return <Welcome />;
  return (
    <>
      <h1>Hello, world!</h1>
      <h2>Hello, world!</h2>
      <h3>Hello, world!</h3>
      <p>Hi</p>
      <FilterableProductTable />
    </>
  );
}
