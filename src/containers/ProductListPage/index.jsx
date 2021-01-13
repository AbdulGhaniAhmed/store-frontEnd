import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../actions";
import Layout from "../../components/Layout";
import { generatePublicURL } from "../../urlConfig";
import "./style.css";

/**
 * @author
 * @function ProductListPage
 **/

const ProductListPage = (props) => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { match } = props;
  useEffect(() => {
    dispatch(getProductsBySlug(match.params.slug));
  }, []);

  const [priceRange, setPriceRange] = useState({
    under5k:5000,
    under10k:10000,
    under15k:15000,
    under20k:20000,
    under25k:25000
  })

  return (
    <Layout>
      {
      Object.keys(product.productsByPrice).map((key, index) => {
        return (
          <div className="card">
            <div className="cardHeader">
              <div>{match.params.slug} mobile {priceRange[key]}</div>
              <button>view all</button>
            </div>
            <div style={{display:'flex'}}>
              {
              product.productsByPrice[key].map(product => 
                <div className="productContainer">
                  <div className="productImgContainer">
                    <img
                      src={generatePublicURL(product.productPic[0].img)}
                      alt=""
                    />
                  </div>
                  <div className="productInfo">
                    <div style={{ margin: "5px 0" }}>{product.name}</div>
                    <div>
                      <span>4.3</span>&nbsp;
                      <span>3353</span>
                    </div>
                    <div className="productPrice">{product.price}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })
      }
    </Layout>
  );
};

export default ProductListPage;
