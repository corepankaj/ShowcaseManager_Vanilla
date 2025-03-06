function handleCheckboxText(e){
    
    console.info($(e.target));
    //console.info($(e.target).prev()[0]);

    if($(e.target)[0].nodeName == "DEL"){
        $(e.target).parent()[0].click();

    }else{

        $(e.target).prev()[0].click();    
    }
    
}

document.querySelectorAll('.checkboxText').forEach(function(ele){
    ele.style.cursor="pointer";
    ele.addEventListener('click', handleCheckboxText);
})


//*************************** Add Event Listiner ****************************************************//
document.getElementById("selectAllDisplayExp").addEventListener("click", selectAllDisplayExp);
document.getElementById("clearAllDisplayExp").addEventListener("click", clearAllDisplayExp);

document.getElementById("selectAllDesktopInframe").addEventListener("click", selectAllDesktopInframe);
document.getElementById("clearAllDesktopInframe").addEventListener("click", clearAllDesktopInframe);

document.getElementById("selectAllMobileInframe").addEventListener("click", selectAllMobileInframe);
document.getElementById("clearAllMobileInframe").addEventListener("click", clearAllMobileInframe);

document.getElementById("selectAllMobileExp").addEventListener("click", selectAllMobileExp);
document.getElementById("clearAllMobileExp").addEventListener("click", clearAllMobileExp);

document.getElementById("selectAllInstreamInread").addEventListener("click", selectAllInstreamInread);
document.getElementById("clearAllInstreamInread").addEventListener("click", clearAllInstreamInread);

document.getElementById("selectAllCtvOtt").addEventListener("click", selectAllCtvOtt);
document.getElementById("clearAllCtvOtt").addEventListener("click", clearAllCtvOtt);



//*************************** Select and Clear all Desktop Expandable  ******************************//
function selectAllDisplayExp() {
     var checkboxes = document.querySelectorAll('.Display_Expandable');
        
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
            $(checkbox).next().html(checkbox.value);
            $(checkbox).parent().css("opacity","1");
        });
    handleCheckboxChange();
}
function clearAllDisplayExp() {
 
  var checkboxes = document.querySelectorAll('.Display_Expandable');
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = true;
    console.info($(checkbox).html());
    var str = "<del>" + checkbox.value + "</del>";

    $(checkbox).next().html(str);
    $(checkbox).parent().css("opacity",".5");

  });
  handleCheckboxChange();     
}

//*************************** Select and Clear all Desktop Inframe  ******************************//
function selectAllDesktopInframe() {
     var checkboxes = document.querySelectorAll('.Desktop_Inframe');
        
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
            $(checkbox).next().html( checkbox.value );
            $(checkbox).parent().css("opacity","1");
        });
    handleCheckboxChange();
}
function clearAllDesktopInframe() {

  var checkboxes = document.querySelectorAll('.Desktop_Inframe');
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = true;
    $(checkbox).next().html("<del>"+ checkbox.value +"</del>");
    $(checkbox).parent().css("opacity",".5");
  });
  handleCheckboxChange();    
}

//*************************** Select and Clear all Mobile Inframe  ******************************//
function selectAllMobileInframe() {
     var checkboxes = document.querySelectorAll('.Mobile_Inframe');
        
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
            $(checkbox).next().html( checkbox.value );
            $(checkbox).parent().css("opacity","1");
        });
    handleCheckboxChange();
}
function clearAllMobileInframe() {

  var checkboxes = document.querySelectorAll('.Mobile_Inframe');
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = true;
    $(checkbox).next().html("<del>"+ checkbox.value +"</del>");
    $(checkbox).parent().css("opacity",".5");
  });
  handleCheckboxChange();    
}


//*************************** Select and Clear all Mobile Exp  ******************************//
function selectAllMobileExp() {
     var checkboxes = document.querySelectorAll('.Mobile_Expandable');
        
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
            $(checkbox).next().html( checkbox.value );
            $(checkbox).parent().css("opacity","1");
        });
    handleCheckboxChange();
}
function clearAllMobileExp() {

  var checkboxes = document.querySelectorAll('.Mobile_Expandable');
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = true;
    $(checkbox).next().html("<del>"+ checkbox.value +"</del>");
    $(checkbox).parent().css("opacity",".5");
  });
  handleCheckboxChange();    
}


