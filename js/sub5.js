document.addEventListener("DOMContentLoaded", () => {
  
  //sub5_community_notice json
 fetch("./data/sub5_community_notice.json")
 .then(function(res){
   return res.json();
 })
 .then(function(data){
   //notice page
   const page_reverse = data.community_notice.reverse();
   let page = [];
   for(let i=0; i<page_reverse.length; i+=5){
     page.push(page_reverse.slice(i, i+5));
   }

    let notice_paging = ()=>{
      const page_list = document.querySelector('.pagination_num');
      
      page.forEach((v,i)=>{
        page_list.innerHTML += `<a href='#'>${i+1}</a>`;
      })
      
      const page_btn = document.querySelectorAll('.pagination_num a');
      
      page_list.firstElementChild.classList.add('on');

      page_btn.forEach((btn, page_num)=>{
        btn.addEventListener('click',(e)=>{
          e.preventDefault();
          page_btn.forEach((v)=>{
            notice_data(page_num);
            v.classList.remove('on');
          })
          btn.classList.add('on');
        })
      })
    }

    //notice data insert
    const notice_table = document.querySelector('.notice-1 tbody');
    
    let notice_data = (n) =>{
      notice_table.innerHTML = '';

      page[n].forEach((v,i)=>{
        notice_table.innerHTML += `<td>${v.board_num}</td>
                                  <td>
                                    <p>${v.board_title}</p>
                                  </td>
                                  <td>${v.board_date}</td>`;
      })
    }

    notice_data(0);
    notice_paging();
  })















 //sub5_coumunity_review 스크립트


// review_btn 이렇게 하거나 reviewBtn << 스크립트에선 이게 좋음 하지만 언더바 사용하기로 약속했으니 이번 프로젝트에선 언더바 사용

})













     