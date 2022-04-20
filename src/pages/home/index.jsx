import Header from '@/components/Header'

// Components
import MeetCompany from '@/components/MeetCompany';

// Information
import { homeInfo } from "@/services/homeInfo";

export default function Home(){
    return(
        <>
            <Header path="home"/>
            <MeetCompany title={homeInfo.meetCompany.title} content={homeInfo.meetCompany.content} />

        </>
    )
}