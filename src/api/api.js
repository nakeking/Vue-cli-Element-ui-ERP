import axios from 'axios';
import config from './config';
export function Axios(url, params={}, type='get', contentType="application/json"){
	var url = config.url + url;
	return new Promise((resolve, reject) => {
		axios({
			method: type,
			url: url,
			params: params,
			headers: {
				"Content-Type": contentType,
			}
		}).then((res) => {
			resolve(res.data)
		}).catch(err => {
			reject(err);
		})
	})
}