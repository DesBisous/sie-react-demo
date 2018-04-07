
export const trimJson = (str) => {
    str = str.replace(/\ +/g, ""); //去掉空格
    str = str.replace(/[ ]/g, "");    //去掉空格
    str = str.replace(/[\r\n]/g, ""); //去掉回车换行
    return str;
};