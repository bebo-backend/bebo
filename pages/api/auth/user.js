import withSession from '../../../lib/session'
import axios from 'axios';
import {BASE_URL} from '../../../settings'

export default withSession(async (req, res) => {
  const user = req.session.get('user')


  if (user) {
    // in a real world application you might read the user id from the session and then do a database request
    // to get more information on the user if needed
    // console.log('use user '+Object.values(user))
    const url = BASE_URL+'dashboard/profile/'+user.username+'/'
    const response =  await axios.get(url)
    const image = response.data.image
    const data= {...user,image}

    res.json(data)
  } else {
    res.json({
      isLoggedIn: false
    })
  }
})
