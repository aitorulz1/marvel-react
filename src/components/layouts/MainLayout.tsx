export const MainLayout = ({children}:any) => {

    return(    
    <div className="bg-white">
        <div className='mx-auto w-5/6'>
            { children }
        </div>
    </div>    
    )
}
