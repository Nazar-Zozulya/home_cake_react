import { ProductCard } from "../../../../shared/ProductCard/ProductCard";
import "./Assortment.css"



export function Assortment(){


    return (
        <div className="Assortment">
            <p className="assortmentTitle">Наш асортимент</p>
            <div className="assortmentList">
                <ProductCard key={1} id={1} image={'12312'} name="123" price={1231} composition="sfsdfkmskdmfmksdkfmsmkdlf" weight={12312} kilocalories={1231231} ></ProductCard>
                <ProductCard key={1} id={1} image={'12312'} name="123" price={1231} composition="sfsdfkmskdmfmksdkfmsmkdlf" weight={12312} kilocalories={1231231} ></ProductCard>
                <ProductCard key={1} id={1} image={'12312'} name="123" price={1231} composition="sfsdfkmskdmfmksdkfmsmkdlf" weight={12312} kilocalories={1231231} ></ProductCard>
            </div>
        </div>
    )
}