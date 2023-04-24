type CardsType = {
    id: number;
    type: string;
    price: string;
    description: string;
    img: string;
}[];

type CardType = {
    id: number;
    type: string;
    img: string;
    price: string;
    description: string;
}

type City = {
    title: string,
    lat: number,
    lng: number,
    zoom: number,
}

type Points = {
    title: string,
    lat: number,
    lng: number
}[];

type Point = {
    title: string,
    lat: number,
    lng: number
};

export type { CardsType, CardType, City, Points, Point };
