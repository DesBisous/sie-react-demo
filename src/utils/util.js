
export const trimJson = (str) => {
    str = str.replace(/\\ +/g, ""); //去掉空格
    str = str.replace(/[ ]/g, "");    //去掉空格
    str = str.replace(/[\r\n]/g, ""); //去掉回车换行
    return str;
};

export const GetUrlRelativePath = () => {
    let url = window.location.href.toString();
    let end = url.indexOf("#");
    url = end >= 0 ? url.substr(0, end) : url;
    end = url.indexOf("?");
    url = end >= 0 ? url.substr(0, end) : url;
    end = url.lastIndexOf("/");
    url = end >= 0 ? url.substr(0, end) : url;
    return url;
};