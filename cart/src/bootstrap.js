import faker from "faker";

const mount = (htmlElement) => {

  const cartNode = `<div>You have ${faker.datatype.number()} items in your cart</div>`;

  return htmlElement.innerHTML = cartNode;
}

if (process.env.NODE_ENV === 'development') {
  const element = document.querySelector('#cart');

  if (element) {
    mount(element);
  }
}

export { mount };
