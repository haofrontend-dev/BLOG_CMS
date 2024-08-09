const whiteListByPath = ["/login"];

const whiteListByName = [];

const isWhiteList = to => {
    // path 和 name 任意一个匹配上即可
    return whiteListByPath.indexOf(to.path) !== -1 || whiteListByName.indexOf(to.name) !== -1;
};

export default isWhiteList;
