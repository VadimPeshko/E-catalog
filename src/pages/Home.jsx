import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/products";

import Header from "../components/Header";
import Main from "../components/Main";
import Slider from "../components/Slider";

const Home = () => {

  const dispatch = useDispatch();
  const { category, search } = useSelector(({category}) => category);
  
  useEffect(() => {
    dispatch(fetchProducts(category, search))
  }, [category, search])

  return (
    <>
      <Header />
      <Slider />
      <Main />
    </>
  )
}

export default Home;