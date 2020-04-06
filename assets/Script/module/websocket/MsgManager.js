
import login from "./Protobuf/LoginPb"  //这里引入文件,msg为package的包名

const MsgDef = require("MsgDef") 
const NetManager = require("NetManager").Instance();

var MsgManager = cc.Class({

    
    LoginReqMsg:function (account,password) {
        var array = {}
        array.account = account;
        array.password = password;
        let message = login.LoginPb.MsgC2SReqRegister.create(array)
        let messageBuf = login.LoginPb.MsgC2SReqRegister.encode(message).finish(); //获取二进制数据，一定要注意使用finish函数
        NetManager._sendProtoMsg(messageBuf,MsgDef.C2S_REQ_USER_REGISTER)
    },

   
});

window.Global = MsgManager;