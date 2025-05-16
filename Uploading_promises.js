function uploadingFile(file_name, uploadURL) {
    console.log(`Starting uploading the file ${file_name} from the given ${uploadURL}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const response = `File ${file_name} is Successfully get uploaded from the ${uploadURL} url`;
            console.log(`Uploading is over for the file :- ${file_name}`);
            resolve(response);
        }, 1000);
    });
}

uploadingFile("output_file.txt", "https://upload.example.com/receive")
    .then(result => {
        console.log(`Updation result :- ${result}`);
    })
    .catch(err => {
        console.log(`Error occurred while uploading: ${err}`);
    });


    