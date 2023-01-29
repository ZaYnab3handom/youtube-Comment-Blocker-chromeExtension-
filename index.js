function removeComment(){
    var commentBlock = document.getElementById('comments')
    console.log(commentBlock)
    commentBlock.remove();
    //commentBlock.style.visibility="hidden";

 }
// window.onload = removeComment
//     // visibility = "hidden"

setTimeout(removeComment,2000)


