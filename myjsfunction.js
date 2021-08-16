//function to hide a elemnt by pressing an other elemnt
// or the elemnt him self  attribute are just classes names
//first is your button seconde attribute is element to toggel
//can choose the display type and none is possibel too   
function HideElement(button,element,DisplayType="block"){
    var b = document.getElementsByClassName(button);
    b[0].addEventListener("click",()=>{
    var hide = document.getElementsByClassName(element);
    if(hide[0].style.display!="none"){
    hide[0].style.display="none";
    }else{hide[0].style.display=DisplayType;}})   
}
========================================================

    
    
    
    
  //function to make bytes easier to read
function formatSizeUnits(bytes){
    if      (bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(2) + " GB"; }
    else if (bytes >= 1048576)    { bytes = (bytes / 1048576).toFixed(2) + " MB"; }
    else if (bytes >= 1024)       { bytes = (bytes / 1024).toFixed(2) + " KB"; }
    else if (bytes > 1)           { bytes = bytes + " bytes"; }
    else if (bytes == 1)          { bytes = bytes + " byte"; }
    else                          { bytes = "0 bytes"; }
    return bytes;
  }









// start write in input field and print it live in the card
// ************************************************************************************************************
//******write in a div and paste it live in an other div                                                      *
// *****all Selectore must be only >>>>>>>id                                                                  *
// ************************************************************************************************************
function write_and_paste(clavier,screen){
    clavier.addEventListener("keyup",()=>{
        var text = clavier.value;
        screen.innerText= text;
         clavier.title=text;
    })
}
//end









// ************************************************************************************************************
// *****start upload from device and print it in screen befor upload to data base                             *
// *****accept only extention  that you choose but defualt is "JPG","GIF","PNG","JPEG";                       *
// *****max default size of uploaded file is 10Mb = 10485760 Octet you can edit it but value must be in Octet * 
// *****all Selectore must be only >>>>>>>id                                                                  *
// ************************************************************************************************************
function viewImageInScreen(image_up,img_screen,allow_exts=["JPG","GIF","PNG","JPEG"],max_photo_upload_size=10485760){
     allow_ext = allow_exts.map(name => name.toUpperCase());
     image_up.addEventListener("change",function(){
        const myimg =this.files[0];
        // get file type and uppercase it
        var file_type =myimg.type.toUpperCase().split("/")[myimg.type.toUpperCase().split("/").length -1 ];
        show_file_type=myimg.name.split(".")[myimg.name.toUpperCase().split(".").length -1 ];
        // allowed file extention
                // const allow_ext=["JPG","GIF","PNG","JPEG"];
        //define error array
        var errors = [];
        //deal with type
        if(! allow_ext.includes(file_type)){
            errors.push("Wrong File Format Must be " +allow_ext+" Your File Format is "+show_file_type+" \n ");
        }
        // deal with size
        if(myimg.size>max_photo_upload_size){
            errors.push("Wrong File Size Must be under "+formatSizeUnits(max_photo_upload_size)+" Your File size is "+formatSizeUnits(myimg.size) +"\n");  
        }

            if(myimg && errors.length==0){
                    const reader = new FileReader();
                        reader.readAsDataURL(myimg);
                            reader.addEventListener("load",function(){
                                img_screen.setAttribute("src",this.result)
                        })
                    
            }else{
                    //here your costum error display
                    alert(errors);
            }
        
    })
}
//end********************************************************************************************************************************************************************


















