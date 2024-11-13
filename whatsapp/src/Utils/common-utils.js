

export const formateDate = (date) => {

    const hours = new Date(date).getHours();
    let min = new Date(date).getMinutes()

    return  `${hours < 10 ? "0" + hours : hours} : ${min < 10 ? "0" + min : min}`
}


export const downloadMedia = (e, url) => {
    e.preventDefault();

    try {
        fetch(url).then(res => res.blob()).then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = "none";
            a.href = url;
            const final = url.split("/").pop()
            a.download = "" + final
            document.body.appendChild(a)
            a.click();
            window.URL.revokeObjectURL(url)
        }).catch(e => console.log(e.message))
    } catch (e) {
        console.log(e.message)
    }

}