export interface UpsertFromExtRatingData {
    type: string;
    rating: number;
    review?: string;
    extMediaId: string;
    user: { id: string };
}

export interface UpsertRatingData {
    type: string;
    rating: number;
    review?: string;
    media: { id: string };
    user: { id: string };
}

export interface Rating extends UpsertRatingData {
    id: string;
    timestamp: any;
}
