export interface ReviewProps {
  review: {
    _id: string;
    productId: string;
    userId: string;
    comment?: string;
    rating?: number;
  };
}

export interface ProductReviewCardProps {
  _id: string;
  rating: number;
  userId: {
    name: {
      firstName: string;
      lastName: string;
    };
    email: string;
  };
  createdAt: string;
  comment: string;
}
