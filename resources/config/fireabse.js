// AccessToken.getCurrentAccessToken()
// .then((data)=>{
//   console.log("'data==>",data)
//   fetch(`https://graph.facebook.com/v2.5/me?feilds=email,name&${data.accessToken}`)
//   .then((res)=>res.json())
//   .then((user)=>{
//     console.log("user==>",user)
//   })
// })
// console.log(
//   "Login success with permissions: " +
//     result.grantedPermissions.toString()
// );