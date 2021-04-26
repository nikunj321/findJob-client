import JobCard from "../components/JobCard"
import JobDisplay from "../components/JobDisplay"
import SecondHeader from "../components/SecondHeader"
import TopHeader from "../components/TopHeader"


const Search = () => {
    return (
        <>
            <TopHeader />
            <SecondHeader isIndex={false} />
            <JobDisplay>
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </JobDisplay>
        </>
    );
}

export default Search;