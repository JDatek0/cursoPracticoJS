const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamb = document.querySelector('.menuHamb');
const mobileMenu = document.querySelector('.mobile-menu');
const shoopingCartContainer = document.querySelector('#shoopingCartContainer');
const shoopingCartIcon = document.querySelector('.navbar-shooping-cart');
const cardContainer = document.querySelector('.card-container');
const productDetailContainer = document.querySelector('#productDetail');
const closeProductDetail = document.querySelector('.product-detail-close'); 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamb.addEventListener('click', toggleMobileMenu);
shoopingCartIcon.addEventListener('click',toogleCarritoshoopingCartContainer);
closeProductDetail.addEventListener('click', closeProductDetailAside);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function toggleDesktopMenu(){
    const isCarritoshoopingCartContainerOpen = !shoopingCartContainer.classList.contains('inactive');
    const isProductDetailContainerOpen = !productDetailContainer.classList.contains('inactive');
    if(isCarritoshoopingCartContainerOpen || isProductDetailContainerOpen ){
        shoopingCartContainer.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isCarritoshoopingCartContainerOpen = !shoopingCartContainer.classList.contains('inactive');
    const isProductDetailContainerOpen = !productDetailContainer.classList.contains('inactive');

    if(isCarritoshoopingCartContainerOpen || isProductDetailContainerOpen){
        shoopingCartContainer.classList.add('inactive')
        productDetailContainer.classList.add('inactive');

    }
    mobileMenu.classList.toggle('inactive');
}

function toogleCarritoshoopingCartContainer(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    const isProductDetailAsideOpen = !productDetailContainer.classList.contains('inactive');

    if(isMobileMenuOpen || isDesktopMenuOpen || isProductDetailAsideOpen){
        mobileMenu.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
        
        desktopMenu.classList.add('inactive');
    }
    shoopingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    const isCarritoshoopingCartContainerOpen = !shoopingCartContainer.classList.contains('inactive');

    if(isMobileMenuOpen || isDesktopMenuOpen || isCarritoshoopingCartContainerOpen ){
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        shoopingCartContainer.classList.add('inactive');
    }

    
    productDetailContainer.classList.remove('inactive');
}
function  closeProductDetailAside(){

    productDetailContainer.classList.add('inactive');
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
productList=[];

productList.push({
    name:'Bike',
    price:'1200',
    image:'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

productList.push({
    name:'Mobile',
    price:'1200',
    image:'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?cs=srgb&dl=pexels-tyler-lastovich-699122.jpg&fm=jpg'
})

productList.push({
    name:'Scissors',
    price:'20',
    image:'https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4226896.jpg&fm=jpg'
})

productList.push({
    name:'Box',
    price:'70',
    image:'https://images.pexels.com/photos/5953555/pexels-photo-5953555.jpeg?cs=srgb&dl=pexels-anna-shvets-5953555.jpg&fm=jpg'
})

productList.push({
    name:'Microphone',
    price:'500',
    image:'https://images.pexels.com/photos/2097428/pexels-photo-2097428.jpeg?cs=srgb&dl=pexels-lucas-pereira-2097428.jpg&fm=jpg'
})


productList.push({
    name:'Shoes',
    price:'400',
    image:'https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?cs=srgb&dl=pexels-shane-aldendorff-786003.jpg&fm=jpg'
})

productList.push({
    name:'Wins',
    price:'1000000',
    image:'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?cs=srgb&dl=pexels-pixabay-260024.jpg&fm=jpg'
})


/* <div class="product-card">
<img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagen product" class="product-img">

<div class="product-info">
    <div>
        <p>$120.00</p>
        <p>Round shelf</p>

    </div>
    
    <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="icono de carrito">

    </figure>

</div>



</div> */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function renderProducts(arr){
    for (product of arr){

    
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
    
        const productDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText='$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productDiv.append(productPrice,productName);
    
        const productFigure = document.createElement('figure');
    
        const figureImage = document.createElement('img')
        figureImage.setAttribute('src','./icons/bt_add_to_cart.svg') 
         
        productFigure.appendChild(figureImage);
    
        productInfo.append(productDiv,productFigure);
        productCard.append(productImg,productInfo);
    
        cardContainer.appendChild(productCard)
    }
}


renderProducts(productList);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////