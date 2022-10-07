
// export default "https://leju.bufan.cloud"
var url = ""
 if(process.env.NODE_ENV === 'development'){
     // url =  "http://localhost"
	 url = "http://leju.bufan.cloud"
	//url = "59.110.138.169"
 }else{
     url = "http://leju.bufan.cloud"
 }

export default url
