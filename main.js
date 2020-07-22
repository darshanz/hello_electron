const {app, BrowserWindow} = require('electron')
function createWindow() {
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration:true
        }
    })
    window.loadFile('index.html')
    
    //Python
    var subpy = require('child_process').spawn('python', ['./server.py']);
    var rq = require('request-promise');
    var serverUrl = 'http://localhost:5000/hello';

    var startWebServer = function(){
        //Example 
        rq(serverUrl)
          .then(function(htmlString){
            console.log('Server Ready!');
            console.log(htmlString)
            // Do something when server is ready 
          })
          .catch(function(err){
              console.log(err)
             startWebServer();
          });
      };

      startWebServer();

    window.on('closed', ()=>{
        win = null
    })

}

app.on("window-all-closed", ()=> {
    if(process.platform != 'darwin'){
        app.quit()
    }
})
    
app.on('ready', createWindow)
