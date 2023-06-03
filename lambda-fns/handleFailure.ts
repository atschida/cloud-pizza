export const handleFailure = async function(containsPineapple: boolean) {
    console.log("Handling failure, containsPineapple :", JSON.stringify(containsPineapple, undefined, 2));
    contactSupport();

    return {'supportContacted': true}
}

function contactSupport() {
    // This is a stub method where we could make a call to contact support so they can get in touch with the customer
}

exports.handler = handleFailure;