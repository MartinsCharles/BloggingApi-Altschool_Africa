function readingTime (){
    // Grab the blog post by Id
    const blogPost = document.getElementById("//enter Id of text").innerText;
    // set the estimated words read per minute by a human to be 183wpm
    const wpm= 183;
    // calculate the number of words by splitting whiteSpace
    const readWords= blogPost.trim().split(/\s+/).length;
    // Estimates read time to the nearest whole number
    const time = Math.ceil(readWords/wpm);
    document= getElementById("time").innerText=time;
}

readingTime();