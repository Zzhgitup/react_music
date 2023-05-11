import React, { ReactNode, memo } from 'react';

interface Props {
  childern?: ReactNode;
  name?: string;
  age?: string;
}
//使用泛型进行
const Download: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      <div>name:{props.name}</div>
      <div>age:{props.age}</div>
      {props.childern}
    </div>
  );
};
Download.defaultProps = {
  name: '1',
  age: '1'
};
/* 当数据变化时，代码会重新执行一遍，但是子组件数据没有变化也会执行，
这个时候可以使用memo将子组件封装起来，让子组件的数据只在发生改变时才会执行 */

export default memo(Download);
//直接对props进行类型约束
/* export default function index(props: Props) {
  return (
    <div>
      <div>name:{props.name}</div>
      <div>age:{props.age}</div>
    </div>
  );
} */
