const loadAllProducts = async() => {

    const response = await fetch("https://fakestoreapi.com/products")

    const data =await response.json();

    return data;
    /* here data is returned so i can use it anywhere i want  async await return data but fetch dont  */
}

const setAllMenu = async () =>{
    // console.log(loadAllProducts) here you will not get the data bcz promise is not resolved . below  the promise is resolved 
    // loadAllProducts()
    // .then(data => console.log(data))

    const data = await loadAllProducts();

    


}

setAllMenu() 

setAllMenu();