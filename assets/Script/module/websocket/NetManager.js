var WebSocket = require("WebSocket")

var NetManager = cc.Class({
    ctor(){
        this._registerFileds();
    },
    
    init(){
    },
    _registerFileds(){
        this._socket =  new WebSocket()
        this._socket.start();
        this._socket._onMessageCallback(this._onMessageFunc.bind(this));
    },

    _sendProtoMsg(protobuf,cmd){
        if(this._socket){
            this._socket._sendProtoMsg(protobuf,cmd);
        }
    },

    _onMessageFunc(event){
        console.log(" event ", event)
    },

});

NetManager._instance = null;
NetManager.Instance = function ()
{
    if(!NetManager._instance)
    {
        NetManager._instance = new NetManager();
        NetManager._instance.init();
    }
    return NetManager._instance;
}

module.exports = NetManager;
