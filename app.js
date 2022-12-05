const container=document.querySelector(".container")
async function getData(){
const response=await fetch("https://reqres.in/api/users");
const result=await response.json();
const data=result.data;
console.log(data)
data.map((item,index)=>{
    const card=document.createElement("div");
    card.classList.add("card");
    container.append(card);
    //img
    const img=document.createElement("img");
    img.classList.add("avatar")
    img.src=item.avatar;
    card.append(img);
    //title
    const title=document.createElement('h3');
    title.classList.add("title");
    title.innerHTML=`${item.first_name} ${item.last_name}`;
    card.append(title)
    //email
    const email=document.createElement("li");
    email.classList.add("email");
    email.innerHTML=item.email;
    card.append(email);
})
}
getData();