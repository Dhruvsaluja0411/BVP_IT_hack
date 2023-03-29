firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("auth.html")
    }
})


function logout(){
    firebase.auth().signOut()
}
