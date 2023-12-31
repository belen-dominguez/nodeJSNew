import path from "path";
import { cartItems } from "../data/cartItems.js";

const viewsPath = path.resolve() + "/src/views/shop";
import { sliderItems } from "../data/sliderItems.js";

export class shopController {
  constructor() {}

  shopGet(req, res) {
    res.render(path.join(viewsPath, "shop.ejs"), {});
  }

  itemIdGet(req, res) {
    res.render(path.join(viewsPath, "item.ejs"), {
      sliderItems: sliderItems,
    });
  }

  shopCartGet(req, res) {
    res.render(path.join(viewsPath, "cart.ejs"), { cartItems });
  }

  itemIdAddPost(req, res) {
    res.send("Route for add the current item to the shop cart ");
  }

  shopCartPost(req, res) {
    res.send("Route for go to checkout page");
  }
}
