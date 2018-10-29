export default function (state = {image: {}}, action) {
  console.log(action.payload)
  switch (action.type) {
    case 'LOADED_IMAGE':
      return {...action.payload}
    case 'ERROR_IMAGE':
      return {image: {}}
    default:
      return state
  }
}
