import Link from "next/link"
import { v4 as uuidv4 } from 'uuid';


const CategoryCard = ({categoryObject}) => {
    const cat = encodeURIComponent(categoryObject?.name)
  return (
    <div className="w-64 h-90 m-4 cursor-pointer 
    flex flex-col items-end justify-end">
      <Link href={`/categories/${cat}`}>
        <img src={categoryObject.image} className="w-64 h-90 "/> 
        <p className="font-bold w-full text-center text-xl black bg-white capitalize">
          {categoryObject?.name?.split('-').join(' ')}
        </p>
      </Link>
    </div>
  )
}

export default CategoryCard