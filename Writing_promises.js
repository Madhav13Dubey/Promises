function writingFile(data) {
    console.log(`Starting writing the downloaded data into the file :- ${data}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const file_name = `output_file.txt`;
            console.log(`Data has been written to the file :- ${file_name}`);
            resolve(file_name);
        }, 1000);
    });
}

writingFile("Dummy Downloaded Data")
    .then(file_name => {
        console.log(`Successfully data get written in the file :- ${file_name}`);
    })
    .catch(err => {
        console.log(`Error occurred while writing: ${err}`);
    });


    