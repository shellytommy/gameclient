/*
    Authot: Tommy
    Date:   2020-4-5 16:30:10
*/

// var BaseSocket = require("BaseSocket")
var WSocket = cc.Class({
    // extends: BaseSocket, 
    ctor() {
        this._registerFields()
    },
    _registerFields() {
        this._socket = null;
        this._Message = null;
        self = this
    },

    start() {
        // start connect socket
        var url = "ws://" + "localhost" + ":" + "8888/imserver/10";
        // var url = "ws://" + "47.116.106.117" + ":" + "8888/imserver/10";
        console.log(" url ", url)
        this._socket = new WebSocket(url);
        this._socket.binaryType = "arraybuffer";
        this._socket.onopen = this._onOpen.bind(self);
        this._socket.onmessage = this._onMessage.bind(self);
        this._socket.onerror = this._onError.bind(self);
        this._socket.onclose = this._onClose.bind(self);
    },

    _sendProtoMsg(protobuf,cmd){
        if(this._socket.readyState == WebSocket.OPEN){
            if(protobuf.length <= 0 || cmd == null)
                return cc.error(" buffer length or cmd is null")
            var arraybuffer = new ArrayBuffer(protobuf.length + 4 + 4); //二进制数据的长度+一个int的长度 消息号预留8字节
            var dataView = new DataView(arraybuffer);
            dataView.setInt32(0,cmd);
            dataView.setInt32(4,protobuf.length);
            console.log(" 发送数据 ")
            //将二进制数据写入
            var u8view = new Uint8Array(arraybuffer, 8); //跳过一个short的距离
            for (var i = 0, strLen = protobuf.length; i < strLen; ++i){
                u8view[i] = protobuf[i];
            }
            console.log(" arraybuffer ", arraybuffer)
            this._socket.send(arraybuffer);
        }
    },

    _onOpen(event) {
        cc.log("websocket:onopen" , event)
        // if(typeof this._openFunc == "function"){
        //     this._openFunc()
        // }
    },

    _onMessage(event){
        console.log(" ====_onMessage==== ", event)
        if(typeof this._Message == "function"){
            this._Message = event
        }
    },

    _onMessageCallback(callback){
        if (typeof callback == "function")
            callback(this._Message);
    },
    _onError(event) {
        cc.log("websocket.onerror:" , event); 
        // if(typeof this._errorFunc == "function"){
        //     this._errorFunc()
        // }
    },
    _onClose(event) {
        cc.log("websocket.onclose:" , event);
         
        // if(typeof this._closeFunc == "function"){
        //     this._closeFunc()
        // }
        // dispatch net close event 
    },
});

module.exports = WSocket;

