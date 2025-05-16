function downloading(url) {
    console.log(`Starting downloading data from the given url :- ${url}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = `Data from the ${url}`;
            console.log(`Downloaded data :- ${url}`);
            resolve(data);
        }, 1000);
    });
}

downloading("https://example.com/data")
    .then(data => {
        console.log(`Data is successfully get downloaded :- ${data}`);
    })
    .catch(err => {
        console.log(`Error occurred while downloading: ${err}`);
    });

    
