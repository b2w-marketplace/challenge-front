import axios from 'axios'
import _ from 'lodash'

export const search = () => dispatch => {
  const url = 'http://www.mocky.io/v2/5a5e38f3330000b0261923a5'
  axios({
    method: 'GET',
    url: url,
    headers: {'crossDomain': true, 'Content-Type': 'application/json'}
  })
    .then(response =>
      dispatch({
        type: 'LOADED',
        payload: response.data,
      })
    )
    .catch(error =>
      dispatch({
        type: 'ERROR',
        payload: error,
      })
    )

}
const loadImage = (query) => dispatch => {
  console.log(query)
  if (!_.isEmpty(query)) {
    axios.get(query, {
      responseType: 'arraybuffer'
    })
      .then(response => dispatch({
          type: 'LOADED_IMAGE',
          payload: new Buffer.from(response.data, 'binary').toString('base64')
        })
      )
      .catch(error =>
        dispatch({
          type: 'ERROR_IMAGE',
          payload: error,
        })
      )
  }
}
// }
//
// if (!_.isEmpty(response.data.profile.image)) {
//   console.log(response.data.profile.image)
//   axios({
//     method: 'GET',
//     url: response.data.profile.image,
//     headers: {
//       responseType: 'arraybuffer',
//       'Access-Control-Allow-Origin': '*',
//       'crossDomain': true,
//       'Content-Type': 'image'
//     }
//   })
//     .then(response => {
//         response.type('image/png');
//         response.end(response.data, 'binary');
//         dispatch({
//           type: 'LOADED_IMAGE',
//           payload: new Buffer.from(response.data, 'binary').toString('base64')
//         })
//       }
//     )
//     .error(error => {
//         console.log(error)
//         dispatch({
//           type: 'ERROR_IMAGE',
//           payload: error,
//         })
//       }
//     )
// }
