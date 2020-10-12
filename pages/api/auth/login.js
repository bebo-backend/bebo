import {postFetch} from '../../../lib/ax-fetch'
import withSession from '../../../lib/session'
import {BASE_URL} from '../../../settings'
import axios from 'axios';

export default withSession(async (req, res) => {
  const { username,password } = await req.body
  // console.log('username '+Object.keys(JSON.parse(req.body)))
  const url = BASE_URL+'login/'
  try {
    // we check that the user exists on GitHub and store some data in session
    const res_data = await postFetch(url,req.body)

      if (res_data.error){

      res.json(res_data)

  } else {

    const {username, token,image} = res_data
    const user = { isLoggedIn: true, username,token,image:image ? image :null}
    // // const user = { isLoggedIn: true, login, avatarUrl }
    // console.log('res '+Object.keys(res_data))

    req.session.set('user', user)
    await req.session.save()
    res.json({"message":"Logged in"})



}
  

  } catch (error) {
    const { response: fetchResponse } = error
    res.status(fetchResponse?.status || 500).json(error.data)
  }
})
