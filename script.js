function productBoth(productList,increase){
    const productInput = document.getElementById(productList+"input")
    const productCount = parseInt(productInput.value)
    let productNewCount = productCount
    if(increase == true){
        productNewCount += 1
    }
    if(increase == false && productCount > 0){
        productNewCount -= 1
    }
    productInput.value = productNewCount
    productTotal = productNewCount * 44
    document.getElementById(productList+"product").innerText = productTotal
}