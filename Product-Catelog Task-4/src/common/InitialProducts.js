import Shoes from "../assets/images/shoes.jpeg";
import Dress from "../assets/images/dress.jpeg";
import TShirt from "../assets/images/t-shirt.jpeg";
import Phone from "../assets/images/phone.jpeg";
import Goggles from "../assets/images/goggles.jpeg";

export default function InitialProducts() {
    return [
        {
            key: 1,
            name:'Shoes',
            price:800,
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            photo: Shoes,
            category: 'FOOTWEAR',
            modifiedDate: new Date().toLocaleString(),
            quantity: 60,
            manufacturer: 'TATA'
        },
        {
            key: 2,
            name:'TShirt',
            price:250,
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            photo: TShirt,
            category: 'APPAREL',
            modifiedDate: new Date().toLocaleString(),
            quantity: 150,
            manufacturer: 'TATA'
        },
        {
            key: 3,
            name:'Phone',
            price:60000,
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            photo: Phone,
            category: 'ELECTRONICS',
            modifiedDate: new Date().toLocaleString(),
            quantity: 300,
            manufacturer: 'TATA'
        },
        {
            key: 4,
            name:'Dress',
            price:300,
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            photo: Dress,
            category: 'PERSONAL CARE',
            modifiedDate: new Date().toLocaleString(),
            quantity: 150,
            manufacturer: 'TATA'
        },
        {
            key: 5,
            name:'Goggles',
            price:600,
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            photo: Goggles,
            category: 'FOOTWEAR',
            modifiedDate: new Date().toLocaleString(),
            quantity: 60,
            manufacturer: 'TATA'
        }
    ];
}