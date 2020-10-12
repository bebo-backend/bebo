import {useRouter} from 'next/router'



const Post=({value})=>{



return (<div>
<h1>Blog post</h1>
<p> Blog {value}</p>


    

<style jsx>{`
h1 {
font-size: 3rem;
}
`}</style>






</div>)

}
Post.getInitialProps=({query})=>{
return {
    value:query.id
}


}


export default Post