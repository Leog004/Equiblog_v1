import React, {useEffect, useState} from 'react'
import moment from 'moment';
import { getBlogsSlug, getblogDetails, getBrands } from '../../services';

const HeaderImage = 'https://images.unsplash.com/flagged/photo-1557296126-953ce119454c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80';
const LinearGradient = 'linear-gradient(0deg, #9f9effeb 0%, #0065c670 20%)'
export default function ({post}) {


    const [brands, setbrands] = useState([])

    useEffect(() => {
        getBrands().then((result) => setbrands(result));
    }, []);


    const sumbitComment = (e) => {
        e.preventDefault();

    }

    const getBorderColor = (brandName) => {

        if(String(brandName).toLowerCase() === 'rattler') return 'border-red-400';
        if(String(brandName).toLowerCase() === 'classic equine') return 'border-green-400';
        if(String(brandName).toLowerCase() === 'martin saddlery') return 'border-yellow-800';
        if(String(brandName).toLowerCase() === 'classic rope') return 'border-blue-400';
        if(String(brandName).toLowerCase() === 'cashel') return 'border-yellow-400';

        return 'border-red-200'
    }

    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;
    
        if (obj) {
          if (obj.bold) {
            modifiedText = (<b key={index}>{text}</b>);
          }
    
          if (obj.italic) {
            modifiedText = ( <span className='flex justify-center text-base italic p-10 border-l-2 border-blue-400 leading-8 text-justify mt-2 mb-10'> <em key={index}>{text}</em> </span>);
          }
    
          if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
          }

          if(obj.listItem){
            modifiedText = (<u key={index}>{text}</u>);
          }
        }

       
    
        switch (type) {
        case 'heading-one': 
            return <h1 key={index} className='text-gray-700 font-semibold text-xl mb-10'>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h1>;
        case 'heading-two': 
            return <h2 key={index} className='text-gray-700 font-semibold text-lg mt-10 mb-0'>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
        case 'heading-three':
            return <h3 key={index} className="text-gray-700 font-semibold text-lg mt-10 mb-0">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
        case 'paragraph':
         return <p key={index} className="text-base font-base leading-8 text-justify my-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
        case 'heading-four':
            return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
        case 'numbered-list':
            return  <ol className='list-disc px-4' key={index}>{obj.children.map((el) => el.children.map((el) => el.children.map((el, i) =>( <li key={i}>{el.text}</li>  ))))}</ol>;
          case 'image':
            return (
              <img className='flex justify-center w-full'
                key={index}
                alt={obj.title}
                height={obj.height}
                width={obj.width}
                src={obj.src}
              />
            );
          default:
            return modifiedText;
        }
      };
      

    return (
        <main className='w-full h-full bg-gray-100'>
            {/* // Component Image */}
            <div className="h-xl" style={{backgroundImage: `${LinearGradient},url(${HeaderImage})`, backgroundSize: 'cover'}}>         
                <div className="flex h-full justify-between items-center max-w-6xl mx-auto my-0">
                {/* Welcome Texts */}
                    <div className="flex flex-col justify-center items-baseline px-6 py-3 self-end mb-32 w-2/3">
                        <button className="bg-blue-400 px-6 py-1 rounded-md drop-shadow-md mb-4 text-white font-semibold text-sm">Classic Rope</button>
                        <h1 style={{textShadow: '0 2px 4px rgba(0,0,0,0.50)'}} className="text-5xl text-white font-semibold leading-normal"> THE CLASSIC DIFFERENCE IS HERE TO STAY </h1>
                        <span className=' border-l-2 border-blue-100 pl-5 py-5 text-sm mt-5 font-semibold text-gray-300'>
                                April 02, 2020 - (1 min)
                        </span>
                    </div>
                </div>
            </div>

            <div className="py-20 px-0 max-w-6xl w-full mx-auto my-0">
                <div className="flex justify-between gap-10">
                <div className="flex flex-col bg-white shadow-sm py-10 px-12 rounded-lg w-3/4">
                { 

                    post.blogContent &&
                    post.blogContent.raw.children.map((typeObj, index) => {
                        const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));
                        return getContentFragment(index, children, typeObj, typeObj.type);
                    })
                }
                        <hr/>
                            <div className='flex w-full py-10 items-center justify-between'>
                                <div className='flex'>
                                    <h4 className='mx-2 text-gray-700 text-md font-semibold'>Tags: </h4> 
                                    <button className='mx-1 px-3 py-2 text-xs text-white bg-blue-900 rounded-lg'>#Bussiness</button>
                                    <button className='mx-1 px-3 py-2 text-xs text-white bg-blue-900 rounded-lg'>#Classic Rope</button>
                                </div>
                                <div className='flex gap-2'>
                                    <h4 className='mx-2 text-gray-700 text-md font-semibold'>Share: </h4> 
                                    <span>Facebook</span>
                                    <span>Twitter</span>
                                    <span>Instagram</span>
                                </div>
                            </div>
                        <hr/>
                        <div className='flex py-10 justify-between items-center'>
                            <div>
                                <h2 className='text-xl text-gray-700 font-semibold'>Comments</h2>
                            </div>
                            <div className='flex gap-4'>
                                <button className='text-sm'>Sign In</button>
                                <button className='text-sm border-gray-100 px-2 py-2 rounded-lg border-2'>Sign Up</button>
                            </div>
                        </div>
                        <form className='flex w-full border-2 border-gray-200 rounded-lg h-28 shadow-inner'>
                            <textarea className='px-12 py-10 w-full' name='comment' placeholder='Enter your comment here...'></textarea>
                        </form>

                        <button onClick={sumbitComment} className='bg-blue-700 rounded-lg px-3 py-2 flex text-white mt-5 self-start' type="button">Submit</button>

                </div>

                    {/* <div className="flex flex-col bg-white shadow-sm py-10 px-12 rounded-lg w-2/3">
                        <h1 className="text-gray-700 font-semibold text-xl mb-10">Primo in altis pelle alumnae</h1>
                        <p className='text-base font-base leading-8 text-justify'>
                            Lorem markdownum obvius in seque opus, est bicorni forte; laeva. 
                            Iurant patria beatam semel communis et atra qua fugit, solet invicti cui inter patulas regibus remolliat volumina sorori? 
                            Quidem miscentem regna interea natura in adligat, aenum onere placere lympha. 
                            Sunt tantum intentare exhortatus avidas Scythides lacrimis imitatus prohibent terraeque donec ulterius thalamosque fero comitantibus. 
                            Tela cervicem insiluit locis, falsa et umida ulterius digitos excipiunt!
                        </p>
                        <p className='text-base font-base leading-8 text-justify my-10'>
                            Facto adversaque telum, stirpe? Sic et illi praesepia agna esse quas siluere capax sim tangi iubebit furtim cuncta, tutaeque ob utque stagni spargere. 
                            Totum silva feramus haec terras lacus omnia talia!
                        </p>
                        <ol className='list-disc px-4'>
                            <li>  Quis de per nec nec </li>
                            <li>  Quis de per nec nec </li>
                            <li>  Quis de per nec nec </li>
                            <li>  Quis de per nec nec </li>
                        </ol>

                        <h2 className='text-gray-700 font-semibold text-lg mt-10 mb-0'>Addidit neve qui versa</h2>
                        <p className='text-base font-base leading-8 text-justify mt-2 mb-10'>
                            Facto adversaque telum, stirpe? Sic et illi praesepia agna esse quas siluere capax sim tangi iubebit furtim cuncta, tutaeque ob utque stagni spargere. 
                            Totum silva feramus haec terras lacus omnia talia!
                        </p>
                        <p className='text-base italic p-10 border-l-2 border-blue-400 leading-8 text-justify mt-2 mb-10'>
                        Leni vacuus: non sociorum et aperto onerosus extrema Pagasaea tempore gemunt et facta posset. Caecum tauros, ferrataque Ulixis pharetratae aquarum Plura cum sua invitaque qui verba rerum Romanique Tethyn interit ungues trahens illi.
                        </p>
                        <p className='text-base font-base leading-8 text-justify'>
                            Facto adversaque telum, stirpe? Sic et illi praesepia agna esse quas siluere capax sim tangi iubebit furtim cuncta, tutaeque ob utque stagni spargere. 
                            Totum silva feramus haec terras lacus omnia talia!
                        </p>

                        <p className='text-base font-base leading-8 text-justify mt-2 mb-5'>
                            Facto adversaque telum, stirpe? Sic et illi praesepia agna esse quas siluere capax sim tangi iubebit furtim cuncta, tutaeque ob utque stagni spargere. 
                            Totum silva feramus haec terras lacus omnia talia!
                        </p>
                        <hr/>
                            <div className='flex w-full py-10 items-center justify-between'>
                                <div className='flex'>
                                    <h4 className='mx-2 text-gray-700 text-md font-semibold'>Tags: </h4> 
                                    <button className='mx-1 px-3 py-2 text-xs text-white bg-blue-900 rounded-lg'>#Bussiness</button>
                                    <button className='mx-1 px-3 py-2 text-xs text-white bg-blue-900 rounded-lg'>#Classic Rope</button>
                                </div>
                                <div className='flex gap-2'>
                                    <h4 className='mx-2 text-gray-700 text-md font-semibold'>Share: </h4> 
                                    <span>Facebook</span>
                                    <span>Twitter</span>
                                    <span>Instagram</span>
                                </div>
                            </div>
                        <hr/>

                        <div className='flex py-10 justify-between items-center'>
                            <div>
                                <h2 className='text-xl text-gray-700 font-semibold'>Comments</h2>
                            </div>
                            <div className='flex gap-4'>
                                <button className='text-sm'>Sign In</button>
                                <button className='text-sm border-gray-100 px-2 py-2 rounded-lg border-2'>Sign Up</button>
                            </div>
                        </div>
                        <form className='flex w-full border-2 border-gray-200 rounded-lg h-28 shadow-inner'>
                            <textarea className='px-12 py-10 w-full' name='comment' placeholder='Enter your comment here...'></textarea>
                        </form>
                    </div> */}
                <aside className='flex sticky top-32 flex-col h-full w-1/3 gap-y-5'>
                    <h1 className="text-gray-700 text-center font-semibold text-xl mb-10">Brands</h1>
                    
                    {

                        brands.map((el) => (
                            <div className={`bg-white w-3/5 mx-auto my-0 shadow-md rounded-xl px-6 py-6 flex items-center cursor-pointer border-b-2 ${getBorderColor(el.brandName)}`}>
                                <img className='w-auto h-4' src={el.brandImage.url} />
                                <h3 className="mr-2 w-full text-right">{el.brandName}</h3>
                            </div>       
                        ))

                    }

                    {/* <div className="bg-white w-3/5 mx-auto my-0 shadow-md rounded-xl px-6 py-6 flex items-center cursor-pointer border-b-2 border-green-400">
                        <img className='w-auto h-4' src="https://classicequine.com/ce/assets/images/logo-ce-color.svg" />
                        <h3 className="mr-2 w-full text-right">Classic Equine</h3>
                    </div>
                    <div className="bg-white w-3/5 mx-auto my-0 shadow-md rounded-xl px-6 py-6 flex items-center cursor-pointer border-b-2 border-yellow-800">
                        <img className='w-auto h-4' src="https://classicrope.com/images/Brands/MARTIN.png" />
                        <h3 className="mr-2 w-full text-right">Martin Saddlery</h3>
                    </div>
                    <div className="bg-white w-3/5 mx-auto my-0 shadow-md rounded-xl px-6 py-6 flex items-center cursor-pointer border-b-2 border-blue-400">
                        <img className='w-auto h-4' src="https://classicrope.com/images/Brands/CLASSIC.png" />
                        <h3 className="mr-2 w-full text-right">Classic Rope</h3>
                    </div>
                    <div className="bg-white w-3/5 mx-auto my-0 shadow-md rounded-xl px-6 py-6 flex items-center cursor-pointer border-b-2 border-red-400">
                        <img className='w-auto h-4' src="https://classicrope.com/images/Brands/RATTLER.png" />
                        <h3 className="mr-2 w-full text-right">Rattler</h3>
                    </div>
                    <div className="bg-white w-3/5 mx-auto my-0 shadow-md rounded-xl px-6 py-6 flex items-center cursor-pointer border-b-2 border-yellow-400">
                        <img className='w-auto h-4' src="https://classicrope.com/images/Brands/CASHEL.png" />
                        <h3 className="mr-2 w-full text-right">Cashel</h3>
                    </div> */}
                </aside>
                    
                </div>
            </div>
        </main>
    )
}


// Fetch data at build time
export async function getStaticProps({ params }) 
{
    
    const data = await getblogDetails(params.slug);
    return {
      props: {
        post: data,
      },
    };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
    const posts = await getBlogsSlug();
    return {
      paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
      fallback: true,
    };
  }