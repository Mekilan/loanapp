import React, { memo, useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";

import { get } from "./common/AxiosCreate";
import { BaseURL, GET_LOANAPP } from "./common/EndPoint";
import ContentHeader from "./ContentHeader";
import LoaderComponent from "./common/loader";

const styles = {
  loffcontainer: {
    marginTop: "6rem",
    mx: 3,
  },
  logoContainer: {
    width: "100%",
    margin: "auto",
    lineHeight: "80px",
    height: "80px",
    mx: 2,
  },
  btnback: {
    display: "flex",
    justifyContent: "flex-end",
    my: 2,
  },
  cardcontenttxt: {
    fontSize: "14px",
  },
};

const LoanOfferPage = ({ offerURL, onCallBack }) => {
  const [loanOfferData, setLoanOfferData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getLoanAppOffer() {
      setLoading(true);
      const URL = `${BaseURL}${GET_LOANAPP}/1/offers`;
      const response = await get(URL);
      if (response.status === 200) {
        const loanappdata = response.data;
        setLoanOfferData(loanappdata);
      }
      setLoading(false);
    }
    getLoanAppOffer();
  }, [offerURL]);
  const onGoBack = () => {
    onCallBack();
  };
  const onCardSort = (sortby) => {
    const data = [...loanOfferData];
    if (sortby === "interset_r") {
      const sortedData = data.sort((a, b) => a.interest_rate - b.interest_rate);
      setLoanOfferData(sortedData);
    }
    if (sortby === "tenure") {
      const sortedData = data.sort((a, b) => a.tenure - b.tenure);
      setLoanOfferData(sortedData);
    }
  };
  return (
    <Typography component="div" sx={styles.loffcontainer}>
      <ContentHeader txtheader="Loan Offers" />
      {loading ? (
        <LoaderComponent loading={loading} />
      ) : (
        <>
          <Typography component="div" sx={styles.btnback}>
            <Button
              onClick={() => onGoBack()}
              variant="contained"
              color="primary"
            >
              Go Back
            </Button>
          </Typography>
          <Typography component="div">
            <Typography component="div" sx={{ display: "flex" }}>
              <Typography component="span" sx={{ fontSize: "13px", my: 1.5 }}>
                Sort By : &nbsp;
                <Button
                  onClick={() => onCardSort("interset_r")}
                  style={{ fontSize: "12px" }}
                >
                  Interset Rate
                </Button>
                <span>&nbsp;|</span>
                <Button
                  onClick={() => onCardSort("tenure")}
                  style={{ fontSize: "12px" }}
                >
                  Tenure
                </Button>
              </Typography>
            </Typography>
          </Typography>
          <Grid container spacing={3}>
            {loanOfferData &&
              loanOfferData.map((item, index) => (
                <Grid item md={4} key={index} sx={{ width: "100%" }}>
                  <Card
                    sx={{
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
                      padding: "1rem",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "stretch",
                    }}
                  >
                    <Typography component="div">
                      <Typography
                        component="img"
                        src={item.bank_logo}
                        width="100px"
                        height="100px"
                      />
                    </Typography>
                    <CardContent
                      sx={{
                        width: "100%",
                        padding: "20px 10px",
                        margin: "0px 10px",
                      }}
                    >
                      <Typography component="div" color="text.secondary">
                        <Typography component="div" sx={styles.cardcontenttxt}>
                          Bank Name : {item.bank}
                        </Typography>
                        <Typography component="div" sx={styles.cardcontenttxt}>
                          Interset Rate : {item.interest_rate}
                        </Typography>
                        <Typography component="div" sx={styles.cardcontenttxt}>
                          Tenure : {item.tenure}
                        </Typography>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </>
      )}
    </Typography>
  );
};

export default memo(LoanOfferPage);
