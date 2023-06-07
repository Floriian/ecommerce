export * from "./products";
export * from "./manufacturer";
export * from "./order";
export interface BaseQuery<T> {
  data: T;
}

export interface BaseEntity {
  _id: string;
}
