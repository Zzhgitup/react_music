import React, { memo, useState } from 'react';
import { FC, ReactNode } from 'react';
import { getStorry } from '@/utils';
import { FootderWrapper } from './style';
interface Props {
  childern?: ReactNode;
}
const Appfooter: FC<Props> = () => {
  function handleScroll() {
    getStorry() == 0 ? setishsow(false) : setishsow(true);
  }
  window.addEventListener('scroll', handleScroll);
  const [isShow, setishsow] = useState<boolean>(false);
  return (
    <FootderWrapper>
      <div className="footer">
        <ul className="entry">
          <li className="minsoa">
            <a href="" className="entry_img ei1"></a>
            <span className="entry_span">音乐开放平台</span>
          </li>
          <li>
            <a href="" className="entry_img ei2"></a>
            <span className="entry_span">音乐开放平台</span>
          </li>
          <li>
            <a href="" className="entry_img ei3"></a>
            <span className="entry_span">音乐开放平台</span>
          </li>
          <li>
            <a href="" className="entry_img ei4"></a>
            <span className="entry_span">音乐开放平台</span>
          </li>
          <li>
            <a href="" className="entry_img ei5"></a>
            <span className="entry_span">音乐开放平台</span>
          </li>
          <li>
            <a href="" className="entry_img ei6"></a>
            <span className="entry_span">音乐开放平台</span>
          </li>
          <li className="mixsoa1">
            <a href="" className="entry_img ei7"></a>
            <span className="entry_span">音乐开放平台</span>
          </li>
        </ul>

        <div className="report">
          <span>违法和不良信息举报电话：0571-89853516</span>
          <span>
            举报邮箱：
            <a href="mailto:ncm5990@163.com" target="_blank" rel="noopener noreferrer">
              ncm5990@163.com
            </a>
          </span>
        </div>
        <div className="info">
          <span>粤B2-20090191-18</span>
          <a
            href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action"
            rel="noopener noreferrer"
            target="_blank"
          >
            工业和信息化部备案管理系统网站
          </a>
        </div>
        <div className="copyright">
          <span>网易公司版权所有©1997-2020</span>
          <span>
            杭州乐读科技有限公司运营：
            <a
              href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
              rel="noopener noreferrer"
              target="_blank"
            >
              浙网文[2018]3506-263号
            </a>
          </span>
        </div>
      </div>
      {isShow ? <a id="g_backtop" href="#"></a> : ''}
    </FootderWrapper>
  );
};
export default memo(Appfooter);
