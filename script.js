const api = "https://fakestoreapi.com/products";

async function fetchData(){
    let response = await fetch(api);
    let data = await response.json();
    console.log(data);
    // let clothesCategory = getCategory(data);
    // console.log(clothesCategory);
}
fetchData();

function getCategory(data){
    let clothingCategory = [];
    for(let i=0; i<data.length; i++){
        clothingCategory.push(data[i].category);
    }
    return clothingCategory;
}