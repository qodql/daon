document.addEventListener("DOMContentLoaded", () => {

    let paramNum = new URLSearchParams(location.search);

    fetch("./data/sub5_community_notice.json")
    .then(function(res){
        return res.json();
    })
    .then(function(data){

        //notice inner
        const notice_inner_tit = document.querySelector('.notice_inner_1 h2');
        const notice_inner_date = document.querySelector('.notice_inner_1 p');
        const notice_inner_cont = document.querySelector('.notice_inner_2 p');
        const notice_list_btn = document.querySelector('.notice_list a');


        let find_data = data.community_notice.filter((item)=>{
            console.log(item);
            return item.board_num == paramNum.get('id');
        })

        notice_inner_tit.innerText = find_data.board_title;
        notice_inner_date.innerText = find_data.board_date;
        notice_inner_cont.innerText = find_data.board_cont;
            
        notice_list_btn.onclick = function(){
            history.back();
        }

    })

});