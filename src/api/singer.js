import jsonp from 'common/js/jsonp.js'
import {commonParams, options} from './config'
export function getSingerList () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    g_tk: 5381,
    hostUin: 0,
    inCharset: 'utf8',
    outCharset: 'utf-8',
    platform: 'yqq',
    needNewCode: 0
  })
  return jsonp(url, data, options)
}
