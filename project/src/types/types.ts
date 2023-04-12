type CardsType = {
    id: number;
    type: string;
    price: string;
    description: string;
    img: string;
}[];

type CardType = {
    key: number;
    type: string;
    img: string;
    price: string;
    description: string;
}

export type { CardsType, CardType }
