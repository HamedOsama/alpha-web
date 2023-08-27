import {v4 as uuidv4} from 'uuid';
import ClickableCategory from "@/components/navigation/ClickableCategory";
import Link from 'next/link';

const MegaMenu = ({TreeData}) => {

    const menu = TreeData.map(category => {

        return (
            <div className='cinzel text-xl '>
                <Link
                    href={`/categories/${category.name}`}
                    key={uuidv4()}
                    className='hover:bg-blue-100 mb-5'>
                    <h3 key={uuidv4()} className="flex capitalize font-bold mb-3">{
                            category
                                .name
                                .split('-')
                                .join(' ')
                        }</h3>
                </Link>
                {
                    category
                        .subCategories
                        .map(sub => {
                            return (
                                <Link href={`/categories/${category.name}/${sub.name}`} key={uuidv4()}>
                                    <div className="flex flex-row w-full items-center" key={uuidv4()}>
                                        <h4 className=" capitalize text-lg" >
                                            {sub.name.split('-').join(' ')}
                                        </h4>

                                    </div>
                                </Link>
                            )
                        })
                }
            </div>
        )
    })

    return (
        <div className='group w-screen h-fit flex-col-center absolute top-[150px] z-50 '>
            <img
                src="/assets/icons/down-arrow.png"
                alt=""
                style={{
                    animationIterationCount: 3
                }}
                className='w-5 group-hover:hidden animate-ping'/>

            <div
                className='w-screen h-fit flex flex-row items-start justify-evenly flex-no-wrap hidden group-hover:flex bg-white/80 p-5 pt-0'>
                {menu}
            </div>
        </div>
    )
}

export default MegaMenu