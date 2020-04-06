import login from "./Protobuf/LoginPb"  //这里引入文件,msg为package的包名

var NetManager = require("NetManager").Instance();

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults,NetManager set visually when attaching this script to the Canvas
        text: 'Hello, World!',
        bufferList:[],
        byteOffset:0,
        length:0,
        socket:null
    },

    // use this for initialization
    onLoad: function () { 
        this.label.string = this.text;
        
        var array = {account:"miaodada", password:"123456"}
        var ProtocolId = 11001
        let message = login.LoginPb.MsgC2SReqRegister.create(array)
        let messageBuf = login.LoginPb.MsgC2SReqRegister.encode(message).finish(); //获取二进制数据，一定要注意使用finish函数
        NetManager._sendProtoMsg(messageBuf,ProtocolId)

    },

    readBytes:function(len){
        if(len>0){
            let rbuf=new Uint8Array(len);
            let rbuf_ind=0;
            while(rbuf_ind<len){
                if(this.bufferList.length>0){
                    let tmpbuf=this.bufferList.shift();
                    let tmplen=tmpbuf.length;
                    let last_len=len-rbuf_ind;
                    if(tmplen>=last_len){
                        //足夠了
                        let tmpbuf2 = tmpbuf.subarray(0, last_len);
                        rbuf.set(tmpbuf2,rbuf_ind);
                        rbuf_ind+=tmpbuf2.length;
                        if(last_len<tmplen){
                            let newUint8Array = tmpbuf.subarray(last_len, tmplen);
                            this.bufferList.unshift(newUint8Array);
                        }
                        break;
                    }else{
                        rbuf.set(tmpbuf,rbuf_ind);
                        rbuf_ind+=tmplen;
                    }
                }else{
                    rbuf=rbuf.subarray(0, rbuf_ind);
                    break;
                }
            }
            this.length-=rbuf.length;
            return rbuf;
        }
        return null;
    },

    //添加消息头id
    IntToUint8Array:function(number,bits){
        var resArry = [];
        var xresArry = [];
        var binaryStr = number.toString(2); //二进制返回值
        // resArry.push(parseInt(binaryStr[i]));
        // console.log(" =======binaryStr====== ", binaryStr)
        for(let i=0;i<binaryStr.length;i++){
            resArry.push(parseInt(binaryStr[i]));
        }
        // console.log(" =======binaryStr====== ", resArry)
        if (bits){
            for(let r = resArry.length; r < bits; r++) {
                resArry.unshift(0);
            }
        }

        var  resArryStr= resArry.join("");
        for(let j=0;j<bits;j+=8){
            xresArry.push(parseInt(resArryStr.slice(j,j+8),2));
        }
        console.log(" =======xresArry====== ", xresArry);
        return xresArry;
    },

    // called every frame
    update: function (dt) {

    },
});
