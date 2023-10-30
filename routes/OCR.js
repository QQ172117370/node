
async function f1(url) {
    const res = await fetch(url);
    const blob = await res.blob();
    const bytes = await blob.arrayBuffer();
    return bytes;
}

async function f2(url,data) {
    let op = {
        method : 'POST',
        body : data,
        headers : {
            "Content-Type" : "text/plain" 
        }
    }
    let res = await fetch(url, op);
    res = await res.text()
    return res;
}

module.exports = {
    f1,
    f2
};