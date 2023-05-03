const libro = import.meta.glob("/src/public/libro/*.jpg")
console.log(libro)
import Book from './Book'

export default function LibroPage(){
    const data: (() => Promise<unknown>)[] = [(async () => Promise<unknown>)]
    for(let i = 1; i < 167; i++){
        if(i.toString().length==1){
            data.push(libro["/src/public/libro/0"+i+".jpg"])
        } else{
            data.push(libro["/src/public/libro/"+i+".jpg"])
        }
    }

    return(
        <Book copertinaHeight='30rem' copertinaWidth='40rem' width='600rem' imageHeight={"300rem"} gradient={{from:"#06f1b755", to:"#3906f155"}} copertina={libro["/src/public/libro/00.jpg"].name} data={data.map<{image: string}>((item) => ({image: item.name}))}/>
    )
}