import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ProductModel } from "../../../Interfaces/product.interface";

export interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    product: ProductModel;
}