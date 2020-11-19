import {
  ContentItem,
  Elements,
  TypeResolver,
  DeliveryClient,
} from "@kentico/kontent-delivery";

declare global {
  interface Window {
    manipulator: () => void;
  }
}

/**
 * Best practice so you can leverage intellisense and so that
 * you can extend your models with additional properties/ methods
 */
export class Cafe extends ContentItem {
  public title!: Elements.TextElement;
}

const deliveryClient = new DeliveryClient({
  projectId: "b61a77df-b2e3-0095-a454-64ffc39d06d3",
  typeResolvers: [new TypeResolver("cafe", () => new Cafe())],
});

/** Getting items from Kentico Kontent as a Promise */

/** Getting items from Kentico Kontent as Observable??? */
export const getAllCafes = async () => {
  const cafeList = await deliveryClient
    .items<Cafe>()
    .type("cafe")
    .toPromise()
    .then((response) => {
      const cafeText = response.items;
      return cafeText;
    });
  return cafeList;
};

// getAllCafes();

// setTimeout(() => {
//   console.log;
// }, 1000);
