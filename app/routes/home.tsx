import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';
// import { table } from 'console';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

const PRODUCTS = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];

function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

function ProductTable({ products }) {
  const categories = [...new Set(products.map((x) => x.category))];
  const rows = [];

  categories.forEach((c) => {
    rows.push(<ProductCategoryRow category={c} key={c} />);
    products
      .filter((p) => p.category === c)
      .forEach((p) => {
        rows.push(<ProductRow product={p} key={p.name} />);
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
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" /> Only show products in stock
      </label>
    </form>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: 'red' }}>{product.name}</span>
  );
  console.log(name);
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
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
      <FilterableProductTable products={PRODUCTS} />
    </>
  );
}
