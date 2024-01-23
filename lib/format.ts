export const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-UK", {
        style: "currency",
        currency: "NGN"
    }).format(price)
}
