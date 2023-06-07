export * from "./products";
export * from "./manufacturer";

export interface BaseQuery<T> {
  data: T;
}

export interface BaseEntity {
  _id: string;
}
