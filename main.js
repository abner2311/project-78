var images=["https://st.depositphotos.com/1967477/4473/v/600/depositphotos_44735787-stock-illustration-happy-family-cartoon.jpg"
,"https://www.pikpng.com/pngl/m/46-462819_free-png-download-big-family-animated-png-images.png","https://i.pinimg.com/736x/93/19/ad/9319ad5b2592454c183a23699b65ea4a.jpg"
]
var names=["dechfnutugfn","iojfgiut5","diu0f45yo8u"];
var i=0;
function update(){
    i++;
    var number_of_members_of_family_in_array=3;
    if(i>number_of_members_of_family_in_array)
    {i=0;
    }
    var updatedimage=images[i];
    var updatednames=names[i];
    document.getElementById(family_member_image).src=updatedimage;
    document.getElementById(family_member_name).innerHTML=updatednames;
}