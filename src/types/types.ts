export type MenuType = {
    id: string
    slug: string
    title: string
    img?: string
    desc?: string
    color: string
}[];

export type ProductType = {
    id: string
    title: string
    img?: string
    desc?: string
    price: number
    options?: { title: string, additionalPrice: number }[];
};