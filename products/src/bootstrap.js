import faker from 'faker';


const mount = (htmlElement) => {

  let products = '';

  for (let i = 0; i < 10; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  return htmlElement.innerHTML = products;
}

if (process.env.NODE_ENV === 'development') {
  const element = document.querySelector('#products');

  if (element) {
    mount(element);
  }
}

export { mount };
