var checkBox = document.querySelectorAll("input.order"); // node list : query tat ca cac mon hoc
var data = [68,69,57,215,216,210,653,541,599]; // data mon hoc (demo) (rowindex cua mon hoc)

function attack(count) {
    
        setInterval(function(){ // sau 1 time thi thuc thi
            for (let i=0;i<checkBox.length;i++){
                if (data.indexOf(checkBox[i].dataset.rowindex)!=-1)  // kiem tra xem mon hoc co trong list data hay khong
                    checkBox[i].checked = true; // neu co thi tick vao mon do. buoc nay la buoc chon mon hoc va chua xac nhan
            }
            document.querySelector(".confirm-registration").click();
            console.log("success");// confirm tat ca mon hoc, tuong tu voi $(".confirm-resgistration")["click"]();
            attack(++count);
        },10);

    
}

attack(0); // excicute function
// use : paste into dev tools console
var user = document.querySelector("#txtLoginId");
var pass = document.querySelector("#txtPassword");
var submit = document.querySelector("#frmLogin");
if (window.location.pathname=="/dkmh/login.asp") {
	user.value = "17021105";
	pass.value = "15071999yt";
	submit.submit();

}