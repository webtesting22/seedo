import RC001 from "/Images/ProductsImages/RC Car/118RC001.png"
import SC001_124 from "/Images/ProductsImages/RC Car/124SC001(red).png"
import LRC00D from "/Images/ProductsImages/RC Car/124LRC00D.png"
import LRC00E from "/Images/ProductsImages/RC Car/124LRC00E(orange).png"
import RC00127MHz from "/Images/ProductsImages/RC Car/116RC001-27MHz.png"
import RC00124GHz from "/Images/ProductsImages/RC Car/116RC001-2.4GHz(blue).png"
import MT003 from "/Images/ProductsImages/RC Car/118MT003.png"
import MT003_2 from "/Images/ProductsImages/RC Car/118MT003(2).png"
import SMRFWPBP3 from "/Images/ProductsImages/Metal x Racer/FireBirdsSeries/SMR-FWPB-P3.png"
import PNGSSPO9 from "/Images/ProductsImages/Friction and pull back products/PNG-SS-PO9.png"
import PNGSSPO9_2 from "/Images/ProductsImages/Friction and pull back products/PNG-SS-PO9(2).png"
import PNGSSPO9_3 from "/Images/ProductsImages/Friction and pull back products/PNG-SS-PO9(3).png"
import RoadSniper1 from "../assets/MultipleViewImages/RoadSniper1.png"
import RoadSniper2 from "../assets/MultipleViewImages/RoadSniper2(red).png"
import RoadSniper01 from "../assets/MultipleViewImages/RoadSniper01.png"
import RoadSniper02 from "../assets/MultipleViewImages/RoadSniper02.png"
import BlazeRunner1 from "../assets/MultipleViewImages/BlazeRunner1(blue).png"
import BlazeRunner2 from "../assets/MultipleViewImages/BlazeRunner2(red).png"
import LuxuriousCar1 from "../assets/MultipleViewImages/LuxuriousCar1(orange).png"
import LuxuriousCar2 from "../assets/MultipleViewImages/LuxuriousCar2.png"
const BestSellerProducts = {
    "BestSeller": {
        products: [
            {
                id: 1,
                name: "Blaze Runner Car",
                ProductBatteryType: "Rechargable",
                ProductImage: [
                    RC001, BlazeRunner1, BlazeRunner2
                ],
                ProductStyleCode: "118RC001",
                link: "singleproduct/Remote%20Controlled%20Cars/4",
                colorCode: "#A9FE28"
            },
            {
                id: 2,
                name: "Stunt Car",
                ProductBatteryType: "Rechargable",
                ProductImage: [
                    SC001_124
                ],
                ProductStyleCode: "124SC001",
                link: "singleproduct/Remote%20Controlled%20Cars/14",
                colorCode: "#EC5444"
            },
            {
                id: 3,
                name: "Road Sniper 01 Car",
                ProductBatteryType: "Rechargable",
                ProductImage: [
                    LRC00D, RoadSniper01, RoadSniper02
                ],
                ProductStyleCode: "124LRC00D",
                link: "singleproduct/Remote%20Controlled%20Cars/10",
                colorCode: "#6798E5"

            },
            {
                id: 4,
                name: "Road Sniper 02 Car",
                ProductBatteryType: "Rechargable",
                ProductImage: [
                    LRC00E, RoadSniper1, RoadSniper2,
                ],
                ProductStyleCode: "124LRC00E",
                link: "singleproduct/Remote%20Controlled%20Cars/11",
                colorCode: "#F9A760"
            },

            {
                id: 6,
                name: "Luxurious Sports Car 2.4GHz",
                ProductBatteryType: "Rechargable",
                ProductImage: [
                    RC00124GHz
                ],
                ProductStyleCode: "116RC001/2.4GHz",
                link: "singleproduct/Remote%20Controlled%20Cars/25",
                colorCode: "#9A9AB5"


            },
            {
                id: 7,
                name: "Dino/Shark/PVC Rock Crawler",
                ProductBatteryType: "Rechargable",
                ProductImage: [
                    MT003, MT003_2
                ],
                ProductStyleCode: "118MT003",
                link: "singleproduct/Remote%20Controlled%20Cars/21",
                colorCode: "#6BCE52"
            },
            {
                id: 8,
                name: "Metal Racers Pack of 3",
                ProductImage: [
                    SMRFWPBP3
                ],
                ProductBatteryType: "Non-Electric",
                ProductCode: "SMR-FWPB-P3",
                link: "singleproduct/Metal%20Die%20Cast%20Cars/73",
                colorCode: "#44A5DA"
            },
            {
                id: 9,
                name: "Space Series",
                ProductImage: [
                    PNGSSPO9, PNGSSPO9_2, PNGSSPO9_3
                ],
                ProductCode: "PNG-SS-PO9",
                link: "singleproduct/Friction,%20Pull%20Back,%20Press%20&%20Go%20Toys/78",
                colorCode: "#2F66C6"
            },
            {
                id: 5,
                name: "Luxurious Sports Car 27 MHz",
                ProductBatteryType: "Rechargable",
                ProductImage: [
                    RC00127MHz, LuxuriousCar1, LuxuriousCar2
                ],
                ProductStyleCode: "116RC001/27MHz",
                link: "singleproduct/Remote%20Controlled%20Cars/26",
                colorCode: "#FFA573"
            },
        ]
    }
}
export default BestSellerProducts