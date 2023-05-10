import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { ReviewModel } from "../../../Interfaces/product.interface";

export interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    review: ReviewModel
}