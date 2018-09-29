# angular6-firebase

```
npm install ngx-bootstrap --save
```

```
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
```

```
fileChangeEvent(fileInput) {
    this.fileUpload = <Array<File>> fileInput.target.files;
    this.projImage = this.fileUpload[0].name;
  }

  onUploadClick() {
    if (this.fileUpload.length > 0) {
      this.uploadService
      .makeFileRequest(`${environment.apiUrl}/api/v1/upload/project/5`, this.fileUpload)
      .subscribe(
        res => {
          if (!res.success) {
            alert(res.message);
          } else {
            alert('Upload Complete');
          }
        }
      );
    }
  }
  
```