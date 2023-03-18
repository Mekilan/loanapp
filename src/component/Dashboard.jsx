import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, Typography, Grid } from "@mui/material";

import { get } from "./common/AxiosCreate";
import { BaseURL, GET_LOANAPP } from "./common/EndPoint";
import LoanOfferPage from "./LoanOfferPage";
import ContentHeader from "./ContentHeader";
import LoaderComponent from "./common/loader";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showLoanOffer, setShowLoanOffer] = useState(false);
  const [offerURL, setOfferUrl] = useState("");
  useEffect(() => {
    async function getLoanAppData() {
      setLoading(true);
      const URL = BaseURL;
      const response = await get(`${URL}${GET_LOANAPP}`);
      if (response.status === 200) {
        const loanappdata = response.data;
        setData(loanappdata);
      }
      setLoading(false);
    }
    getLoanAppData();
  }, []);
  const onCardClick = (offers_url) => {
    setShowLoanOffer(true);
    setOfferUrl(offers_url);
  };
  const onShowDashboard = () => {
    setShowLoanOffer(false);
  };
  return (
    <Typography component="div" sx={{ marginTop: "5rem", mx: 4 }}>
      {!showLoanOffer ? (
        <>
          <ContentHeader txtheader="Dashboard" />
          {loading ? <LoaderComponent loading={loading} /> : null}
          <Grid container spacing={2}>
            {data &&
              data.map((item, index) => (
                <Grid item md={3} key={index} sx={{width:"100%"}}> 
                  <Card
                    onClick={() => onCardClick(item.offers_url)}
                    sx={{
                      padding: "0.5rem",
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
                      width: "100%",
                    }}
                  >
                    <CardContent
                      sx={{
                        padding: 0,
                        marginLeft:"16px",
                        marginTop:"10px",
                      }}
                    >
                      <Typography component="div">
                        <Typography
                          component="span"
                          sx={{ color: "#1212fa", fontSize: "15px" }}
                        >
                          University :
                        </Typography>
                        <Typography
                          component="span"
                          sx={{ mx: 1, fontSize: "15px" }}
                        >
                          {item.university}
                        </Typography>
                      </Typography>

                      <Typography component="div">
                        <Typography
                          component="span"
                          sx={{ color: "#1212fa", fontSize: "15px" }}
                        >
                          Loan Amount :
                        </Typography>
                        <Typography
                          component="span"
                          sx={{ mx: 1, fontSize: "15px" }}
                        >
                          {item.loan_amount}
                        </Typography>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </>
      ) : (
        <LoanOfferPage offerURL={offerURL} onCallBack={onShowDashboard} />
      )}
    </Typography>
  );
};

export default Dashboard;
