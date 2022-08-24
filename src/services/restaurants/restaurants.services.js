var camelize = require("camelize");
import { mocks, mockImages } from "../mock";

export const restaurentsReaquest = (location) => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            console.log("request not found");
        }
        resolve(mock);
    });
};

export const restaurantsTransform = ({ results = [] }) => {
    const mapedResults = results.map((restaurant) => {
        restaurant.photos = restaurant.photos.map((p) => {
            return mockImages[
                Math.ceil(Math.random() * (mockImages.length - 1))
            ];
        });
        return {
            ...restaurant,
            address: restaurant.vicinity,
            isOpenNow:
                restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily:
                restaurant.business_status === "CLOSED_TEMPORARILY",
        };
    });

    return camelize(mapedResults);
};
