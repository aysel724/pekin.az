// ************  Cookies to save Items in Cart *****************

function addItemToCart(document, ID) {
    var inputID = "input_" + ID
    var inputValue = document.getElementById(inputID).value
    console.log(inputValue, ID);
    document.cookie = `${ID}=${inputValue};path=/;max-age=604800`
}

function checkCookies() {
    var allCookies = document.cookie.split('; ').reduce((prev, current) => {
        const [name, ...value] = current.split('=');
        prev[name] = value.join('=');
        return prev;
    }, {});
    for (const [item, qty] of Object.entries(allCookies)) {
        console.log(`${item}: ${qty}`);
    }


}

checkCookies();
