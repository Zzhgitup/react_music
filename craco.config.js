// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracolessPlugin = require('craco-less');
//处理less资源
module.exports = {
  webpack: {
    //webpack配置
    // 配置别名
    alias: {
      //设置别名是为了让后续引用的地方减少路径的复杂度
      '@': path.resolve('src')
    }
  },
  plugins: [{ plugin: CracolessPlugin }]
};
