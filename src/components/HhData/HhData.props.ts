import { DetailedHTMLProps, HTMLAttributes} from "react";

export interface HhDataProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    count:number;
    juniorSalary: string;
    middleSalary: string;
    seniorSalary:string;
}