document.addEventListener("DOMContentLoaded", () => {
  //sub5_community_notice json
  fetch("./data/sub5_community_notice.json")
  .then(function(res){
    return res.json();
  })
  .then(function(data){
    const pageReverse = data.community_notice.reverse();
    //notice page
    let page = [];
    for(let i=0; i < pageReverse.length; i+=5){
      page.push(pageReverse.slice(i,i+5));
    }

    let noticePaging = ()=>{
      const pageUl = document.querySelector('.pagination');
      const createLi = document.createElement('li');

      page.forEach((v,i)=>{
        createLi.innerHTML += `<button>${i+1}</button>`
      })
      pageUl.append(createLi);

      const pageBtn = document.querySelectorAll('button');
      pageBtn.forEach((btn,pageNum)=>{
        btn.onclick = ()=>{
          notice_data(pageNum);
        }
      })
    }

    //notice data insert
    const noticeTable = document.querySelector('.notice-1 tbody');
    
    let notice_data = (n) =>{
      noticeTable.innerHTML = '';

      page[n].forEach((v,i)=>{
        noticeTable.innerHTML += `<td>${v.board_num}</td>
                                  <td>
                                    <p>${v.board_title}</p>
                                  </td>
                                  <td>${v.board_date}</td>`;
      })
    }
    notice_data(0);
    noticePaging();






  })









})











//sub5_coumunity_review 스크립트

const review_Btn = document.querySelectorAll('.images ul li a[name="pop_btn"]'),
      review_Popup = document.querySelector('.popup');
  review_btn.forEach((v)=>{
    v.addEventListener('click', function(){
      review_Popup.classList.add("active")
    })
  })
      