const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const addtocartBtn = document.getElementById('add-to-cart-btn');
const cartcounter = document.getElementById('cart-counter');

const beforeprice = document.getElementById('beforeprice');
const afterprice = document.getElementById('afterprice');

const product_image = document.getElementById('product_image');

const image1 = document.getElementById('image_1');
const image2 = document.getElementById('image_2');
const image3 = document.getElementById('image_3');
const image4 = document.getElementById('image_4');

const brandtitle= document.getElementById('brandtitle');
const producttitle= document.getElementById('producttitle');

const orderimage = document.getElementById('orderimage');

let counter = 0;
let counterofcart = 0;

// To increment the value of counter
incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
    beforeprice.innerHTML =  "<span class=\"line-through\">"+ counter*38000 +"</span> <span class=\"text-sm font-normal line-through\">DA</span>";
    afterprice.innerHTML = counter*31500+"0 <span class=\"text-xl font-normal\">DA</span>";
    
});
 
// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
    if(counter > 0){
        counter--;
        beforeprice.innerHTML =  "<span class=\"line-through\">"+ counter*38000 +"</span> <span class=\"text-sm font-normal line-through\">DA</span>";
        afterprice.innerHTML = counter*31500+"0 <span class=\"text-xl font-normal\">DA</span>";
    }
    counterValue.innerHTML = counter;
    
});


// To add the value of counter to cart
addtocartBtn.addEventListener('click', () => {
    counterofcart=counterofcart+counter;
    cartcounter.innerHTML = counterofcart;
    
    
} );


// To change the image of the product
image1.addEventListener('click', () => {
    product_image.src = "../Assets/best-product/B1-1.png";
    orderimage.src = "../Assets/best-product/B1-1.png";
   
    brandtitle.innerHTML = "Dolce&Gabanna";
    producttitle.innerHTML = "The Only One";
    ordertitle.innerHTML = "The Only One";
} );
image2.addEventListener('click', () => {
    product_image.src = "../Assets/best-product/B4-2.png";
    orderimage.src = "../Assets/best-product/B4-2.png";
    
    brandtitle.innerHTML = "Mugler";
    producttitle.innerHTML = "Aura";
    ordertitle.innerHTML = "Aura";
} );
image3.addEventListener('click', () => {
    product_image.src = "../Assets/best-product/B2-1.png";
    orderimage.src = "../Assets/best-product/B2-1.png";
    brandtitle.innerHTML = "Psco Rabanne";
    producttitle.innerHTML = "Olmpea";
    ordertitle.innerHTML = "Olmpea";
} );
image4.addEventListener('click', () => {
    product_image.src = "../Assets/best-product/B3-1.png";
    orderimage.src = "../Assets/best-product/B3-1.png";
    brandtitle.innerHTML = "Calvin Klein";
    producttitle.innerHTML = "Eternity";
    ordertitle.innerHTML = "Eternity";
} );
 
