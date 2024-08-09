document.addEventListener("DOMContentLoaded", () => {
  
  //sub5_community_notice json
 fetch("./data/sub5_community_notice.json")
 .then(function(res){
   return res.json();
 })
 .then(function(data){
   //notice page
   const pageReverse = data.community_notice.reverse();
   let page = [];
   for(let i=0; i<pageReverse.length; i+=5){
     page.push(pageReverse.slice(i, i+5));
   }

    let noticePaging = ()=>{
      const pageList = document.querySelector('.pagination .pagination_num');
      
      page.forEach((v,i)=>{
        pageList.innerHTML += `<a href="#">${i+1}</a>`;
      })

      const pageBtn = document.querySelectorAll('.pagination .pagination_num a');
      pageBtn.forEach((btn, pageNum)=>{
        btn.onclick = (e)=>{
          e.preventDefault();
          noticeData(pageNum);
          e.target.classList.add('on');
        }
      })
    }

    //notice data insert
    const noticeTable = document.querySelector('.notice-1 tbody');
    
    let noticeData = (n) =>{
      noticeTable.innerHTML = '';

      page[n].forEach((v,i)=>{
        noticeTable.innerHTML += `<td>${v.board_num}</td>
                                  <td>
                                    <p>${v.board_title}</p>
                                  </td>
                                  <td>${v.board_date}</td>`;
      })
    }

    noticeData(0);
    noticePaging();
  })















 //sub5_coumunity_review 스크립트


// review_btn 이렇게 하거나 reviewBtn << 스크립트에선 이게 좋음 하지만 언더바 사용하기로 약속했으니 이번 프로젝트에선 언더바 사용

})













     