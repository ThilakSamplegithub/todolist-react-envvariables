export default function Home(){
    console.log(process.env)
    // console.log(process.env.REACT_APP_SOME_VARIABLE)
    return(
        <>
         <p>{`${process.env.NODE_ENV==='development'?process.env.REACT_APP_DEVELOPMENT_URL:process.env.REACT_APP_PROD_URL}`} </p>
        </>
    )
}