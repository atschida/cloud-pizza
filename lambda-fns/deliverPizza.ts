export const deliverPizza = async function(address: String) {
    console.log("Requested Delivery to Address :", JSON.stringify(address, undefined, 2));
    return {'address': address, deliveryDriver: assignDeliveryDriver(address)}
}

const assignDeliveryDriver = (address: String): String => {
    // In a real implmentation, we would perform logic to find an unassigned delivery driver who is familiar with
    // the area around the address - for now let's assume we only have one delivery driver whose name is Mike
    return 'Mike';
}

exports.handler = deliverPizza;