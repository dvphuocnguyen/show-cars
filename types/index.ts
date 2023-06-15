import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnTypes: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisable?: boolean;
}   

export interface SeachMenuFeatureProps {
    menufeature: string;
    setMenuFeature: (menufeature: string ) => void;
}


export interface CarProps {
    city_mpg: number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number}