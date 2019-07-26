var checkBox = document.querySelectorAll(".order"); // node list : query tat ca cac mon hoc
var data = [61,62,63]; // data mon hoc (demo) (rowindex cua mon hoc)

function attack(count) {
    if (count<200) {
        setTimeout(function(){ // sau 1 time thi thuc thi
            for (let i=0;i<checkBox.length;i++){
                if (data.indexOf(checkBox[i].dataset.rowindex)!=-1)  // kiem tra xem mon hoc co trong list data hay khong
                    checkBox[i].checked = true; // neu co thi tick vao mon do. buoc nay la buoc chon mon hoc va chua xac nhan
            }
            document.querySelector(".confirm-registration").click();// confirm tat ca mon hoc
            attack(++count);
        },0);
    }
    
}
attack(0); // excicute function
// use : paste into dev tools console
