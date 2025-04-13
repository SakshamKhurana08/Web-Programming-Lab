function calc(){
    let ad = document.getElementById("adult");
    let add = parseInt(ad.value);

    let ch = document.getElementById("children");
    let child = parseInt(ch.value);

    let t = (10*add) + (5*child);

    document.getElementById("total").value = t;
}