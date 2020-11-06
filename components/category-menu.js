
import Link from 'next/link'
import {useRouter} from 'next/router'
import {Select,Menu} from "antd";
import {getcategory} from '../contrib/category-options'
// import {FileJpgOutlined,UserOutlined,ArrowRightOutlined} from '@ant-design/icons';


function Category(){

// const router = useRouter()
// const {search,tag} = router.query

// const tagAddr =search? "/search?search="+search.replace("and","&"):""

return (
    
    <div className="text-black flex flex-wrap w-full
     justify-center sm:justify-start py-1 sm:py-4 sm:my-0 sm:p-0 mt-1 sm:mt-0 sm:w-64 sm:mx-4   ">


<div className="sm:mx-0 mb-4 sm:mb-1">
<Menu    mode="vertical">
  
  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 sm:mr-2 mt-1">
<svg viewBox="0 0 24 24" class="ic -mrxs -fsh0" width="34" height="30">
<svg viewBox="0 0 640 512">
<path fill-rule="evenodd" d="M504 352H136.4c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 96H136.1c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0-192H136.6c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm106.5-139L338.4 3.7a48.15 48.15 0 0 0-36.9 0L29.5 117C11.7 124.5 0 141.9 0 161.3V504c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V256c0-17.6 14.6-32 32.6-32h382.8c18 0 32.6 14.4 32.6 32v248c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V161.3c0-19.4-11.7-36.8-29.5-44.3z"></path></svg>
</svg>
</span>
<span className="mt-0 sm:mr-5 w-20 sm:w-32 overflow-hidden"> Housing </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold uppercase">Housing</span>
</Menu.Item>
{Object.values(getcategory('realestate')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={"/search?search="+value.replace('&','and')}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>

</div>

<div className="sm:mx-0 mb-4 sm:mb-1">
<Menu mode="vertical" >
  
  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 sm:mr-2 mt-1">
<svg viewBox="0 0 24 24" class="ic -mrxs -fsh0" width="34" height="30">
<svg viewBox="0 0 512 512" id="cat-groceries">
<path fill-rule="evenodd" d="M298.2 156.6c-52.7-25.7-114.5-10.5-150.2 32.8l55.2 55.2c6.3 6.3 6.3 16.4 0 22.6-3.1 3.1-7.2 4.7-11.3 4.7s-8.2-1.6-11.3-4.7L130.4 217 2.3 479.7c-2.9 6-3.1 13.3 0 19.7 5.4 11.1 18.9 15.7 30 10.3l133.6-65.2-49.2-49.2c-6.3-6.2-6.3-16.4 0-22.6 6.3-6.2 16.4-6.2 22.6 0l57 57 102-49.8c24-11.7 44.5-31.3 57.1-57.1 30.1-61.7 4.5-136.1-57.2-166.2zm92.1-34.9C409.8 81 399.7 32.9 360 0c-50.3 41.7-52.5 107.5-7.9 151.9l8 8c44.4 44.6 110.3 42.4 151.9-7.9-32.9-39.7-81-49.8-121.7-30.3z"></path></svg>
</svg>
</span>
<span className="mt-0 sm:mr-5 w-20 sm:w-32 overflow-hidden"> Supermarket </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold">SUPERMARKET</span>
</Menu.Item>
{Object.values(getcategory('supermarket')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={"/search?search="+value.replace('&','and')}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>
</div>


<div className="sm:mx-0 mb-4 sm:mb-1">
<Menu >
  
  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 sm:mr-2 mt-1">
<svg viewBox="0 0 24 24" class="ic -mrxs -fsh0" width="34" height="30">
<svg viewBox="0 0 640 512" id="cat-groceries">
<path fill-rule="evenodd" d="M544 192h-16L419.22 56.02A64.025 64.025 0 0 0 369.24 32H155.33c-26.17 0-49.7 15.93-59.42 40.23L48 194.26C20.44 201.4 0 226.21 0 256v112c0 8.84 7.16 16 16 16h48c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h48c8.84 0 16-7.16 16-16v-80c0-53.02-42.98-96-96-96zM160 432c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zm72-240H116.93l38.4-96H232v96zm48 0V96h89.24l76.8 96H280zm200 240c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z"></path></svg>
</svg>
</span>
<span className="mt-0 sm:mr-5 w-20 sm:w-32 overflow-hidden"> Vehicles </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold">VEHICLES</span>
</Menu.Item>
{Object.values(getcategory('vehicles')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={"/search?search="+value.replace('&','and')}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>
</div>



<div className="sm:mx-0 mb-4 sm:mb-1">
<Menu   >
  
  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 sm:mr-2 mt-1">
<svg viewBox="0 0 24 24" class="ic -mrxs -fsh0" width="34" height="30">
<svg  viewBox="0 0 576 512">
<path fill-rule="evenodd" d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"></path></svg>
</svg>
</span>
<span className="mt-0 sm:mr-5 w-20 sm:w-32 overflow-hidden"> Electronics </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold uppercase">Electronics</span>
</Menu.Item>
{Object.values(getcategory('electronics')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={"/search?search="+value.replace('&','and')}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>
</div>


<div className="sm:mx-0 mb-4 sm:mb-1">
<Menu >
  
  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 sm:mr-2 mt-1">
<svg viewBox="0 0 24 24" class="ic -mrxs -fsh0" width="34" height="30">
<svg viewBox="0 0 640 512" id="cat-groceries">
<path fill-rule="evenodd" d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"></path></svg>
</svg>
</span>
<span className="mt-0 sm:mr-5 w-20 sm:w-32 overflow-hidden"> Software </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold">Software</span>
</Menu.Item>
{Object.values(getcategory('software')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={"/search?search="+value.replace('&','and')}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>
</div>



<div className="sm:mx-0 mb-4 sm:mb-1">
<Menu   >
  
  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 sm:mr-2 mt-1">
<svg viewBox="0 0 24 24" class="ic -mrxs -fsh0" width="34" height="30">
<svg viewBox="0 0 640 512">
<path fill-rule="evenodd" d="M631.2 96.5L436.5 0C416.4 27.8 371.9 47.2 320 47.2S223.6 27.8 203.5 0L8.8 96.5c-7.9 4-11.1 13.6-7.2 21.5l57.2 114.5c4 7.9 13.6 11.1 21.5 7.2l56.6-27.7c10.6-5.2 23 2.5 23 14.4V480c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V226.3c0-11.8 12.4-19.6 23-14.4l56.6 27.7c7.9 4 17.5.8 21.5-7.2L638.3 118c4-7.9.8-17.6-7.1-21.5z"></path></svg>
</svg>
</span>
<span className="mt-0 sm:mr-5 w-20 sm:w-32 overflow-hidden"> Fashion </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold uppercase">Fashion</span>
</Menu.Item>
{Object.values(getcategory('fashion')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={"/search?search="+value.replace('&','and')}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>
</div>



<div className="sm:mx-0 mb-4 sm:mb-1">
<Menu    >
  
  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 sm:mr-2 mt-1">
<svg viewBox="0 0 24 24" class="ic -mrxs -fsh0" width="34" height="30">
<svg viewBox="0 0 640 512">
<path fill-rule="evenodd" d="M232 224h56v56a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-56h56a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8h-56v-56a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v56h-56a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8zM576 48a48.14 48.14 0 0 0-48-48H112a48.14 48.14 0 0 0-48 48v336h512zm-64 272H128V64h384zm112 96H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33-17.47-32.77-32H16a16 16 0 0 0-16 16v16a64.19 64.19 0 0 0 64 64h512a64.19 64.19 0 0 0 64-64v-16a16 16 0 0 0-16-16z"></path></svg>
</svg>
</span>
<span className="mt-0 sm:mr-5 w-20 sm:w-32 overflow-hidden"> Health & Beauty </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold uppercase">Health & Beauty</span>
</Menu.Item>
{Object.values(getcategory('healthBeauty')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={"/search?search="+value.replace('&','and')}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>

</div>



<div className="sm:mx-0 mb-4 sm:mb-1">
<Menu >
  
  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 sm:mr-2 mt-1">
<svg viewBox="0 0 24 24" class="ic -mrxs -fsh0" width="34" height="30">
<svg viewBox="0 0 512 512" id="cat-groceries">
<path fill-rule="evenodd" d="M475.115 163.781L336 252.309v-68.28c0-18.916-20.931-30.399-36.885-20.248L160 252.309V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h464c13.255 0 24-10.745 24-24V184.029c0-18.917-20.931-30.399-36.885-20.248z"></path></svg>
</svg>
</span>
<span className="mt-0 sm:mr-5 w-20 sm:w-32 overflow-hidden"> Business & Industry </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold">Business & Industry</span>
</Menu.Item>
{Object.values(getcategory('bussIndustry')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={"/search?search="+value.replace('&','and')}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>
</div>


<div className="sm:mx-0 mb-4 sm:mb-1">
<Menu >
  
  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 sm:mr-2 mt-1">
<svg viewBox="0 0 24 24" class="ic -mrxs -fsh0" width="34" height="30">
<svg viewBox="0 0 640 512" id="cat-groceries">
<path fill-rule="evenodd" d="M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"></path></svg>
</svg>
</span>
<span className="mt-0 sm:mr-5 w-20 sm:w-32 overflow-hidden"> Games & Toys </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold">Games & Toys</span>
</Menu.Item>
{Object.values(getcategory('toyHobbies')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={"/search?search="+value.replace('&','and')}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>
</div>



<div className="sm:mx-0 mb-4 sm:mb-1">
<Menu >
  
  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 sm:mr-2 mt-1">
<svg viewBox="0 0 24 24" class="ic -mrxs -fsh0" width="34" height="30">
<svg viewBox="0 0 576 512" id="cat-groceries">
<path fill-rule="evenodd" d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path></svg>
</svg>
</span>
<span className="mt-0 sm:mr-5 w-20 sm:w-32 overflow-hidden"> Books & Movies </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold">Books & Movies</span>
</Menu.Item>
{Object.values(getcategory('booksmovmus')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={"/search?search="+value.replace('&','and')}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>
</div>




<div className="sm:mx-0 mb-4 sm:mb-1">
<Menu >
  
  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 sm:mr-2 mt-1">
<svg viewBox="0 0 24 24" class="ic -mrxs -fsh0" width="34" height="30">
<svg viewBox="0 0 576 512" id="cat-groceries">
<path fill-rule="evenodd" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg>
</svg>
</span>
<span className="mt-0 sm:mr-5 w-20 sm:w-32 overflow-hidden"> Home & Garden </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold">Home & Garden </span>
</Menu.Item>
{Object.values(getcategory('homegarden')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={"/search?search="+value.replace('&','and')}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>
</div>


<div className="sm:mx-0 mb-4 sm:mb-1">
<Menu >
  
  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 sm:mr-2 mt-1">
<svg viewBox="0 0 24 24" class="ic -mrxs -fsh0" width="34" height="30">
<svg viewBox="0 0 512 512" id="cat-groceries">
<path fill-rule="evenodd" d="M231.39 243.48a285.56 285.56 0 0 0-22.7-105.7c-90.8 42.4-157.5 122.4-180.3 216.8a249 249 0 0 0 56.9 81.1 333.87 333.87 0 0 1 146.1-192.2zm-36.9-134.4a284.23 284.23 0 0 0-57.4-70.7c-91 49.8-144.8 152.9-125 262.2 33.4-83.1 98.4-152 182.4-191.5zm187.6 165.1c8.6-99.8-27.3-197.5-97.5-264.4-14.7-1.7-51.6-5.5-98.9 8.5A333.87 333.87 0 0 1 279.19 241a285 285 0 0 0 102.9 33.18zm-124.7 9.5a286.33 286.33 0 0 0-80.2 72.6c82 57.3 184.5 75.1 277.5 47.8a247.15 247.15 0 0 0 42.2-89.9 336.1 336.1 0 0 1-80.9 10.4c-54.6-.1-108.9-14.1-158.6-40.9zm-98.3 99.7c-15.2 26-25.7 54.4-32.1 84.2a247.07 247.07 0 0 0 289-22.1c-112.9 16.1-203.3-24.8-256.9-62.1zm180.3-360.6c55.3 70.4 82.5 161.2 74.6 253.6a286.59 286.59 0 0 0 89.7-14.2c0-2 .3-4 .3-6 0-107.8-68.7-199.1-164.6-233.4z"></path></svg>
</svg>
</span>
<span className="mt-0 sm:mr-5 w-20 sm:w-32 overflow-hidden"> Sporting Goods  </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold"> Sporting Goods </span>
</Menu.Item>
{Object.values(getcategory('sportgoods')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={"/search?search="+value.replace('&','and')}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>
</div>



<div className="sm:mx-0 mb-4 sm:mb-1">
<Menu >
  
  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 sm:mr-2 mt-1">
<svg viewBox="0 0 24 24" class="ic -mrxs -fsh0" width="32" height="30">
<svg viewBox="0 0 512 512" id="cat-groceries">
<path fill-rule="evenodd" d="M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z"></path></svg>
</svg>
</span>
<span className="mt-0 sm:mr-5 w-20 sm:w-32 overflow-hidden"> Collectibles & Arts  </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold"> Collectibles & Arts </span>
</Menu.Item>
{Object.values(getcategory('collectart')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={"/search?search="+value.replace('&','and')}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>
</div>


<div className="sm:mx-0 mb-4 sm:mb-1">
<Menu >
  
  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 sm:mr-2 mt-1">
<svg viewBox="0 0 24 24" class="ic -mrxs -fsh0" width="32" height="30">
<svg viewBox="0 0 512 512" id="cat-groceries">
<path fill-rule="evenodd" d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path></svg>
</svg>
</span>
<span className="mt-0 sm:mr-5 w-20 sm:w-32 overflow-hidden">Other categories  </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold"> Other categories </span>
</Menu.Item>
{Object.values(getcategory('otherItem')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={"/search?search="+value.replace('&','and')}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>
</div>



    </div>
)

}

export default Category
