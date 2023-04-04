import { type } from "os";

type CardsType = {
    card: {
        id: number;
        type: string;
        price: string;
        description: string;
        img: string;
    }
}

export type { CardsType }
