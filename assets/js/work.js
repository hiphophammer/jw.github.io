let ExternalURL = "www.dummysite.com";
let ContentLocationInDOM = null; // If you're trying to get sub-content from the page, specify the "CSS style" jQuery syntax here, otherwise set this to "null"

$(document).ready(loadContent);
function loadContent()
{
  let QueryURL = "http://anyorigin.com/get?url=" + ExternalURL + "&callback=?";
  $.getJSON(QueryURL, function(data){
     if (data && data != null && typeof data == "object" && data.contents && data.contents != null && typeof data.contents == "string")
     {
        data = data.contents.replace("/<script[^>]*>[sS]*?</script>/gi", "");
        if (data.length > 0)
        {
           if (ContentLocationInDOM && ContentLocationInDOM != null && ContentLocationInDOM != "null")
           {
              $('#target').html($(ContentLocationInDOM, data));
           }
           else
           {
              $('#target').html(data);
           }
        }
     }
  });
}