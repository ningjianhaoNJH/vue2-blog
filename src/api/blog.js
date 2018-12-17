import request from '@/utils/request';

export function blogRequest(data) {
  return request({
    url: '/blog',
    method: 'post',
    data,
  });
}
