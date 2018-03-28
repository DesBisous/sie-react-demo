const wpt = {
    /**
    * 关闭应用
    * @method closeApp
    * @for wpt
    * @param {func} success 成功回调.
    * @param {func} fail 失败回调.
    * @returns  void .
    */
    closeApp (success, fail) {
    if (!success || !fail) {
      console.warn('丢失回调函数');
      return false
    }
    console.log('点击关闭应用');
    if( window.cordova )
        window.cordova.exec(success, fail, 'Activity', 'closeApp', []);
    else console.error('No exist cordova!');
    },
    /**
    * 弹出选择窗口(底下)
    * @method showSheet
    * @for wpt
    * @param {object} params 配置信息.
    * @param {func} success 成功回调.
    * @param {func} fail 失败回调.
    * @returns  void .
    */
    showSheet (params, success, fail) {
    if (!params || !success || !fail) {
      console.warn('丢失回调函数');
      return false
    }
    console.log('点击showSheet');
    if( window.cordova )
          window.cordova.exec(success, fail, "Alert", "showSheet", [ params ]);
    else console.error('No exist cordova!');
    },
    /**
    * 获取用户信息
    * @method getUserInfo
    * @for wpt
    * @param {func} success 成功回调.
    * @param {func} fail 失败回调.
    * @returns  void .
    */
    getUserInfo (success, fail) {
    if (!success || !fail) {
      console.warn('丢失回调函数');
      return false
    }
    console.log('获取用户信息');
    if( window.cordova )
        window.cordova.exec(success, fail, "UsersInfo", "getUsersInfo", []);
    else console.error('No exist cordova!');
    },
    /**
    * 相册选择图片
    * @method selectPhoto
    * @for wpt
    * @param {object} [params] 配置信息.
    * @param {func} success 成功回调.
    * @param {func} fail 失败回调.
    * @returns  void .
    */
    selectPhoto (params = {}, success, fail) {
    if (!success || !fail) {
      console.warn('丢失回调函数');
      return false
    }
    console.log('相册选择图片');
    if( window.cordova )
        window.cordova.exec(success, fail, "Camera", "selectPhoto", [params]);
    else console.error('No exist cordova!');
    },
    /**
    * 获取网络状态
    * @method checkNetStatus
    * @for wpt
    * @param {func} success 成功回调.
    * @param {func} fail 失败回调.
    * @returns  void .
    */
    checkNetStatus (success, fail) {
    if (!success || !fail) {
      console.warn('丢失回调函数');
      return false
    }
    console.log('获取网络');
    if( window.cordova )
        window.cordova.exec(success, fail, "Telephone", "checkNetStatus", []);
    else console.error('No exist cordova!');
    },
    /**
    * 获取设备信息
    * @method getPhoneInfo
    * @for wpt
    * @param {func} success 成功回调.
    * @param {func} fail 失败回调.
    * @returns  void .
    */
    getPhoneInfo (success, fail) {
    if (!success || !fail) {
      console.warn('丢失回调函数');
      return false
    }
    console.log('获取设备信息');
    if( window.cordova )
        window.cordova.exec(success, fail, "Telephone", "checkPhoneInfo", []);
    else console.error('No exist cordova!');
    },

    /**
    * 时间控件 返回 yyyy-MM-dd HH:mm:ss.
    * @method selectDayAndTime
    * @for wpt
    * @param {object} [params] title,message信息.
    * @param {func} success 成功回调.
    * @param {func} fail 失败回调.
    * @returns  void .
    */
    selectDayAndTime (params = {}, success, fail) {
    if (!success || !fail) {
      console.warn('丢失回调函数');
      return false
    }
    console.log('时间控件');
    if( window.cordova )
        window.cordova.exec(success, fail, "DateInfo", "selectDayAndTime", [ params ]);
    else console.error('No exist cordova!');
    },

    /**
    * 获取定位
    * @method getLocation
    * @for wpt
    * @param {func} success 成功回调.
    * @param {func} fail 失败回调.
    * @returns  void .
    */
    getLocation (success, fail) {
    if (!success || !fail) {
      console.warn('丢失回调函数');
      return false
    }
    console.log('获取定位');
    if( window.cordova )
        window.cordova.exec(success, fail, "Loc", "queryLoc", []);
    else console.error('No exist cordova!');
    },
    /**
    * 打电话
    * @method takeTel
    * @for wpt
    * @param {object} params 电话信息.
    * @param {func} success 成功回调.
    * @param {func} fail 失败回调.
    * @returns  void .
    */
    takeTel (params, success, fail) {
        if (!params || !success || !fail) {
      console.warn('丢失参数');
      return false
    }
    console.log('打电话');
    if( window.cordova )
        window.cordova.exec(success, fail, "Telephone", "takeTel", [ params ]);
    else console.error('No exist cordova!');
    },
    /**
    * 打电话
    * @method sendSMS
    * @for wpt
    * @param {object} params 电话信息.
    * @param {func} success 成功回调.
    * @param {func} fail 失败回调.
    * @returns  void .
    */
    sendSMS (params, success, fail) {
    if (!params || !success || !fail) {
      console.warn('丢失参数');
      return false
    }
    console.log('发短信');
    if( window.cordova )
        window.cordova.exec(success, fail, "Telephone", "sendSMS", [ params ]);
    else console.error('No exist cordova!');
    },
    /**
    * 获取本页参数
    * @method currentPageParams
    * @for wpt
    * @param {func} success 成功回调.
    * @param {func} fail 失败回调.
    * @returns  void .
    */
    currentPageParams (success, fail) {
    if (!success || !fail) {
      console.warn('丢失回调参数');
      return false
    }
    console.log('获取本页参数');
    if( window.cordova )
        window.cordova.exec(success, fail, "Activity", "getParams", [])
    else console.error('No exist cordova!');
    },
    /**
    * 扫二维码返回字符串
    * @method scanCodeReturnStr
    * @for wpt
    * @param {func} success 成功回调.
    * @param {func} fail 失败回调.
    * @returns  void .
    */
    scanCodeReturnStr (success, fail) {
    if (!success || !fail) {
      console.warn('丢失回调参数');
      return false
    }
    console.log('扫二维码');
    if( window.cordova )
        window.cordova.exec(success, fail, "BarCodeInfo", "scanCode", []);
    else console.error('No exist cordova!');

    },
    /**
     * 浏览图片
     * @param params
     * @param success
     * @param fail
     * @returns {boolean}
     */
    showImg (params = [], success, fail) {
        if (!success || !fail) {
            console.warn('丢失回调参数');
            return false
        }
        console.log('浏览图片');
        if( window.cordova )
            window.cordova.exec(success, fail, "Down", "showImg", [params]);
        else console.error('No exist cordova!');
    },
};
export default wpt;
