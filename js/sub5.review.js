document.addEventListener('DOMContentLoaded',()=> {
  fetch("../data/sub5_community_review.json")
  .then((res)=>{res.json()})
  .then((data)=> {
    const data_review = data.community_review;
  })
})