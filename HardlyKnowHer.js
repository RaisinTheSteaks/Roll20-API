on("chat:message", function(msg){
    let sender=msg.playerid;
    let thisScriptName="Script-Error";
    let messageName="Comedy Pidgeon";
    let whisper="";
    console.log("HardlyKnowHer.js","lets declared");

    if(msg.type =="general"){
        if(msg.conent.indexOf("/w")!==-1){
            whisper="/w "+sender;
            console.log("HardlyKnowHer.js","WHISPER");
        }        
        if(msg.content.indexOf("er ") !== -1){
            console.log("HardlyKnowHer.js","Know her joke");
            sendChat(messageName, whisper+"-er? I barely know her!");
        }    
        else if(msg.conent.indexOf("surely" !== -1)){
            console.log("HardlyKnowHer.js","Shirley joke");
            sendChat(messageName, whisper+"Yes, but stop calling me Shirley.");
        }
    }
});-