 var button = document.querySelector('.button');
    var input = document.querySelector('#input');
    var dropZone = document.querySelector('.dropZone');
    var uploadIcon = document.querySelector('.fa-upload');
    var text = document.querySelector('.text');
    let file;

    button.addEventListener('click', function(){
        input.click();
        
    })

    dropZone.addEventListener('dragover', function(e){
        e.preventDefault();
        dropZone.classList.add('active');
        button.classList.add('btn-active');
        uploadIcon.classList.add('icon-active');
        text.innerHTML="Release the file for dropping..."

       
    })
    dropZone.addEventListener('dragleave', function(e){
        e.preventDefault();
        dropZone.classList.remove('active');
        button.classList.remove('btn-active');
        uploadIcon.classList.remove('icon-active');
        text.innerHTML="Drag and drop images or browser";
        

       
    });

    dropZone.addEventListener('drop', function(e){
        e.preventDefault();
        dropZone.classList.add('active');

        file = e.dataTransfer.files[0];
        let supportFormat = ["image/jpg", "image/jpeg", "image/png"];
        let fileType = file.type;
        if(supportFormat.includes(fileType)){
         let reader = new FileReader();
         reader.addEventListener('load', function(){
            let fileUrl = reader.result;
            let imag = `<img src="${fileUrl}" alt="">`;
            dropZone.innerHTML=imag;
            
         })
         reader.readAsDataURL(file);
        }
        else{

            alert('your file is not an image');
        text.innerHTML="Drag and drop images or browser";

        }
       


       
       
       

       
    });
    input.addEventListener('change', function(e){
        e.preventDefault();
        dropZone.classList.add('active');

        file = this.files[0];
        let supportFormat = ["image/jpg", "image/jpeg", "image/png"]
        let fileType = file.type;
        if(supportFormat.includes(fileType)){
         let reader = new FileReader();
         reader.addEventListener('load', function(){
            let fileUrl = reader.result;
            let imag = `<img src="${fileUrl}" alt="">`;
            dropZone.innerHTML=imag;
         })
         reader.readAsDataURL(file);
        }
        else{
            alert('your file is not an image');
        text.innerHTML="Drag and drop images or browser";

        }

    })
        