//*************************** Select and Clear all Instream / Inread  ******************************//
function selectAllInstreamInread() {
     var checkboxes = document.querySelectorAll('.Instream_Inread');
        
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
            $(checkbox).next().html( checkbox.value );
            $(checkbox).parent().css("opacity","1");
        });
    handleCheckboxChange();
}
function clearAllInstreamInread() {

  var checkboxes = document.querySelectorAll('.Instream_Inread');
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = true;
    $(checkbox).next().html("<del>"+ checkbox.value +"</del>");
    $(checkbox).parent().css("opacity",".5");
  });
  handleCheckboxChange();    
}

//*************************** Select and Clear all CTV / OTT  ******************************//
function selectAllCtvOtt() {
     var checkboxes = document.querySelectorAll('.Ctv_Ott');
        
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
			$(checkbox).next().html( checkbox.value );
            $(checkbox).parent().css("opacity","1");
        });
    handleCheckboxChange();
}
function clearAllCtvOtt() {

  var checkboxes = document.querySelectorAll('.Ctv_Ott');
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = true;
    $(checkbox).next().html("<del>"+ checkbox.value +"</del>");
    $(checkbox).parent().css("opacity",".5");
  });
  handleCheckboxChange();    
}

var myJsonData;



function handleCheckboxChange(e) {
    var jsonData = {
        "type": "filter",
        "hide": []
    };
    //console.info(e.target);
    //console.info(e.target.checked);

    if(e && e.target){
        ///
        //console.info($(e.target).next());
        console.info(e.target.value)
        //var val = e.target.value=='1x10';
        if(!e.target.checked){
            
            $(e.target).next().html(e.target.value);
            $(e.target).parent().css("opacity","1");
            
        }else{
            
            
            $(e.target).next().html("<del>"+ e.target.value +"</del>");
            $(e.target).parent().css("opacity",".5");
        }
    }
        
        // Getting all checkboxes with specified attributes
        var checkboxes = document.querySelectorAll('input[type="checkbox"][platform_value][format_value]');
        checkboxes.forEach(function(checkbox) {
            console.info(checkbox.checked);
            if (checkbox.checked) {
                var platform = checkbox.getAttribute('platform_value');
                var format = checkbox.getAttribute('format_value');
                var size = checkbox.value=="OTT" || checkbox.value=='CTV' ? "1x10" : checkbox.value;

                // Check if format is "instream" or "inread"
                if (format === "instream" || format === "inread") {
                    // Push only platform and format
                    jsonData.hide.push({
                        "platform": [platform],
                        "format": format
                    });
                } else {
                    // Push platform, size, and format
                    jsonData.hide.push({
                        "platform": [platform],
                        "size": size,
                        "format": format
                    });
                }
            }
            
        });

        displayJSON(jsonData);
        myJsonData = jsonData;
    //}
    
}


//***************** Ganerate final JSON code *********************//
function displayJSON(data) {
    var jsonStr = JSON.stringify(data, null, 4); // Pretty print JSON
    document.getElementById('jsonDisplay').innerText = jsonStr;
}

//**************** Copy Ganerated JSON Content *******************//

function copyContent() {
    var contentToCopy = document.getElementById('jsonDisplay');	
	console.log(myJsonData);	
	if(myJsonData == undefined){
		 alert("Uncheck the size to exclude it from the showcase!");
	}else{		
		var range = document.createRange();
		range.selectNode(contentToCopy);
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(range);
		document.execCommand('copy');
		window.getSelection().removeAllRanges();
		document.getElementById("messange").innerHTML = "Content copied to clipboard!";
		
		setTimeout(() => {
		  document.getElementById("messange").innerHTML = "";
		}, "2000");
	}

}