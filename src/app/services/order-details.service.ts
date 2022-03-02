import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }


  // fooddetails 
  
  foodDetails = [
    {
      id:1,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Pan-fried masala paneer.",
      foodPrice:200,
      foodImg:"https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JpbGxlZCUyMHNhbmR3aWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:2,
      foodName:"Veggie Supreme",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice:369,
      foodImg:"https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:3,
      foodName:"Paneer Burger",
      foodDetails:"panner",
      foodPrice:149,
      foodImg:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:4,
      foodName:"Veg Masala Roll In Naan",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice:140,
      foodImg:"https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/z/x/p5882-15676066695d6fc78df2819.jpg?tr=tr:n-xlarge"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      foodPrice:105,
      foodImg:"https://images.unsplash.com/photo-1611060516311-84aab2454de8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aW5kdWxnZW5jZSUyMGJyb3duaWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo ice cream",
      foodPrice:219,
      foodImg:"https://images.unsplash.com/photo-1565899947426-b2424039f921?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b3JlbyUyMCUyMGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
  ]



}
