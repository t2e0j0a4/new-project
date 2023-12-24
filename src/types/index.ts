import { IconType } from "react-icons"

export type SidebarMenuTypes = {
    id: number,
    path: string,
    title: string,
    icon: IconType,
    iconColor: string
}

export type ProductType = {
    id: number,
    articleNo: string,
    productName: string,
    inPrice: string,
    price: string,
    unit: string,
    inStock: string,
    description: string
}