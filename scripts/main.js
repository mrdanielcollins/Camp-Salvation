window.addEventListener('scroll', function() {
    scrollVal = window.scrollY + this.window.innerHeight;
    missionY = this.document.getElementById("mission").offsetTop;

    if(scrollVal >= missionY){
        //console.log(missionY);
    }

});