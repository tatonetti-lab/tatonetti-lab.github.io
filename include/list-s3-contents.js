// Update with your S3 bucket details
const BUCKET_NAME = 'tatonettilab-resources';
const REGION = 'us-west-1';  // e.g., 'us-east-1'
const FOLDER_PATH = 'riftehr/';  // e.g., 'my-folder/'

// Initialize the Amazon S3 service object
AWS.config.update({
    region: REGION
});
const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: { Bucket: BUCKET_NAME }
});

// Function to list objects in the specified folder of the S3 bucket
function listS3FolderContents() {
    s3.listObjects({ Bucket: BUCKET_NAME, Prefix: FOLDER_PATH }, function (err, data) {
        if (err) {
            console.log("Error:", err);
        } else {
            const folderContents = data.Contents;
            const list = document.getElementById('s3Contents');
            folderContents.forEach(function (item) {
                const li = document.createElement('li');
                li.textContent = item.Key;
                list.appendChild(li);
            });
        }
    });
}

// Call the function to list folder contents
listS3FolderContents();
