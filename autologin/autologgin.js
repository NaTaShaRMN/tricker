class user {

	constructor(userName,passWord) {
		this.userName = userName;
		this.passWord = passWord;
	}
	set userName(userName){
		this._userName = userName;
	}
	set passWord(passWord){
		this._passWord = passWord;
	}
	get userName(){
		return this._userName.toString();
	}
	get passWord(){
		return this._passWord.toString();
	}

	// methods
}
var a = new user(17021105,15021105);





var user = document.querySelector("#txtLoginId");
var pass = document.querySelector("#txtPassword");
var submit = document.querySelector(".button");

if (window.location.pathname=="/dkmh/login.asp") {
	user.value = "17021105";
	pass.value = "15071999yt";
	submit.click();

}