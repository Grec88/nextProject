import { TopLevelCategory, TopPageModel } from "../../Interfaces/page.interface";
import { ProductModel } from "../../Interfaces/product.interface";

export interface TopPageComponentProps extends Record<string, unknown> {
    firstCategory: TopLevelCategory;
    page: TopPageModel;
    products: ProductModel[];
}