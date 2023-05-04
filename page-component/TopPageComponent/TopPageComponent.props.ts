import { TopLevelCategory, TopPageModel } from "../../Interfaces/page.interface";
import { ProductModel } from "../../Interfaces/product.interface";

export interface TopPageComponentProps {
    firstCategory: TopLevelCategory;
    page: TopPageModel;
    products: ProductModel[];
}