
import { BASE_URL,SITE_URL } from '../settings'
import axios from 'axios'


const Sitemap = ({data=[]})=>{

	return(`<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${data && Object.values(data)
            .map(page => {
              const path = "item/"+page.id+"/"+page.title

              const route = path
              
              return `<url>
                          <loc>${`${SITE_URL}${route}`}</loc>
                      </url>
                  `
            }).join("")
            }
      </urlset>`
	)
}



export const getServerSideProps = async({query})=>{

	const  response = await axios.get(BASE_URL+'getallitem')


  return {
    props:{
      data:response.data ?response.data:[],
    }
  }


}




export default Sitemap