// import ShowcaseItem from "./showcase_item"

const details  = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
const data = [
    {
        'name':'Full Time Jobs',
        'detail': details
    },
    {
        'name':'Part Time Jobs ',
        'detail': details
    },
    {
        'name':'Remote Jobs',
        'detail': details
    }
]


function Showcase(){
    return (
        <div className="flex flex-row justify-center   content-start items-start self-start self-start">
            {data.map((e)=>{
                return (<ShowcaseItem name={e.name} detail = {e.detail} />)})}
        </div>
    )
}


function ShowcaseItem({name, detail}){
    
    return (
        <div className="2xl:w-96 2xl:h-80 bg-white rounded-xl 2xl:drop-shadow-2xl my-12 mx-6 p-12 flex flex-col ">
        <h3 className="text-xl font-bold self-start">{name}</h3>
        <h3 className="text-sm text-justify text-gray-500 py-3">
            {detail}
        </h3>
        <h3 className="text-xl font-bold self-start text-gray-500">{name }    &#8594;</h3>
                </div>)
                
}


export default Showcase