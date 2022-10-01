import axios from 'axios'
export const postdata = (send) => {
  console.log(send)
  let user=localStorage.getItem("userId")
  //console.log(user)
  var token=localStorage.getItem("token")
  console.log(token)
  axios
    .post(`https://limitless-peak-78690.herokuapp.com/timer/create/${user}`, send,{
      headers:{
        "authorization":`Bearer ${token}`
      }
    })
    .then((res) => console.log("Post done"));
};


export function msToTime(duration) {
    var seconds = parseInt((duration / 1000) % 60),
     minutes = parseInt((duration / (1000 * 60)) % 60),
     hours = parseInt((duration / (1000 * 60 * 60)) % 24);

   hours = hours < 10 ? "0" + hours : hours;
   minutes = minutes < 10 ? "0" + minutes : minutes;
   seconds = seconds < 10 ? "0" + seconds : seconds;

   return (
     hours + ":" + minutes + ":" + seconds 
   );
 }

 export const deletedata = (id) => {
  var token=localStorage.getItem("token")
  console.log(token)
  console.log(id)
  axios
    .delete(`https://limitless-peak-78690.herokuapp.com/timer/delete/${id}`,{
      headers:{
        "authorization":`Bearer ${token}`
      }})
    .then((res) => console.log("Delete done"));
};
// /timer/delete
