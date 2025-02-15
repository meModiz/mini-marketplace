export type Seller = {
  uid: string;
  photoURL: string;
  displayName: string;
};

export type Listing = {
  id: string;
  name: string;
  price: number;
  seller: Seller;
  imagesURL: string[];
};
