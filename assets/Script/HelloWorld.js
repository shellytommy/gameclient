import login from "./protobuf/LoginPb"  //这里引入文件,msg为package的包名

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () { 
        this.label.string = this.text;

        // protobuf.load("protobuf/login.proto", function(err, root) {
        //     if (err)
        //         throw err;
        
        //     // Obtain a message type
        //     // var AwesomeMessage = root.lookupType("awesomepackage.AwesomeMessage");
        // })



        var self = this;

        var ipPort = "ws://" + "192.168.50.200" + ":" + "18308/echo";
        console.log(ipPort);
        
        // var array = {loginType:1, userAccount:"11111", userPassword:"22222",channelId:"3333",deviceInfo:"123123", token:"7878"}
        // let message = login.loginpb.LoginReq.create(array)
        // let messageBuf = login.loginpb.LoginReq.encode(message).finish(); //获取二进制数据，一定要注意使用finish函数
        // cc.log(" messageBuf ", messageBuf);
        // var url_temp = "http://192.168.50.200:18306/http-server";
        // this.httpPost(url_temp,messageBuf,function () {
            
        // })

        this.ws = new WebSocket(ipPort);
        this.ws.binaryType = 'arraybuffer'; //这里设置为发送二进制数据

        this.ws.onopen = function (event) {
            console.log("open");

            //打开成功立刻进行发送
            if (self.ws.readyState === WebSocket.OPEN) {
                // let message = msg.Login.create({name: "hello", pwd: "pwd"});//构造对象
                // let messageBuf = msg.Login.encode(message).finish(); //获取二进制数据，一定要注意使用finish函数
                // int32 createrId  = 4; //发跑马灯的用户id
                // int64 createTime = 5; //发跑马灯时间
                // string content 		= 6; //跑马灯内容
                // int32 type 			= 7; //跑马灯类型101:平台(GM) 201:用户 301:系统
                var array = {loginType:1, userAccount:2, userPassword:3, createrId:100000000,createTime:85209630,content:"林国语大傻逼",type:77777777 }
                let message = login.loginpb.LoginReq.create(array)
                let messageBuf = login.loginpb.LoginReq.encode(message).finish(); //获取二进制数据，一定要注意使用finish函数


                var date = new Date()
                var time = date.getTime()

                cc.log("当前时间 = ", time)

                // 在实际应用中，可能需要在二进制数据前再拼接一些数据才进行发送

                cc.log(" messageBuf \n", messageBuf,  messageBuf.length);

                // var sendBuf = new ArrayBuffer(messageBuf.length + 4); //二进制数据的长度+一个int的长度 消息号预留4字节


                // var bufferMsg = new DataView(sendBuf);
                // bufferMsg.setInt32(0,0xc30102); //写入一个int值 消息号
                

                // //将二进制数据写入
                // var u8view = new Uint8Array(sendBuf, 4); //跳过1个int的距离

                // for (var i = 0, strLen = messageBuf.length; i < strLen; ++i){
                //     u8view[i] = messageBuf[i];
                // }
                
                // cc.log(" 消息号 = ", 0xc30102)

                // //封装
                // var b64 = protobuf.util.base64.encode(sendBuf, 0, sendBuf.length);

                // cc.log(" sendBuf ", sendBuf, sendBuf.byteLength );
                // cc.log(" 二进制数据protobuf ", u8view);
                // cc.log(" 数据总大小 = ", u8view.length)
                // cc.log(" base64加密 = ", b64)
                cc.log(" messageBufmessageBuf ", typeof(messageBuf))
                self.ws.send(messageBuf); //发送二进制数据
            }
        };

        this.ws.onmessage = function (event) {
            console.log("onmessage : " + event.data,event.data.length, typeof(event.data))
            
            let messageBuf = login.loginpb.LoginReq.decode(event.data,event.data.length).finish(); //获取二进制数据，一定要注意使用finish函数
            console.log(" messageBuf ", messageBuf)
        };

        this.ws.onerror = function (event) {
            console.log("on error :", event.data);
        };

        this.ws.onclose = function (event) {
            console.log("onclose");
        };

    },

    // httpPost(url,params) {
    //     return new Promise((resolve,reject)=>{
    //         var xhr = cc.loader.getXMLHttpRequest();
    //         xhr.onreadystatechange = function () {
    //             cc.log('xhr.readyState='+xhr.readyState+'  xhr.status='+xhr.status);
    //             if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
    //                 var respone = xhr.response;
    //                 resolve(respone);
    //             }
    //         };
    //         var url_temp = "http://192.168.50.200:18306/http-server";
    //         xhr.open("POST", url_temp, true);
           
    
    //         // note: In Internet Explorer, the timeout property may be set only after calling the open()
    //         // method and before calling the send() method.
    //         xhr.timeout = 5000;// 5 seconds for timeout
    //         xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");  

    //         var byteArray = new Uint8Array(params);
    //         xhr.send(byteArray);
    //     })
        
    // },

     /**
     * post请求
     * @param {string} url 
     * @param {object} params 
     * @param {function} callback 
     */
    httpPost(url, params, callback) {
        // cc.myGame.gameUi.onShowLockScreen();
        let xhr = cc.loader.getXMLHttpRequest();
        xhr.responseType = "arraybuffer";
        xhr.onreadystatechange = function () {
            // cc.log('xhr.readyState=' + xhr.readyState + '  xhr.status=' + xhr.status);
            if (xhr.readyState === 4 && xhr.status == 200) {
                let respone = xhr.responseText;
                let rsp = JSON.parse(respone);
                // cc.myGame.gameUi.onHideLockScreen();
                callback(rsp);
            } else {
                callback(-1);
            }
        };
        xhr.open('POST', url, true);
        if (cc.sys.isNative) {
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');
        xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type');
        xhr.setRequestHeader("Content-Type", "application/json");
        // xhr.setRequestHeader('Authorization', 'Bearer ' + cc.myGame.gameManager.getToken());
        }

        // note: In Internet Explorer, the timeout property may be set only after calling the open()
        // method and before calling the send() method.
        xhr.timeout = 8000;// 8 seconds for timeout

        // var binary = new Uint8Array([1, 2, 3]);
        xhr.send(params);
    },

    // called every frame
    update: function (dt) {

    },
});
