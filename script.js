const loadAllProducts = async() => {

    const response = await fetch("https://fakestoreapi.com/products")

    const data =await response.json();

    return data;
    /* here data is returned so i can use it anywhere i want  */
}