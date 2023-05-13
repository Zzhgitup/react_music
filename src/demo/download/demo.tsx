import React, { PureComponent } from 'react';
//声明接口
interface Iprops {
  name?: string;
  age?: number;
}
interface Istate {
  message: string;
  age: number;
}
interface Isnck {
  //第三个泛型 用来指定getSnapshotBeforeUpdate返回对象的类型
  nnn: string;
  mm: number;
}
//类式组件继承自PureComponent  需要在后面指定类型，
class demo extends PureComponent<Iprops, Istate> {
  state = {
    message: 'sss',
    age: 123
  };
  constructor(props: Iprops) {
    super(props);
  }
  /*   getSnapshotBeforeUpdate() {
    return { nnn: '123', mm: 12 };
  }
  componentDidUpdate(
    prevProps: Readonly<Iprops>,
    prevState: Readonly<Istate>,
    snapshot?: Isnck | undefined
  ): void {} */
  render(): React.ReactNode {
    return <div>{this.state.message}</div>;
  }
}
export default demo;
