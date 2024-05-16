import Link from 'next/link'
  const IndexPage = () => {
    return (
      <div>
        <h1>Index Page</h1>
        <Link href="./about">About</Link>
        <br/>
        <Link href="./products">Products</Link>
        <br/>
        <Link href="./films">Faille</Link>
        <br />
        <Link href="./movies">MovieList</Link>
        
      </div>
    )
  }
  export default IndexPage