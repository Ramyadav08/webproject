const submitbtn=document.getElementById("submitbtn");

const getinfo=(event)=>{
    event.preventDefault();
    alert('hyy');
}
submitbtn.addEventListener('click',getinfo);