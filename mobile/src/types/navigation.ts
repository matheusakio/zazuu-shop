export type RootAuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type RootAppTabsParamList = {
  HomeTab: undefined;
  CreateProductTab: undefined;
  ProfileTab: undefined;
};

export type RootAppStackParamList = {
  Tabs: undefined;
  ProductDetails: {
    productId: string;
  };
  EditProduct: {
    productId: string;
  };
};
