const userData = async () => {
    try {
        let response = await fetch("https://dummyjson.com/posts");
        let data = await response.json();
        console.log(data);
    } catch (err) {
        console.log("error", err);
    }
}

userData();