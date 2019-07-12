
import * as request from 'request'

import {User} from '../db/model'
import {wx} from '../config'


const getUser = async () => {
  let users = await User.find({})
  return users
}

const getWx = async (code:string) => {
  let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${wx.appid}&secret=${wx.secret}&js_code=${code}&grant_type=authorization_code`
  await request(url, (error, res, body) => {
      if(!error) {
        console.log(res)
        console.log(body)
      }
    })
}

export {
  getUser
}