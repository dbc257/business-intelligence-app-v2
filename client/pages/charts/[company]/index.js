import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import DropdownMenu from "../../../components/Buttons/DropDown";
import { Router, useRouter } from "next/router";
// import Router from "next/router"
// import { query } from "express";

const Company = () => {
  const router = useRouter();
  const { company } = router.query;
  // const router = useRouter();
  // const { company } = router.query;
  console.log("company-index")
  console.log(company)
  // const { company } = useRouter(query)

  const [financials, setFinancials] = useState([]);
  const [companyName, setCompanyName] = useState("");

  function SortData(result) {
    const nameResult = result.sort(function (a, b) {
      let aa = a.date.split("-").join();
      let bb = b.date.split("-").join();
      return aa < bb ? -1 : aa > bb ? 1 : 0;
  })
  return nameResult
}

function CapitalizeName() {
  let nameCapitalized = company.charAt(0).toUpperCase() + company.slice(1)
  return nameCapitalized
}

// useEffect(() => {
//   fetch(`https://bi-cube.herokuapp.com/${company}`)
//     // fetch(`http://localhost:3001/${company}`)
//     .then((response) => response.json())
//     .then((result) => {
//       let data = result.sort(function (a, b) {
//         let aa = a.date.split("-").join(),
//           bb = b.date.split("-").join();
//         return aa < bb ? -1 : aa > bb ? 1 : 0;
//       });
//       setFinancials(data);

//       let companyLetter = company.charAt(0).toUpperCase();
//       setCompanyName(companyLetter + company.slice(1));
//     });
// });
  useEffect(() => {
    let isSubscribed = true
    // fetch(`https://bi-cube.herokuapp.com/${company}`)
    fetch(`https://business-intelligence-app.herokuapp.com/${company}`)
      .then((response) => response.json())
      .then((result) => {
        if (isSubscribed) {
      setFinancials(SortData(result)), 
      setCompanyName(CapitalizeName())
        }
      })
      return () => isSubscribed = false
    });
    //  .catch(error => (isSubscribed ? setError(error.toString()) : null));
        // return () => isSubscribed = false
        //  data = SortData(result)
        // const data = result.sort(function (a, b) {
          //   let aa = a.date.split("-").join(),
          //     bb = b.date.split("-").join();
          //   return aa < bb ? -1 : aa > bb ? 1 : 0;
          // })
          // }).then(data => 
          
        // let companyLetter = company.charAt(0).toUpperCase()
        // setCompanyName(company.charAt(0).toUpperCase() + company.slice(1))
        // if (isSubscribed) {

          
        // }
      

  // {!error && bananas && bananas.map(banana => <li>{banana}</li>)}
  //   {error && <li className="error">{error}</li>}
  // if (financials) {const labelsDate = financials.map((financeDate) => {
  //   return financeDate.date
  // })
  // };
  // if (financials) {const dataRevenue = financials.map((financeRevenue) => {
  //   return financeRevenue.revenue;
  // });
  // };
  // if (financials) {const dataExpenses = financials.map((financeExpenses) => {
  //   return financeExpenses.costOfRevenue;
  // });
  // };
  // if (financials) {const dataProfit = financials.map((financeProfit) => {
  //   return financeProfit.grossProfit;
  // });
  // };
  const labelsDate = financials.map((financeDate) => {
      return financeDate.date
    })

  const dataProfit = financials.map((financeProfit) => {
    return financeProfit.grossProfit;
  });
  
  const dataExpenses = financials.map((financeExpenses) => {
    return financeExpenses.costOfRevenue;
  });
    
  const dataRevenue = financials.map((financeRevenue) => {
    return financeRevenue.revenue;
  });
  // function getLabelsDate() {
  //     const labelsDate = financials.map((financeDate) => {
  //     return financeDate.date
  //   })
  // return labelsDate
  // }
  // function getDataProfit() {
  //     const dataProfit = financials.map((financeProfit) => {
  //     return financeProfit.grossProfit;
  //   });
  //   return dataProfit
  // }
  // function getDataExpenses() {
  //     const dataExpenses = financials.map((financeExpenses) => {
  //     return financeExpenses.costOfRevenue;
  //   });
  //   return dataExpenses
  // }
  // function getDataRevenue() {
  //     const dataRevenue = financials.map((financeRevenue) => {
  //     return financeRevenue.revenue;
  //   });
  //   return dataRevenue
  // }
  
  //   const barData = {
  //   labels: getLabelsDate(),
  //   datasets: [
  //     {
  //       label: "Profits",
  //       backgroundColor: "green",
  //       borderColor: "green",
  //       borderWidth: 1,
  //       hoverBackgroundColor: "rgba(255,99,132,0.4)",
  //       hoverBorderColor: "rgba(255,99,132,1)",
  //       data: getDataProfit(),
  //     },
  //     {
  //       label: "Expenses",
  //       backgroundColor: "orange",
  //       borderColor: "orange",
  //       borderWidth: 1,
  //       hoverBackgroundColor: "rgba(255,99,132,0.4)",
  //       hoverBorderColor: "rgba(255,99,132,1)",
  //       data: getDataExpenses(),
  //     },
  //     {
  //       label: "Revenue",
  //       backgroundColor: "red",
  //       borderColor: "red",
  //       borderWidth: 1,
  //       hoverBackgroundColor: "rgba(255,99,132,0.4)",
  //       hoverBorderColor: "rgba(255,99,132,1)",
  //       data: getDataRevenue(),
  //     },
  //   ],
  // }
  const barData = {
    labels: labelsDate,
    datasets: [
      {
        label: "Profits",
        backgroundColor: "green",
        borderColor: "green",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: dataProfit,
      },
      {
        label: "Expenses",
        backgroundColor: "orange",
        borderColor: "orange",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: dataExpenses,
      },
      {
        label: "Revenue",
        backgroundColor: "red",
        borderColor: "red",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: dataRevenue,
      },
    ],
  }
  //  Move to a config file?
  // const lineData = {
  //   labels: getLabelsDate(),
  //   datasets: [
  //     {
  //       label: "Profits",
  //       fill: false,
  //       lineTension: 0.1,
  //       backgroundColor: "rgba(75,192,192,0.4)",
  //       borderColor: "green",
  //       borderCapStyle: "butt",
  //       borderDash: [],
  //       borderDashOffset: 0.0,
  //       borderJoinStyle: "miter",
  //       pointBorderColor: "rgba(75,192,192,1)",
  //       pointBackgroundColor: "#fff",
  //       pointBorderWidth: 1,
  //       pointHoverRadius: 5,
  //       pointHoverBackgroundColor: "rgba(75,192,192,1)",
  //       pointHoverBorderColor: "rgba(220,220,220,1)",
  //       pointHoverBorderWidth: 2,
  //       pointRadius: 1,
  //       pointHitRadius: 10,
  //       data: getDataProfit(),
  //     },
  //     {
  //       label: "Expenses",
  //       fill: false,
  //       lineTension: 0.1,
  //       backgroundColor: "rgba(75,192,192,0.4)",
  //       borderColor: "orange",
  //       borderCapStyle: "butt",
  //       borderDash: [],
  //       borderDashOffset: 0.0,
  //       borderJoinStyle: "miter",
  //       pointBorderColor: "rgba(75,192,192,1)",
  //       pointBackgroundColor: "#fff",
  //       pointBorderWidth: 1,
  //       pointHoverRadius: 5,
  //       pointHoverBackgroundColor: "rgba(75,192,192,1)",
  //       pointHoverBorderColor: "rgba(220,220,220,1)",
  //       pointHoverBorderWidth: 2,
  //       pointRadius: 1,
  //       pointHitRadius: 10,
  //       data: getDataExpenses(),
  //     },
  //     {
  //       label: "Revenue",
  //       fill: false,
  //       lineTension: 0.1,
  //       backgroundColor: "rgba(75,192,192,0.4)",
  //       borderColor: "red",
  //       borderCapStyle: "butt",
  //       borderDash: [],
  //       borderDashOffset: 0.0,
  //       borderJoinStyle: "miter",
  //       pointBorderColor: "rgba(75,192,192,1)",
  //       pointBackgroundColor: "#fff",
  //       pointBorderWidth: 1,
  //       pointHoverRadius: 5,
  //       pointHoverBackgroundColor: "rgba(75,192,192,1)",
  //       pointHoverBorderColor: "rgba(220,220,220,1)",
  //       pointHoverBorderWidth: 2,
  //       pointRadius: 1,
  //       pointHitRadius: 10,
  //       data: getDataRevenue(),
  //     },
  //   ],
  // }
  const lineData = {
    labels: labelsDate,
    datasets: [
      {
        label: "Profits",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "green",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataProfit,
      },
      {
        label: "Expenses",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "orange",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataExpenses,
      },
      {
        label: "Revenue",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "red",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataRevenue,
      },
    ],
  }
  const options = {
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Amount (USD)",
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Quarterly Statements",
          },
        },
      ],
    },
  };

  return (
    <React.Fragment>
      <Navbar />
      <PageBanner
        pageTitle="Charts"
        breadcrumbTextOne="Explore"
        breadcrumbTextTwo={`${companyName}, Inc.`}
        breadcrumbUrl="/explore"
      />
      <div className="chart-container">
        <div className="charts-wrapper">
          <DropdownMenu />
          <div className="company-title">
            <h3>{companyName}, Inc. - Quarterly Statements 2017-2020</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col1">
          <Line data={lineData} options={options} />
        </div>
        <div className="col1">
          <Bar data={barData} options={options} />
        </div>
      </div>
      <Footer />
      <style jsx>
        {`
          .row {
            margin-right: 0px;
            margin-left: 0px;
          }
          .col1 {
            width: 50%;
            float: left;
          }
          .chart-wrapper {
            max-height: 75px;
          }
          .chart-container {
            max-height: 75px;
          }
          .row:after {
            content: "";
            display: table;
            clear: both;
          }
          .charts-wrapper {
            display: flex;
          }
          .company-title {
            text-align: center;
            margin: 0 auto;
          }
          @media screen and (max-width: 600px) {
            .col1 {
              width: 100%;
            }
          }
        `}
      </style>
    </React.Fragment>
  );
}

export default Company;
