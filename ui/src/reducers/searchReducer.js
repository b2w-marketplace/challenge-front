export default function (state = {profile: {}}, action) {
  console.log(action.payload)
  switch (action.type) {
    case 'LOADED':
      return {...action.payload.profile}
    case 'ERROR':
      return {profile: {}}
    default:
      return state
  }
}

