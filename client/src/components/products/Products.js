import React,{useEffect, useState} from 'react'
import './product.css'
import axios from 'axios'
import Prod from './Prod';
import InfiniteScroll from 'react-infinite-scroll-component';

const Products = () => {
    const [products, setPrducts] = useState([]);
    const [page, setPage] = useState(2)
    //const [loading, setLoading] = useState(true)
    const [hasMore, setHasMore] = useState(true);
    

    useEffect(() =>{
        const getProducts = async() =>{
            try{
                const res = await axios.get(`http://localhost:8000/products?page=1&limit=8`);
                setPrducts(res.data);
            }catch(err){
                console.log(err);
            }
        }
        getProducts();
    },[]);//removed page

// const scrollToEnd = () =>{
//     setPage(page + 1);
// }

// //onscroll listener
// window.onscroll = function(){
//     //check if page reached bottom
//     if(
//         //height of window and scrollbar = offsetHeight then reached bottom
//         window.innerHeight + document.documentElement.scrollTop
//         === document.documentElement.offsetHeight
//     ){
//         scrollToEnd();
//     }
// }
const fetchMoreData = async () =>{
    try{
        const res = await axios.get(`http://localhost:8000/products?page=${page}&limit=8`);
        //setPrducts(res.data);
        const data = await res.data;
        return data;
    }catch(err){
        console.log(err);
    }
}


const fetchData = async () =>{
    // console.log("hellow")
    const moreData = await fetchMoreData();

    setPrducts([...products, ...moreData]);

    if(moreData.length === 0 || moreData.length < 8){
        setHasMore(false);
    }
    setPage(page + 1)
};


    return (
        <div class="row">
        <InfiniteScroll
        dataLength={products.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<h4 style={{textAlign:'center'}}>Loading...</h4>}
        endMessage={<h3 style={{textAlign:'center'}}>No more items to show...</h3>}
      >

        {products.length > 0 && products.map((product) =>(
            
            <Prod product={product} key={product.id}/>
        ))}
        </InfiniteScroll>
      </div>
    )
}

export default Products
