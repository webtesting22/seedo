import { Link } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6";
import { SiMaterialdesignicons } from "react-icons/si";
import { GiLightningFrequency } from "react-icons/gi";
import { MdOutlineUsb } from "react-icons/md";
import { TbRulerMeasure } from "react-icons/tb";
import { TbBatteryOff } from "react-icons/tb";
import { IoMdBarcode } from "react-icons/io";
import { FaBoxOpen } from "react-icons/fa";


import FLGDSPO12 from "/Images/ProductsImages/Friction and pull back products/FLG-DS-PO12.png"
import FLGDSPO12_2 from "/Images/ProductsImages/Friction and pull back products/FLG-DS-PO12(2).png"
import MTToys from "/Images/ProductsImages/Friction and pull back products/MT-Toys.png"
import MTToys_2 from "/Images/ProductsImages/Friction and pull back products/MT-Toys(2).png"
import PNGBC from "/Images/ProductsImages/Friction and pull back products/PNG-BC.png"
import PNGBC_2 from "/Images/ProductsImages/Friction and pull back products/PNG-BC(2).png"
import PNGBC_3 from "/Images/ProductsImages/Friction and pull back products/PNG-BC(3).png"
import PNGBSS from "/Images/ProductsImages/Friction and pull back products/PNG-BS&S.png"
import PNGBSS_2 from "/Images/ProductsImages/Friction and pull back products/PNG-BS&S(2).png"
import PNGMC from "/Images/ProductsImages/Friction and pull back products/PNG-MC.png"
import PNGMC_2 from "/Images/ProductsImages/Friction and pull back products/PNG-MC(2).png"
import PNGMC_3 from "/Images/ProductsImages/Friction and pull back products/PNG-MC(3).png"
import PNGMC_4 from "/Images/ProductsImages/Friction and pull back products/PNG-MC(4).png"
import PNGMC_5 from "/Images/ProductsImages/Friction and pull back products/PNG-MC(5).png"
import PNGMC_6 from "/Images/ProductsImages/Friction and pull back products/PNG-MC(6).png"
import PNGSRPO12 from "/Images/ProductsImages/Friction and pull back products/PNG-SR-PO12.png"
import PNGSSPO9 from "/Images/ProductsImages/Friction and pull back products/PNG-SS-PO9.png"
import PNGSSPO9_2 from "/Images/ProductsImages/Friction and pull back products/PNG-SS-PO9(2).png"
import PNGSSPO9_3 from "/Images/ProductsImages/Friction and pull back products/PNG-SS-PO9(3).png"
import PNGToys from "/Images/ProductsImages/Friction and pull back products/PNG-Toys.png"
import PNGToys_2 from "/Images/ProductsImages/Friction and pull back products/PNG-Toys(2).png"
import SMRCSA016 from "/Images/ProductsImages/Metal x Racer/ConstructionSeries/SMR-CS-A01-6.png"
import SMRCSA026 from "/Images/ProductsImages/Metal x Racer/ConstructionSeries/SMR-CS-A02-6.png"
import SMRCSA036 from "/Images/ProductsImages/Metal x Racer/ConstructionSeries/SMR-CS-A03-6.png"
import SMRCSA046 from "/Images/ProductsImages/Metal x Racer/ConstructionSeries/SMR-CS-A04-6.png"
import SMRCSA056 from "/Images/ProductsImages/Metal x Racer/ConstructionSeries/SMR-CS-A05-6.png"
import SMRCSA066 from "/Images/ProductsImages/Metal x Racer/ConstructionSeries/SMR-CS-A06-6.png"
import SMRPBSA016 from "/Images/ProductsImages/Metal x Racer/PullBackSeries/SMR-PBS-A01-6.png"
import SMRPBSA026 from "/Images/ProductsImages/Metal x Racer/PullBackSeries/SMR-PBS-A02-6.png"
import SMRPBSA036 from "/Images/ProductsImages/Metal x Racer/PullBackSeries/SMR-PBS-A03-6.png"
import SMRPBSA046 from "/Images/ProductsImages/Metal x Racer/PullBackSeries/SMR-PBS-A04-6.png"
import SMRPBSA056 from "/Images/ProductsImages/Metal x Racer/PullBackSeries/SMR-PBS-A05-6.png"
import SMRPBSA066 from "/Images/ProductsImages/Metal x Racer/PullBackSeries/SMR-PBS-A06-6.png"
import SMRFWCS014 from "/Images/ProductsImages/Metal x Racer/CruiserSeries/SMR-FW-CS01-4.png"
import SMRFWCS024 from "/Images/ProductsImages/Metal x Racer/CruiserSeries/SMR-FW-CS02-4.png"
import SMRFWCS034 from "/Images/ProductsImages/Metal x Racer/CruiserSeries/SMR-FW-CS03-4.png"
import SMRFWCS044 from "/Images/ProductsImages/Metal x Racer/CruiserSeries/SMR-FW-CS04-4.png"
import SMRFWDS016 from "/Images/ProductsImages/Metal x Racer/DriftSeries/SMR-FW-DS01-6.png"
import SMRFWDS026 from "/Images/ProductsImages/Metal x Racer/DriftSeries/SMR-FW-DS02-6.png"
import SMRFWDS036 from "/Images/ProductsImages/Metal x Racer/DriftSeries/SMR-FW-DS03-6.png"
import SMRFWDS046 from "/Images/ProductsImages/Metal x Racer/DriftSeries/SMR-FW-DS04-6.png"
import SMRFWDS056 from "/Images/ProductsImages/Metal x Racer/DriftSeries/SMR-FW-DS05-6.png"
import SMRFWDS066 from "/Images/ProductsImages/Metal x Racer/DriftSeries/SMR-FW-DS06-6.png"
import SMRFWRS016 from "/Images/ProductsImages/Metal x Racer/RacingSeries/SMR-FW-RS01-6.png"
import SMRFWRS026 from "/Images/ProductsImages/Metal x Racer/RacingSeries/SMR-FW-RS02-6.png"
import SMRFWRS036 from "/Images/ProductsImages/Metal x Racer/RacingSeries/SMR-FW-RS03-6.png"
import SMRFWRS046 from "/Images/ProductsImages/Metal x Racer/RacingSeries/SMR-FW-RS04-6.png"
import SMRFWRS056 from "/Images/ProductsImages/Metal x Racer/RacingSeries/SMR-FW-RS05-6.png"
import SMRFWRS066 from "/Images/ProductsImages/Metal x Racer/RacingSeries/SMR-FW-RS06-6.png"
import SMRFWJS018 from "/Images/ProductsImages/Metal x Racer/JetSeries/SMR-FW-JS01-8.png"
import SMRFWJS028 from "/Images/ProductsImages/Metal x Racer/JetSeries/SMR-FW-JS02-8.png"
import SMRFWJS038 from "/Images/ProductsImages/Metal x Racer/JetSeries/SMR-FW-JS03-8.png"
import SMRFWJS048 from "/Images/ProductsImages/Metal x Racer/JetSeries/SMR-FW-JS04-8.png"
import SMRFWJS058 from "/Images/ProductsImages/Metal x Racer/JetSeries/SMR-FW-JS05-8.png"
import SMRFWJS068 from "/Images/ProductsImages/Metal x Racer/JetSeries/SMR-FW-JS06-8.png"
import SMRFWJS078 from "/Images/ProductsImages/Metal x Racer/JetSeries/SMR-FW-JS07-8.png"
import SMRFWJS088 from "/Images/ProductsImages/Metal x Racer/JetSeries/SMR-FW-JS08-8.png"
import SMRFWFBS018 from "/Images/ProductsImages/Metal x Racer/FireBirdsSeries/SMR-FW-FBS01-8.png"
import SMRFWFBS028 from "/Images/ProductsImages/Metal x Racer/FireBirdsSeries/SMR-FW-FBS02-8.png"
import SMRFWFBS038 from "/Images/ProductsImages/Metal x Racer/FireBirdsSeries/SMR-FW-FBS03-8.png"
import SMRFWFBS048 from "/Images/ProductsImages/Metal x Racer/FireBirdsSeries/SMR-FW-FBS04-8.png"
import SMRFWFBS058 from "/Images/ProductsImages/Metal x Racer/FireBirdsSeries/SMR-FW-FBS05-8.png"
import SMRFWFBS068 from "/Images/ProductsImages/Metal x Racer/FireBirdsSeries/SMR-FW-FBS06-8.png"
import SMRFWFBS078 from "/Images/ProductsImages/Metal x Racer/FireBirdsSeries/SMR-FW-FBS07-8.png"
import SMRFWFBS088 from "/Images/ProductsImages/Metal x Racer/FireBirdsSeries/SMR-FW-FBS08-8.png"
import SMRFWPBP3 from "/Images/ProductsImages/Metal x Racer/FireBirdsSeries/SMR-FWPB-P3.png"
import SMRFWPBP5 from "/Images/ProductsImages/Metal x Racer/FireBirdsSeries/SMR-FWPB-P5.png"
import SMRFWPBP10 from "/Images/ProductsImages/Metal x Racer/FireBirdsSeries/SMR-FWPB-P10.png"
import Cube from "/Images/ProductsImages/EasyLearningToys/Cube.png"
import SLTBB001 from "/Images/ProductsImages/EasyLearningToys/SLT-BB-001.png"
import SLTPP001 from "/Images/ProductsImages/EasyLearningToys/SLT-PP-001.png"
import SLTTT001 from "/Images/ProductsImages/EasyLearningToys/SLT-TT-001.png"
import Walker from "/Images/ProductsImages/EasyLearningToys/Walker.png"
import RC00124GHz from "/Images/ProductsImages/RC Car/116RC001-2.4GHz.png"
import RC00127MHz from "/Images/ProductsImages/RC Car/116RC001-27MHz.png"
import RC00224GHz from "/Images/ProductsImages/RC Car/116RC002-2.4GHz.png"
import RC00227MHz from "/Images/ProductsImages/RC Car/116RC002-27MHz.png"
import RC003 from "/Images/ProductsImages/RC Car/116RC003.png"
import RC003_2 from "/Images/ProductsImages/RC Car/116RC003 (2).png"
import SC001 from "/Images/ProductsImages/RC Car/116SC001.png"
import SC002 from "/Images/ProductsImages/RC Car/116SC002.png"
import SC003 from "/Images/ProductsImages/RC Car/116SC003.png"
import BC023 from "/Images/ProductsImages/RC Car/118BC023.png"
import MT001 from "/Images/ProductsImages/RC Car/118MT001.png"
import MT002 from "/Images/ProductsImages/RC Car/118MT002.png"
import MT002_2 from "/Images/ProductsImages/RC Car/118MT002 (2).png"
import MT003 from "/Images/ProductsImages/RC Car/118MT003.png"
import MT003_2 from "/Images/ProductsImages/RC Car/118MT003(2).png"
import MT003G from "/Images/ProductsImages/RC Car/118MT003G.png"
import MT003S from "/Images/ProductsImages/RC Car/118MT003S.png"
import RC001 from "/Images/ProductsImages/RC Car/118RC001.png"
import RC003_118 from "/Images/ProductsImages/RC Car/118RC003.png"
import SC001_118 from "/Images/ProductsImages/RC Car/118SC001.png"
import LRC00A from "/Images/ProductsImages/RC Car/124LRC00A.png"
import LRC00B from "/Images/ProductsImages/RC Car/124LRC00B.png"
import LRC00C from "/Images/ProductsImages/RC Car/124LRC00C.png"
import LRC00D from "/Images/ProductsImages/RC Car/124LRC00D.png"
import LRC00E from "/Images/ProductsImages/RC Car/124LRC00E.png"
import PRC001 from "/Images/ProductsImages/RC Car/124PRC001.png"
import RC001_124 from "/Images/ProductsImages/RC Car/124RC001.png"
import SC001_124 from "/Images/ProductsImages/RC Car/124SC001.png"
import W001 from "/Images/ProductsImages/RC Car/1182W001.png"
import W001_2 from "/Images/ProductsImages/RC Car/1182W001 (2).png"
import W002 from "/Images/ProductsImages/RC Car/1182W002.png"
import W003 from "/Images/ProductsImages/RC Car/1182W003.png"
import STDR001 from "/Images/ProductsImages/RC Car/STDR001.png"
const SEEDOData = [
    {
        ProductTitle: "Light & Gear - Dino and Snail",
        ProductImage: [
            FLGDSPO12,
            FLGDSPO12_2,

        ],
        ProductCategories: "Friction & Pull back + Press & Go",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "-",
        ProductStyleCode: "FLG-DS-PO12"
    },
    {
        ProductTitle: "Space Rocket",
        ProductImage: [
            PNGSRPO12,
        ],
        ProductCategories: "Friction & Pull back + Press & Go",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "-",
        ProductStyleCode: "PNG-SR-PO12"
    },
    {
        ProductTitle: "Space series",
        ProductImage: [
            PNGSSPO9, PNGSSPO9_2, PNGSSPO9_3
        ],
        ProductCategories: "Friction & Pull back + Press & Go",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "-",
        ProductStyleCode: "PNG-SS-PO9"
    },
    {
        ProductTitle: "Press N Go - Battle Ship and Snail",
        ProductImage: [
            PNGBSS, PNGBSS_2
        ],
        ProductCategories: "Friction & Pull back + Press & Go",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "-",
        ProductStyleCode: "PNG-BS&S"
    },
    {
        ProductTitle: "Press N Go - Construction Toys",
        ProductImage: [
            PNGBC, PNGBC_2, PNGBC_3
        ],
        ProductCategories: "Friction & Pull back + Press & Go",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "-",
        ProductStyleCode: "PNG-BC"
    },
    {
        ProductTitle: "Press N Go Boat Toys",
        ProductImage: [
            PNGToys, PNGToys_2
        ],
        ProductCategories: "Friction & Pull back + Press & Go",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "-",
        ProductStyleCode: "PNG-Toys"
    },
    {
        ProductTitle: "Monster Tumble",
        ProductImage: [
            MTToys, MTToys_2
        ],
        ProductCategories: "Friction & Pull back + Press & Go",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "-",
        ProductStyleCode: "MT-Toys"
    },
    {
        ProductTitle: "Mini Construction",
        ProductImage: [
            PNGMC, PNGMC_2, PNGMC_3, PNGMC_4, PNGMC_5, PNGMC_6
        ],
        ProductCategories: "Friction & Pull back + Press & Go",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "-",
        ProductStyleCode: "PNG-MC"
    },
    {
        ProductTitle: "SMR Construction Series-A01/6",
        ProductImage: [
            SMRCSA016
        ],
        ProductCategories: "Construction Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-CS-A01/6",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Construction Series-A02/6",
        ProductImage: [
            SMRCSA026
        ],
        ProductCategories: "Construction Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-CS-A02/6",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Construction Series-A03/6",
        ProductImage: [
            SMRCSA036
        ],
        ProductCategories: "Construction Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-CS-A03/6",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Construction Series-A04/6",
        ProductImage: [
            SMRCSA046
        ],
        ProductCategories: "Construction Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-CS-A04/6",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Construction Series-A05/6",
        ProductImage: [
            SMRCSA056
        ],
        ProductCategories: "Construction Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-CS-A05/6",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Construction Series-A06/6",
        ProductImage: [
            SMRCSA066
        ],
        ProductCategories: "Construction Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-CS-A06/6",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Pull Back Series-A01/6",
        ProductImage: [
            SMRPBSA016
        ],
        ProductCategories: "Pull Back Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-PBS-A01/6",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Pull Back Series-A02/6",
        ProductImage: [
            SMRPBSA026
        ],
        ProductCategories: "Pull Back Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-PBS-A02/6",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Pull Back Series-A03/6",
        ProductImage: [
            SMRPBSA036
        ],
        ProductCategories: "Pull Back Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-PBS-A03/6",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Pull Back Series-A04/6",
        ProductImage: [
            SMRPBSA046
        ],
        ProductCategories: "Pull Back Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-PBS-A04/6",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Pull Back Series-A05/6",
        ProductImage: [
            SMRPBSA056
        ],
        ProductCategories: "Pull Back Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-PBS-A05/6",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Pull Back Series-A06/6",
        ProductImage: [
            SMRPBSA066
        ],
        ProductCategories: "Pull Back Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-PBS-A06/6",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Cruiser Series-CS01/4",
        ProductImage: [
            SMRFWCS014
        ],
        ProductCategories: "Cruiser Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-CS01/4",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Cruiser Series-CS02/4",
        ProductImage: [
            SMRFWCS024
        ],
        ProductCategories: "Cruiser Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-CS02/4",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Cruiser Series-CS03/4",
        ProductImage: [
            SMRFWCS034
        ],
        ProductCategories: "Cruiser Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-CS03/4",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Cruiser Series-CS04/4",
        ProductImage: [
            SMRFWCS044
        ],
        ProductCategories: "Cruiser Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-CS04/4",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Drift Series-DS01/6",
        ProductImage: [
            SMRFWDS016
        ],
        ProductCategories: "Drift Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-DS01/6",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Drift Series-DS02/6",
        ProductImage: [
            SMRFWDS026
        ],
        ProductCategories: "Drift Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-DS02/6",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Drift Series-DS03/6",
        ProductImage: [
            SMRFWDS036
        ],
        ProductCategories: "Drift Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-DS03/6",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Drift Series-DS04/6",
        ProductImage: [
            SMRFWDS046
        ],
        ProductCategories: "Drift Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-DS04/6",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Drift Series-DS05/6",
        ProductImage: [
            SMRFWDS056
        ],
        ProductCategories: "Drift Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-DS05/6",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Drift Series-DS06/6",
        ProductImage: [
            SMRFWDS066
        ],
        ProductCategories: "Drift Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-DS06/6",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Racing Series-RS01/6",
        ProductImage: [
            SMRFWRS016
        ],
        ProductCategories: "Racing Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-RS01/6",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Racing Series-RS02/6",
        ProductImage: [
            SMRFWRS026
        ],
        ProductCategories: "Racing Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-RS02/6",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Racing Series-RS03/6",
        ProductImage: [
            SMRFWRS036
        ],
        ProductCategories: "Racing Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-RS03/6",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Racing Series-RS04/6",
        ProductImage: [
            SMRFWRS046
        ],
        ProductCategories: "Racing Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-RS04/6",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Racing Series-RS05/6",
        ProductImage: [
            SMRFWRS056
        ],
        ProductCategories: "Racing Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-RS05/6",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Racing Series-RS06/6",
        ProductImage: [
            SMRFWRS066
        ],
        ProductCategories: "Racing Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-RS06/6",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Jet Series-JS01/8",
        ProductImage: [
            SMRFWJS018
        ],
        ProductCategories: "Jet Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-JS01/8",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Jet Series-JS02/8",
        ProductImage: [
            SMRFWJS028
        ],
        ProductCategories: "Jet Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-JS02/8",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Jet Series-JS03/8",
        ProductImage: [
            SMRFWJS038
        ],
        ProductCategories: "Jet Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-JS03/8",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Jet Series-JS04/8",
        ProductImage: [
            SMRFWJS048
        ],
        ProductCategories: "Jet Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-JS04/8",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Jet Series-JS05/8",
        ProductImage: [
            SMRFWJS058
        ],
        ProductCategories: "Jet Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-JS05/8",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Jet Series-JS06/8",
        ProductImage: [
            SMRFWJS068
        ],
        ProductCategories: "Jet Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-JS06/8",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Jet Series-JS07/8",
        ProductImage: [
            SMRFWJS078
        ],
        ProductCategories: "Jet Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-JS07/8",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Jet Series-JS08/8",
        ProductImage: [
            SMRFWJS088
        ],
        ProductCategories: "Jet Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-JS08/8",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Fire Birds Series-FBS01/8",
        ProductImage: [
            SMRFWFBS018
        ],
        ProductCategories: "Fire Birds Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-FBS01/8",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    },
    {
        ProductTitle: "SMR Fire Birds Series-FBS02/8",
        ProductImage: [
            SMRFWFBS028
        ],
        ProductCategories: "Fire Birds Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-FBS02/8",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Fire Birds Series-FBS03/8",
        ProductImage: [
            SMRFWFBS038
        ],
        ProductCategories: "Fire Birds Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-FBS03/8",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Fire Birds Series-FBS04/8",
        ProductImage: [
            SMRFWFBS048
        ],
        ProductCategories: "Fire Birds Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-FBS04/8",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Fire Birds Series-FBS05/8",
        ProductImage: [
            SMRFWFBS058
        ],
        ProductCategories: "Fire Birds Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-FBS05/8",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Fire Birds Series-FBS06/8",
        ProductImage: [
            SMRFWFBS068
        ],
        ProductCategories: "Fire Birds Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-FBS06/8",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Fire Birds Series-FBS07/8",
        ProductImage: [
            SMRFWFBS078
        ],
        ProductCategories: "Fire Birds Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-FBS07/8",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SMR Fire Birds Series-FBS08/8",
        ProductImage: [
            SMRFWFBS088
        ],
        ProductCategories: "Fire Birds Series",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FW-FBS08/8",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Packing options</p>
                        </div>
                        <div>
                            <p>Pack of 1/3/5/10</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>72 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Metal Racers Pack of 3",
        ProductImage: [
            SMRFWPBP3
        ],
        ProductCategories: "Pack of 3",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FWPB-P3",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Content</p>
                        </div>
                        <div>
                            <p>5 Cars</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>32 pcs in the box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Metal Racers Pack of 5",
        ProductImage: [
            SMRFWPBP5
        ],
        ProductCategories: "Pack of 5",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FWPB-P5",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Content</p>
                        </div>
                        <div>
                            <p>3 Cars</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>25 pcs in the box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Metal Racers Pack of 10",
        ProductImage: [
            SMRFWPBP10
        ],
        ProductCategories: "Pack of 10",
        ProductWheelWay: "-",
        ProductBatteryType: "-",
        ProductElectricType: "Non-Electric",
        ProductStyleCode: "SMR-FWPB-P10",
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Metal Die Cast</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:64
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030090</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Content</p>
                        </div>
                        <div>
                            <p>10 Cars</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>10 pcs in the box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Light Blaster Car",
        ProductImage: [
            W001, W001_2
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "2way",
        ProductBatteryType: "Non - Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "1182W001",
        ProductColours: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Orange</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Red</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Yellow</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Green</p>
                </div>
            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Rubber tires</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Moves 2 Way</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Head Lights</p>
                </div>
            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Virgin grade, High Strenght ABS Material</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><GiLightningFrequency />&nbsp;&nbsp;Frequency</p>
                        </div>
                        <div>
                            <p>27 MHz</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><MdOutlineUsb />&nbsp;&nbsp;USB Included</p>
                        </div>
                        <div>
                            <p>No</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:18
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbBatteryOff />&nbsp;&nbsp;Non rechargable</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030030</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>48 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Famous Car",
        ProductImage: [
            W002
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "2way",
        ProductBatteryType: "Non - Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "1182W002",
        ProductColours: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Orange</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Red</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Yellow</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Green</p>
                </div>
            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Rubber tires</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Moves 2 Way</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Head Lights</p>
                </div>
            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Virgin grade, High Strenght ABS Material</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><GiLightningFrequency />&nbsp;&nbsp;Frequency</p>
                        </div>
                        <div>
                            <p>27 MHz</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><MdOutlineUsb />&nbsp;&nbsp;USB Included</p>
                        </div>
                        <div>
                            <p>No</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:18
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbBatteryOff />&nbsp;&nbsp;Non rechargable</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030030</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>48 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Formula Car",
        ProductImage: [
            W003
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "2way",
        ProductBatteryType: "Non - Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "1182W003",
        ProductColours: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Orange</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Red</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Yellow</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Green</p>
                </div>
            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Rubber tires</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Moves 2 Way</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Head Lights</p>
                </div>
            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Virgin grade, High Strenght ABS Material</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><GiLightningFrequency />&nbsp;&nbsp;Frequency</p>
                        </div>
                        <div>
                            <p>27 MHz</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><MdOutlineUsb />&nbsp;&nbsp;USB Included</p>
                        </div>
                        <div>
                            <p>No</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:18
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbBatteryOff />&nbsp;&nbsp;Non rechargable</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030030</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>48 pcs./box</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Racer Car",
        ProductImage: [
            LRC00A
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "4way",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "124LRC00A",
        ProductColours: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Orange</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Red</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Blue</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Yellow</p>
                </div>
            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Rubber tires</p>
                </div>
                <div>
                    <img src="/Images/Move4Way.png" alt="404 not found" />
                    <p>Moves 4 Way</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Head Lights</p>
                </div>
            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Virgin grade, High Strenght ABS Material</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><GiLightningFrequency />&nbsp;&nbsp;Frequency</p>
                        </div>
                        <div>
                            <p>27 MHz</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><MdOutlineUsb />&nbsp;&nbsp;USB Included</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:24
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbBatteryOff />&nbsp;&nbsp;Type C Charging</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030030</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>48 pcs./box</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Battery cell type</p>
                        </div>
                        <div>
                            <p>3.7V Li-ion Rechargeable Battery</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Little Roaster Car",
        ProductImage: [
            LRC00B
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "4way",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "124LRC00B",
        ProductColours: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Gray</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Red</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>White</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Yellow</p>
                </div>
            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Rubber tires</p>
                </div>
                <div>
                    <img src="/Images/Move4Way.png" alt="404 not found" />
                    <p>Moves 4 Way</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Head Lights</p>
                </div>
            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Virgin grade, High Strenght ABS Material</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><GiLightningFrequency />&nbsp;&nbsp;Frequency</p>
                        </div>
                        <div>
                            <p>27 MHz</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><MdOutlineUsb />&nbsp;&nbsp;USB Included</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:24
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbBatteryOff />&nbsp;&nbsp;Type C Charging</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030030</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>48 pcs./box</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Battery cell type</p>
                        </div>
                        <div>
                            <p>3.7V Li-ion Rechargeable Battery</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Spectre Car",
        ProductImage: [
            LRC00C
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "4way",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "124LRC00C",
        ProductColours: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Blue</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Red</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Orange</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Yellow</p>
                </div>
            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Rubber tires</p>
                </div>
                <div>
                    <img src="/Images/Move4Way.png" alt="404 not found" />
                    <p>Moves 4 Way</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Head Lights</p>
                </div>
            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Virgin grade, High Strenght ABS Material</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><GiLightningFrequency />&nbsp;&nbsp;Frequency</p>
                        </div>
                        <div>
                            <p>27 MHz</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><MdOutlineUsb />&nbsp;&nbsp;USB Included</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:24
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbBatteryOff />&nbsp;&nbsp;Type C Charging</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030030</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>48 pcs./box</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Battery cell type</p>
                        </div>
                        <div>
                            <p>3.7V Li-ion Rechargeable Battery</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Road Sniper 01 Car",
        ProductImage: [
            LRC00D
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "4way",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "124LRC00D",
        ProductColours: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Blue</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Red</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Grey</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Black</p>
                </div>
            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Rubber tires</p>
                </div>
                <div>
                    <img src="/Images/Move4Way.png" alt="404 not found" />
                    <p>Moves 4 Way</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Head Lights</p>
                </div>
            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Virgin grade, High Strenght ABS Material</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><GiLightningFrequency />&nbsp;&nbsp;Frequency</p>
                        </div>
                        <div>
                            <p>27 MHz</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><MdOutlineUsb />&nbsp;&nbsp;USB Included</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:24
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbBatteryOff />&nbsp;&nbsp;Type C Charging</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030030</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>48 pcs./box</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Battery cell type</p>
                        </div>
                        <div>
                            <p>3.7V Li-ion Rechargeable Battery</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Road Sniper 02 Car",
        ProductImage: [
            LRC00E
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "4way",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "124LRC00E",
        ProductColours: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Blue</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Red</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Yellow</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Orange</p>
                </div>
            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Rubber tires</p>
                </div>
                <div>
                    <img src="/Images/Move4Way.png" alt="404 not found" />
                    <p>Moves 4 Way</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Head Lights</p>
                </div>
            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Virgin grade, High Strenght ABS Material</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><GiLightningFrequency />&nbsp;&nbsp;Frequency</p>
                        </div>
                        <div>
                            <p>27 MHz</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><MdOutlineUsb />&nbsp;&nbsp;USB Included</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:24
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbBatteryOff />&nbsp;&nbsp;Type C Charging</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030030</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>48 pcs./box</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Battery cell type</p>
                        </div>
                        <div>
                            <p>3.7V Li-ion Rechargeable Battery</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },

    {
        ProductTitle: "SEEDO Blaze Runner Car",
        ProductImage: [
            RC001
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "4way",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "118RC001",
        ProductColours: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Blue</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Red</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Green</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Yellow</p>
                </div>
            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Rubber tires</p>
                </div>
                <div>
                    <img src="/Images/Move4Way.png" alt="404 not found" />
                    <p>Moves 4 Way</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Head Lights</p>
                </div>
            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Virgin grade, High Strenght ABS Material</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><GiLightningFrequency />&nbsp;&nbsp;Frequency</p>
                        </div>
                        <div>
                            <p>27 MHz</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><MdOutlineUsb />&nbsp;&nbsp;USB Included</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:24
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbBatteryOff />&nbsp;&nbsp;Type C Charging</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030030</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>48 pcs./box</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Battery cell type</p>
                        </div>
                        <div>
                            <p>3.7V Li-ion Rechargeable Battery</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Blaster 023 Car",
        ProductImage: [
            BC023
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "4way",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "118BC023"
    },
    {
        ProductTitle: "SEEDO Famous 4W",
        ProductImage: [
            RC003_118
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "4way",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "118RC003"
    },
    {
        ProductTitle: "SEEDO Police Car",
        ProductImage: [
            PRC001
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "4way",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "124PRC001",
        ProductColours: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>White</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>black</p>
                </div>

            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Rubber tires</p>
                </div>
                <div>
                    <img src="/Images/Move4Way.png" alt="404 not found" />
                    <p>Moves 4 Way</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Head Lights</p>
                </div>
            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Virgin grade, High Strenght ABS Material</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><GiLightningFrequency />&nbsp;&nbsp;Frequency</p>
                        </div>
                        <div>
                            <p>27 MHz</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><MdOutlineUsb />&nbsp;&nbsp;USB Included</p>
                        </div>
                        <div>
                            <p>No</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:24
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbBatteryOff />&nbsp;&nbsp;Type C Charging</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030030</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>48 pcs./box</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Battery cell type</p>
                        </div>
                        <div>
                            <p>3.7V Li-ion Rechargeable Battery</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Stunt Car",
        ProductImage: [
            SC001_124
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "4way",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "124SC001",
        ProductColours: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Blue</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Red</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Yellow</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Green</p>
                </div>

            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Rubber tires</p>
                </div>
                <div>
                    <img src="/Images/Move4Way.png" alt="404 not found" />
                    <p>Moves 4 Way</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Action</p>
                </div>
            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Virgin grade, High Strenght ABS Material</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><GiLightningFrequency />&nbsp;&nbsp;Frequency</p>
                        </div>
                        <div>
                            <p>27 MHz</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><MdOutlineUsb />&nbsp;&nbsp;USB Included</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:24
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbBatteryOff />&nbsp;&nbsp;Type C Charging</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030030</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>48 pcs./box</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Battery cell type</p>
                        </div>
                        <div>
                            <p>3.7V Li-ion Rechargeable Battery</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Big Stunt Car",
        ProductImage: [
            SC001_118
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "4way",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "118SC001",
        ProductColours: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Sky Blue</p>
                </div>

                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Orange</p>
                </div>

            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Rubber tires</p>
                </div>
                <div>
                    <img src="/Images/Move4Way.png" alt="404 not found" />
                    <p>Moves 4 Way</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>360 Flip</p>
                </div>
            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Virgin grade, High Strenght ABS Material</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><GiLightningFrequency />&nbsp;&nbsp;Frequency</p>
                        </div>
                        <div>
                            <p>27 MHz</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><MdOutlineUsb />&nbsp;&nbsp;USB Included</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:18
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbBatteryOff />&nbsp;&nbsp;Type C Charging</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030030</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>48 pcs./box</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Battery cell type</p>
                        </div>
                        <div>
                            <p>3.7V Li-ion Rechargeable Battery</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Dazzling Car",
        ProductImage: [
            RC001_124
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "4way",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "124RC001",
        ProductColours: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p> Blue</p>
                </div>

                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Green</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Red</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Orange</p>
                </div>

            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Rubber tires</p>
                </div>
                <div>
                    <img src="/Images/Move4Way.png" alt="404 not found" />
                    <p>Moves 4 Way</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Lights</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Music</p>
                </div>
            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Virgin grade, High Strenght ABS Material</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><GiLightningFrequency />&nbsp;&nbsp;Frequency</p>
                        </div>
                        <div>
                            <p>27 MHz</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><MdOutlineUsb />&nbsp;&nbsp;USB Included</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:24
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbBatteryOff />&nbsp;&nbsp;Type C Charging</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030030</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>36 pcs./box</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Battery cell type</p>
                        </div>
                        <div>
                            <p>3.7V Li-ion Rechargeable Battery</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Monster Acrobatics Truck",
        ProductImage: [
            MT001
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "4way",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "118MT001"
    },
    {
        ProductTitle: "SEEDO Rock Crawler",
        ProductImage: [
            MT002, MT002_2
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "4way",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "118MT002",
        ProductColours: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p> Blue</p>
                </div>

                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Green</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Red</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Yellow</p>
                </div>

            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Rubber tires</p>
                </div>
                <div>
                    <img src="/Images/Move4Way.png" alt="404 not found" />
                    <p>Moves 4 Way</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Shock
                        Absorber</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Head Lights</p>
                </div>
            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Virgin grade, High Strenght ABS Material</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><GiLightningFrequency />&nbsp;&nbsp;Frequency</p>
                        </div>
                        <div>
                            <p>27 MHz</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><MdOutlineUsb />&nbsp;&nbsp;USB Included</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:18
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbBatteryOff />&nbsp;&nbsp;Type C Charging</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030030</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>24 pcs./box</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Battery cell type</p>
                        </div>
                        <div>
                            <p>3.7V Li-ion Rechargeable Battery</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Dino/Shark/PVC Rock Crawler",
        ProductImage: [
            MT003, MT003_2
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "4way",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "118MT003",
        ProductColours: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p> Blue</p>
                </div>

                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Green</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Red</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Yellow</p>
                </div>

            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Rubber tires</p>
                </div>
                <div>
                    <img src="/Images/Move4Way.png" alt="404 not found" />
                    <p>Moves 4 Way</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Shock
                        Absorber</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Shell Lights</p>
                </div>
            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>PVC</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><GiLightningFrequency />&nbsp;&nbsp;Frequency</p>
                        </div>
                        <div>
                            <p>2.4 MHz</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><MdOutlineUsb />&nbsp;&nbsp;USB Included</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:18
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbBatteryOff />&nbsp;&nbsp;Type C Charging</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030030</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>24 pcs./box</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Battery cell type</p>
                        </div>
                        <div>
                            <p>3.7V Li-ion Rechargeable Battery</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Gun Rock Crawler",
        ProductImage: [
            MT003G
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "4way",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "118MT003G",
        ProductColours: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p> Blue</p>
                </div>

                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Green</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Red</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Yellow</p>
                </div>

            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Rubber tires</p>
                </div>
                <div>
                    <img src="/Images/Move4Way.png" alt="404 not found" />
                    <p>Moves 4 Way</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Shock
                        Absorber</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Head Lights</p>
                </div>
            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>PVC</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><GiLightningFrequency />&nbsp;&nbsp;Frequency</p>
                        </div>
                        <div>
                            <p>2.4 MHz</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><MdOutlineUsb />&nbsp;&nbsp;USB Included</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:18
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbBatteryOff />&nbsp;&nbsp;Type C Charging</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030030</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>24 pcs./box</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Battery cell type</p>
                        </div>
                        <div>
                            <p>3.7V Li-ion Rechargeable Battery</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Smoke Rock Crawler",
        ProductImage: [
            MT003S
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "4way",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "118MT003S",
        ProductColours: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p> Blue</p>
                </div>

                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Green</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Red</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Yellow</p>
                </div>

            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Rubber tires</p>
                </div>
                <div>
                    <img src="/Images/Move4Way.png" alt="404 not found" />
                    <p>Moves 4 Way</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Shock
                        Absorber</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Head Lights</p>
                </div>
            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>PVC</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><GiLightningFrequency />&nbsp;&nbsp;Frequency</p>
                        </div>
                        <div>
                            <p>2.4 MHz</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><MdOutlineUsb />&nbsp;&nbsp;USB Included</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:18
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbBatteryOff />&nbsp;&nbsp;Type C Charging</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030030</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>24 pcs./box</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Battery cell type</p>
                        </div>
                        <div>
                            <p>3.7V Li-ion Rechargeable Battery</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Luxurious Sports  Car 27 MHz",
        ProductImage: [
            RC00127MHz
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "4way",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "116RC001/27MHz"
    },
    {
        ProductTitle: "SEEDO Luxurious Sports Car 2.4GHz",
        ProductImage: [
            RC00124GHz
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "4way",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "116RC001/2.4GHz",
        ProductColours: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Orange</p>
                </div>

                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>red</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Blue</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Yellow</p>
                </div>

            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Rubber tires</p>
                </div>
                <div>
                    <img src="/Images/Move4Way.png" alt="404 not found" />
                    <p>Moves 4 Way</p>
                </div>

                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Head Lights</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Tail Lights</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Metalic Finish</p>
                </div>
            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Virgin grade, High strenght ABS Material</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><GiLightningFrequency />&nbsp;&nbsp;Frequency</p>
                        </div>
                        <div>
                            <p>2.4 MHz</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><MdOutlineUsb />&nbsp;&nbsp;USB Included</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:16
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbBatteryOff />&nbsp;&nbsp;Type C Charging</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030030</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>18 pcs./box</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Battery cell type</p>
                        </div>
                        <div>
                            <p>3.7V Li-ion Rechargeable Battery</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    },
    {
        ProductTitle: "SEEDO Hyper Beast Car 27 MHz",
        ProductImage: [
            RC00227MHz
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "4way",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "116RC002/27MHz",
        ProductColours: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Grey</p>
                </div>

                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>red</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Blue</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Yellow</p>
                </div>

            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Rubber tires</p>
                </div>
                <div>
                    <img src="/Images/Move4Way.png" alt="404 not found" />
                    <p>Moves 4 Way</p>
                </div>

                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Head Lights</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Tail Lights</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Metalic Finish</p>
                </div>
            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Virgin grade, High strenght ABS Material</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><GiLightningFrequency />&nbsp;&nbsp;Frequency</p>
                        </div>
                        <div>
                            <p>2.4 MHz</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><MdOutlineUsb />&nbsp;&nbsp;USB Included</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:16
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbBatteryOff />&nbsp;&nbsp;Type C Charging</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030030</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>48 pcs./box</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Battery cell type</p>
                        </div>
                        <div>
                            <p>3.7V Li-ion Rechargeable Battery</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Hyper Beast Car 2.4GHz",
        ProductImage: [
            RC00224GHz
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "4way",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "116RC002/2.4GHz"
    },
    {
        ProductTitle: "SEEDO Thunder Bird Car",
        ProductImage: [
            RC003, RC003_2
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "4way",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "116RC003",
        ProductColours: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Black</p>
                </div>

                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Orange</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Yellow</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Red</p>
                </div>
                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Grey</p>
                </div>

            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Rubber tires</p>
                </div>
                <div>
                    <img src="/Images/Move4Way.png" alt="404 not found" />
                    <p>Moves 4 Way</p>
                </div>

                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Head & Tail Lights</p>
                </div>

                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Premium Look</p>
                </div>
            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Virgin grade, High strenght ABS Material</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><GiLightningFrequency />&nbsp;&nbsp;Frequency</p>
                        </div>
                        <div>
                            <p>2.4 MHz</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><MdOutlineUsb />&nbsp;&nbsp;USB Included</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:24
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbBatteryOff />&nbsp;&nbsp;Type C Charging</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030030</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>12 pcs./box</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Battery cell type</p>
                        </div>
                        <div>
                            <p>3.7V Li-ion Rechargeable Battery</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Twisting Stunt Car",
        ProductImage: [
            SC001
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "4way",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "116SC001",
        ProductColours: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Sky Blue</p>
                </div>

                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Orange</p>
                </div>


            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Rubber tires</p>
                </div>
                <div>
                    <img src="/Images/Move4Way.png" alt="404 not found" />
                    <p>Moves 4 Way</p>
                </div>

                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>360 Flip</p>
                </div>


            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Virgin grade, High strenght ABS Material</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><GiLightningFrequency />&nbsp;&nbsp;Frequency</p>
                        </div>
                        <div>
                            <p>2.4 MHz</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><MdOutlineUsb />&nbsp;&nbsp;USB Included</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:16
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbBatteryOff />&nbsp;&nbsp;Type C Charging</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030030</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>12 pcs./box</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Battery cell type</p>
                        </div>
                        <div>
                            <p>3.7V Li-ion Rechargeable Battery</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Twisting Drift Car",
        ProductImage: [
            SC003
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "4way",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "116SC003",
        ProductColours: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Sky Blue</p>
                </div>

                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Orange</p>
                </div>


            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Rubber tires</p>
                </div>
                <div>
                    <img src="/Images/Move4Way.png" alt="404 not found" />
                    <p>Moves 4 Way</p>
                </div>

                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>360 Flip</p>
                </div>


            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Virgin grade, High strenght ABS Material</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><GiLightningFrequency />&nbsp;&nbsp;Frequency</p>
                        </div>
                        <div>
                            <p>2.4 MHz</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><MdOutlineUsb />&nbsp;&nbsp;USB Included</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:16
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbBatteryOff />&nbsp;&nbsp;Type C Charging</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030030</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>12 pcs./box</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Battery cell type</p>
                        </div>
                        <div>
                            <p>3.7V Li-ion Rechargeable Battery</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Super Sonic Stunt Car",
        ProductImage: [
            SC002
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "4way",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "116SC002",
        ProductColours: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Red</p>
                </div>

                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Black</p>
                </div>


            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Foam tires</p>
                </div>
                <div>
                    <img src="/Images/Move4Way.png" alt="404 not found" />
                    <p>Stunt shots in various directions</p>
                </div>

                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Shock Absorber</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Stunt shot</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Durable</p>
                </div>


            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Virgin grade, High strenght ABS Material</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><GiLightningFrequency />&nbsp;&nbsp;Frequency</p>
                        </div>
                        <div>
                            <p>2.4 MHz</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><MdOutlineUsb />&nbsp;&nbsp;USB Included</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbRulerMeasure />&nbsp;&nbsp;Scale</p>
                        </div>
                        <div>
                            1:16
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><TbBatteryOff />&nbsp;&nbsp;Type C Charging</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030030</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>12 pcs./box</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Battery cell type</p>
                        </div>
                        <div>
                            <p>3.7V Li-ion Rechargeable Battery</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO 750 Drone",
        ProductImage: [
            STDR001
        ],
        ProductCategories: "RC Car",
        ProductWheelWay: "6way",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "STDR001",
        ProductColours: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Yellow</p>
                </div>

                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Green</p>
                </div>

                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>White</p>
                </div>


            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Stability</p>
                </div>
                <div>
                    <img src="/Images/Move4Way.png" alt="404 not found" />
                    <p>Premium Design</p>
                </div>

                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Collision Avoidance</p>
                </div>


            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Virgin grade, High strenght ABS Material</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><GiLightningFrequency />&nbsp;&nbsp;Frequency</p>
                        </div>
                        <div>
                            <p>2.4 MHz</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><MdOutlineUsb />&nbsp;&nbsp;USB Included</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p><TbBatteryOff />&nbsp;&nbsp;Type C Charging</p>
                        </div>
                        <div>
                            <p>Yes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030030</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>24 pcs./box</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Battery cell type</p>
                        </div>
                        <div>
                            <p>3.7V Li-ion Rechargeable Battery</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Brainy Bear",
        ProductImage: [
            SLTBB001,
        ],
        ProductCategories: "Early Learning Toys",
        ProductWheelWay: "_",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "SLT-BB-001",
        ProductColours: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Beige</p>
                </div>

                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Brown</p>
                </div>

                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>White</p>
                </div>



            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Rhymes</p>
                </div>
                <div>
                    <img src="/Images/Move4Way.png" alt="404 not found" />
                    <p>Record</p>
                </div>

                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Music</p>
                </div>


            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        {/* <div>
                            <p>1</p>
                        </div> */}
                        <div>
                            <p>1. Left Ear</p>
                        </div>
                    </div>
                    <div>
                        {/* <div>
                            <p>2</p>
                        </div> */}
                        <div>
                            <p>2. Right Ear</p>
                        </div>
                    </div>
                    <div>

                        <div>
                            <p>3. Left Eye brow</p>
                        </div>
                    </div>

                    <div>

                        <div>
                            <p>4. Right Eye brow</p>
                        </div>
                    </div>
                    <div>

                        <div>
                            <p>5. Left Eye</p>
                        </div>
                    </div>
                    <div>

                        <div>
                            <p>6. Right Right</p>
                        </div>
                    </div>
                    <div>

                        <div>
                            <p>7. Nose</p>
                        </div>
                    </div>
                    <div>

                        <div>
                            <p>8. Left Cheek</p>
                        </div>
                    </div>
                    <div>

                        <div>
                            <p>9. Voice Recording</p>
                        </div>
                    </div>
                    <div>

                        <div>
                            <p>10. Musical Ryhmes</p>
                        </div>
                    </div>
                    <div>

                        <div>
                            <p>11. Tail</p>
                        </div>
                    </div>
                    <div>

                        <div>
                            <p>12. Left Arm</p>
                        </div>
                    </div>
                    <div>

                        <div>
                            <p>13. Bely</p>
                        </div>
                    </div>
                    <div>

                        <div>
                            <p>14. Left Leg</p>
                        </div>
                    </div>
                    <div>

                        <div>
                            <p>15. Right Leg</p>
                        </div>
                    </div>
                    <div>

                        <div>
                            <p>16. Left Foot</p>
                        </div>
                    </div>
                    <div>

                        <div>
                            <p>17. Right Foot</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Pick and Pop",
        ProductImage: [
            SLTPP001,
        ],
        ProductCategories: "Early Learning Toys",
        ProductWheelWay: "_",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "SLT-PP-001",
        ProductColours: <>
            <div className="SpecsContainer">
                {/* <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Yellow</p>
                </div>

                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Green</p>
                </div>

                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>White</p>
                </div> */}


            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Fine Motor
                        Training</p>
                </div>
                <div>
                    <img src="/Images/Move4Way.png" alt="404 not found" />
                    <p>Touch Sense</p>
                </div>

                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Mad Music</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Limb Training</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Auditory Training</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Training
                        Visual Training</p>
                </div>


            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Virgin grade, High strenght ABS Material</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    },
    {
        ProductTitle: "SEEDO Techno Tutor",
        ProductImage: [
            SLTTT001,
        ],
        ProductCategories: "Early Learning Toys",
        ProductWheelWay: "_",
        ProductBatteryType: "Rechargable",
        ProductElectricType: "-",
        ProductStyleCode: "SLT-TT-001",
        ProductColours: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Pink</p>
                </div>

                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Yellow</p>
                </div>

                <div>
                    <img src="/Images/Move2Way.png" alt="404 not found" />
                    <p>Blue</p>
                </div>


            </div>
        </>,
        ProductSpecs: <>
            <div className="SpecsContainer">
                <div>
                    <img src="/Images/RubberTire.png" alt="404 not found" />
                    <p>Fine Motor
                        Training</p>
                </div>
                <div>
                    <img src="/Images/Move4Way.png" alt="404 not found" />
                    <p>Touch Sense</p>
                </div>

                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Mad Music</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Limb Training</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Auditory Training</p>
                </div>
                <div>
                    <img src="/Images/HeadLights.png" alt="404 not found" />
                    <p>Training
                        Visual Training</p>
                </div>


            </div>
        </>,
        ModalInfo: <>
            <div>
                <br />
                <div className="HrHeadingAnimated">
                    <h1 className="PrimaryHeading-black" style={{ marginBottom: "5px" }} >Product Specification </h1>
                    <hr />
                    {/* <p> <Link to="/products"> See All Toys &nbsp;</Link></p> */}
                </div>
                <div className="ProductSpecificationContainer">
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Say the letter</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Write the letter</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Press the correct letter</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Where is the letter</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Say the words</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Spelling test</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Press the correct word</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Find the word</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Say the number</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Write the number</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Press the correct number</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p> Find the number</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Play melody</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Play notes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Press the correct note</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p> Listen and find note</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p> Catch me</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Find the match pair</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Star shooting</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Draw a picture</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><SiMaterialdesignicons />&nbsp;&nbsp;Material Type</p>
                        </div>
                        <div>
                            <p>Virgin grade, High strenght ABS Material</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><IoMdBarcode />&nbsp;&nbsp;HSN Code</p>
                        </div>
                        <div>
                            <p>95030030</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><FaBoxOpen />&nbsp;&nbsp;Box Size</p>
                        </div>
                        <div>
                            <p>22 pcs per box</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    },
    {
        ProductTitle: "Cube",
        ProductImage: [Cube],
        ProductCategories: "Early Learning Toys",
        ProductWheelWay: "_",
        ProductBatteryType: "Colorful",
        ProductElectricType: "-",
        ProductStyleCode: "_"
    },
    {
        ProductTitle: "Walker",
        ProductImage: [Walker],
        ProductCategories: "Early Learning Toys",
        ProductWheelWay: "_",
        ProductBatteryType: "_",
        ProductElectricType: "-",
        ProductStyleCode: "_"
    },

]

export default SEEDOData