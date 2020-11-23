import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import DropdownMenu from "../../../../components/Buttons/DropDown";
import { Router, useRouter } from "next/router";
// import Router from "next/router"


function Charts() {
  const router = useRouter();
  const { company, year } = router.query;
  // const router = useRouter();
  // const { company, year } = router.query;
  // const { company, year } = useRouter(query)
  console.log("year-index")
  console.log(company)
  console.log(year)

  const [financials, setFinancials] = useState([]);
  const [companyName, setCompanyName] = useState("");

//   function SortData(result) {
//     const nameResult = result.sort(function (a, b) {
//       let aa = a.date.split("-").join();
//       let bb = b.date.split("-").join();
//       return aa < bb ? -1 : aa > bb ? 1 : 0;
//   })
//   return nameResult
// }

// function CapitalizeName() {
//   let nameCapitalized = company.charAt(0).toUpperCase() + company.slice(1)
//   return nameCapitalized
// }
useEffect(() => {
  fetch(`https://bi-cube.herokuapp.com/${company}/${year}`)
    // fetch(`http://localhost:3001/${company}/${year}`)
    .then((response) => response.json())
    .then((result) => {
      let data = result.sort(function (a, b) {
        let aa = a.date.split("-").join(),
          bb = b.date.split("-").join();
        return aa < bb ? -1 : aa > bb ? 1 : 0;
      });
      setFinancials(data);
      let companyLetter = company.charAt(0).toUpperCase();
      setCompanyName(companyLetter + company.slice(1));
    });
});
  // useEffect(() => {
  //   // let isSubscribed = true
  //   fetch(`https://bi-cube.herokuapp.com/${company}/${year}`)
  //     // fetch(`http://localhost:3001/${company}/${year}`)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       // if (isSubscribed) {
  //         setFinancials(SortData(result)), 
  //         setCompanyName(CapitalizeName())
  //         // }
  //       })
  //     });
        //  .catch(error => (isSubscribed ? setError(error.toString()) : null));
        // return () => isSubscribed = false

  //       let data = result.sort(function (a, b) {
  //         let aa = a.date.split("-").join(),
  //           bb = b.date.split("-").join();
  //         return aa < bb ? -1 : aa > bb ? 1 : 0;
  //       })
  //       if (isSubscribed) {
  //       setFinancials(data);
  //       let companyLetter = company.charAt(0).toUpperCase();
  //       setCompanyName(companyLetter + company.slice(1));
  //       }
  //     })
  //     return () => isSubscribed = false
  // }, []);

  const labelsDate = financials.map((financeDate) => {
    return financeDate.date;
  });

  const dataRevenue = financials.map((financeRevenue) => {
    return financeRevenue.revenue;
  });

  const dataExpenses = financials.map((financeExpenses) => {
    return financeExpenses.costOfRevenue;
  });

  const dataProfit = financials.map((financeProfit) => {
    return financeProfit.grossProfit;
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
  // const barData = {
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
  // };
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
  // };

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
            <h3>
              {companyName}, Inc. - Quarterly Statements -{" "}
              {year == "2019" ? year + "-" + (Number(year) + 1) : year}
            </h3>
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

export default Charts;
