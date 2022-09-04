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
    const menu =document.getElementById('all-menu')

    const uniqueArray =[]
for (const product of data ){



 if(uniqueArray.indexOf(product.category) === -1){
    uniqueArray.push(product.category);
    const li = document.createElement('li');

    li.innerHTML =`
    
    <a>${product.category}</a>
   
    `
    menu.appendChild(li)
 }

}
 
}

setAllMenu() 


const  searchfield =document.getElementById('search-field');

searchfield.addEventListener('keypress', async(Event) => {
   
    if(Event.key === 'Enter'){
     
const searchvalue = searchfield.value;

const allProduct = await loadAllProducts()

const FoundProducts = allProduct.filter(product => product.category.includes(searchvalue));

const productcontainer = document.getElementById('products-container')

FoundProducts.forEach(product => {
   
    const div =document.createElement('div')

    div.innerHTML= `
    <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    
    `
    productcontainer.appendChild(div)
})


    }
})
