
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
<path d="M432,176H320V64a48,48,0,0,0-48-48H80A48,48,0,0,0,32,64V480a16,16,0,0,0,16,16H152a8,8,0,0,0,8-8V416.45c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,192,416v72a8,8,0,0,0,8,8H464a16,16,0,0,0,16-16V224A48,48,0,0,0,432,176ZM98.08,431.87a16,16,0,1,1,13.79-13.79A16,16,0,0,1,98.08,431.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,98.08,351.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,98.08,271.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,98.08,191.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,98.08,111.87Zm80,240a16,16,0,1,1,13.79-13.79A16,16,0,0,1,178.08,351.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,178.08,271.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,178.08,191.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,178.08,111.87Zm80,320a16,16,0,1,1,13.79-13.79A16,16,0,0,1,258.08,431.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,258.08,351.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,258.08,271.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,258.08,191.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,258.08,111.87ZM444,464H320V208H432a16,16,0,0,1,16,16V460A4,4,0,0,1,444,464Z"/><path d="M400,400a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z"/><path d="M400,320a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z"/><path d="M400,240a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z"/><path d="M336,400a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z"/><path d="M336,320a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z"/><path d="M336,240a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z"/>
</svg>
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
<path d="M483.13,245.38C461.92,149.49,430,98.31,382.65,84.33A107.13,107.13,0,0,0,352,80c-13.71,0-25.65,3.34-38.28,6.88C298.5,91.15,281.21,96,256,96s-42.51-4.84-57.76-9.11C185.6,83.34,173.67,80,160,80a115.74,115.74,0,0,0-31.73,4.32c-47.1,13.92-79,65.08-100.52,161C4.61,348.54,16,413.71,59.69,428.83a56.62,56.62,0,0,0,18.64,3.22c29.93,0,53.93-24.93,70.33-45.34,18.53-23.1,40.22-34.82,107.34-34.82,59.95,0,84.76,8.13,106.19,34.82,13.47,16.78,26.2,28.52,38.9,35.91,16.89,9.82,33.77,12,50.16,6.37,25.82-8.81,40.62-32.1,44-69.24C497.82,331.27,493.86,293.86,483.13,245.38ZM208,240H176v32a16,16,0,0,1-32,0V240H112a16,16,0,0,1,0-32h32V176a16,16,0,0,1,32,0v32h32a16,16,0,0,1,0,32Zm84,4a20,20,0,1,1,20-20A20,20,0,0,1,292,244Zm44,44a20,20,0,1,1,20-19.95A20,20,0,0,1,336,288Zm0-88a20,20,0,1,1,20-20A20,20,0,0,1,336,200Zm44,44a20,20,0,1,1,20-20A20,20,0,0,1,380,244Z"/>
</svg>
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
<path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM399,352H353.78a8,8,0,0,1-6.91-4l-16.14-27.68a8,8,0,0,1-.86-6l14.86-59.92a8,8,0,0,1,4.65-5.45l28.1-11.9a8,8,0,0,1,8.34,1.3l41.63,35.82a8,8,0,0,1,2.69,7.26,174.75,174.75,0,0,1-24.28,66.68A8,8,0,0,1,399,352ZM134.52,237.13l28.1,11.9a8,8,0,0,1,4.65,5.45l14.86,59.92a8,8,0,0,1-.86,6L165.13,348a8,8,0,0,1-6.91,4H113a8,8,0,0,1-6.82-3.81,174.75,174.75,0,0,1-24.28-66.68,8,8,0,0,1,2.69-7.26l41.63-35.82A8,8,0,0,1,134.52,237.13Zm256.94-87.24-18.07,51.38A8,8,0,0,1,369,206l-29.58,12.53a8,8,0,0,1-8.26-1.24l-56.26-47.19A8,8,0,0,1,272,164V130.42a8,8,0,0,1,3.56-6.65l42.83-28.54a8,8,0,0,1,7.66-.67A176.92,176.92,0,0,1,390,142,8,8,0,0,1,391.46,149.89ZM193.6,95.23l42.84,28.54a8,8,0,0,1,3.56,6.65V164a8,8,0,0,1-2.86,6.13l-56.26,47.19a8,8,0,0,1-8.26,1.24L143,206a8,8,0,0,1-4.43-4.72l-18.07-51.38A8,8,0,0,1,122,142a176.92,176.92,0,0,1,64-47.48A8,8,0,0,1,193.6,95.23Zm17.31,327.46L191.18,373a8,8,0,0,1,.52-7l15.17-26a8,8,0,0,1,6.91-4h84.44a8,8,0,0,1,6.91,4l15.18,26a8,8,0,0,1,.53,7l-19.59,49.67a8,8,0,0,1-5.69,4.87,176.58,176.58,0,0,1-79,0A8,8,0,0,1,210.91,422.69Z"/></svg>
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
