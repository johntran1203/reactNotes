import { useQuery } from "@tanstack/react-query";
import { Axios } from "axios";

const Home = (props) => {
    // const {data, isLoading, isError } = useQuery(['cat'], ()=> {
    //     return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    // })
    
    // if(isError) {
    //     return <h1>Sorry, there was an error</h1>
    // }

    // if(isLoading) {
    //     return <h1>Loading </h1>
    // }
    // return ( <div>
    //    <h1>This is a test paleae work {props.userName}</h1>
    //    <p>{data?.fact} ok buddy</p>
    // </div> );
    const {
        data: catData,
        isLoading,
        isError,
        refetch,
      } = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
      });
    
      if (isError) {
        return <h1> Sorry, there was an error </h1>;
      }
    
      if (isLoading) {
        return <h1> Loading...</h1>;
      }
    
      return (
        <h1>
          This is the home page <p>{catData?.fact}</p>
          <button onClick={refetch}> Update Data </button>
        </h1>
      );
}
 
export default Home;


