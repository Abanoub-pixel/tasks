// import { service } from './service';
import "./App.css";
import axios from "axios";
import { Company } from "./types";
import { useEffect, useState } from "react";
export type Props = {
  src?: string | undefined;
};
function App() {
  const [companies, setCompanies] = useState<Company[] | null>();
  useEffect(() => {
    const url = "https://forall.sa/services/api/ads/companies?page_count=30";
    axios.get(url).then((response) => {
      setCompanies(response.data.data);
     
    });
  }, []);
  return (
    <div className="App">
      {companies
        ? companies.map((company) => {
            return <div key={company.id}><img src={Object.values(company.logo)[5]} alt="" />
            <div>Name of the company/bank: {company.name.key}</div>
            <div>The Owner: {company.owner.name}</div>
            <div>Email: {company.owner.email}</div>
            <div>Contact Us: {company.social_links.company_mobile}</div>
            <div>Website: {company.social_links.website}</div>
            </div>;
          })
        : null}
    </div>
  );
}

export default App;
