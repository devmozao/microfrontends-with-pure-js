import { mount as RenderProducts } from "products/ProductsIndex";
import { mount as RenderCart } from "cart/CartShow";

const productsElement = document.querySelector('#remote-products')
const cartElement = document.querySelector('#remote-cart')

RenderProducts(productsElement);
RenderCart(cartElement);
