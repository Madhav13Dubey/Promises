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

const downloadURL = "https://example.com/data";
const uploadURL = "https://upload.example.com/receive";

downloading(downloadURL)
    .then(data => {
        console.log(`Data is successfully get downloaded :- ${data}`);
        return writingFile(data); 
    })
    .then(file_name => {
        console.log(`Successfully data get written in the file :- ${file_name}`);
        return uploadingFile(file_name, uploadURL);
    })
    .then(result => {
        console.log(`Updation result :- ${result}`);
    })
    .catch(err => {
        console.log(`Error occurred during the process: ${err}`);
    });
