// Cofee: price_1Nbst5SGQohrqPBVdStDNXKw
// Sunglasses: price_1NbsugSGQohrqPBVfxHP1TUV
// Camera: price_1NbsvfSGQohrqPBV1OBv3aia

const productsArray = [


    {
        id: "price_1Nc1ITFAEcGZNgNh8ogsTl4W",
        title: "Coffee",
        price: 4.99

    },
    {
        id: "pprice_1Nc1JWFAEcGZNgNhoUKsG70A",
        title: "Sunglasses",
        price: 9.99

    },
    {
        id: "price_1Nc1K5FAEcGZNgNhbBTZtHON",
        title: "Camera",
        price: 39.99

    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }
    return productData;
}

export { productsArray, getProductData };