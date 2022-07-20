import { faker } from "@faker-js/faker";

const menusi = [...Array(10)].map(() => ({
    id: faker.database.mongodbObjectId(),
    name: faker.name.firstName(),
    avatar: faker.image.avatar(),
    food: faker.image.food(360, 234, true),
    price: faker.commerce.price(100, 1000, 2, "$"),
}));

export default menusi;