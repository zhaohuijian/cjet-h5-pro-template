import { observable, action } from 'mobx'

class loginStore {
  //定义状态并使其可观察
  @observable loginTitle = ''

  //定义动作更改状态
  @action setLoginTitle = (value) => {
    this.loginTitle = value
  }
}

export default {
  loginStore: new loginStore()
}
