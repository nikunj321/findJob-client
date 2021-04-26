import EmailSubscribe from "../components/EmailSubscribe"
import EmployerFind, { EmployerAttention } from "../components/EmployerFind"
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
                <EmailSubscribe />
                <JobCard />
                <EmployerFind />
                <JobCard />
                <EmployerAttention />
                <JobCard />
                <JobCard />
                <JobCard />
            </JobDisplay>
        </>
    );
}

export default Search;