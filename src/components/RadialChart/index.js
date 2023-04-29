import ReactApexChart from "react-apexcharts";
function RadialChart({ balance }) {
    const settings = {
        series: [44, 55, 67, 83],
        options: {
            chart: {
                height: 350,
                type: "radialBar",
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: "22px",
                        },
                        value: {
                            fontSize: "16px",
                        },
                        total: {
                            show: true,
                            label: "Total",
                            formatter: function (w) {
                                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                return balance;
                            },
                        },
                    },
                },
            },
            labels: [
                "Coming Soon",
                "Coming Soon",
                "Coming Soon",
                "Coming Soon",
            ],
        },
    };
    return (
        <div id="chart">
            <ReactApexChart
                options={settings.options}
                series={settings.series}
                type="radialBar"
                height={270}
            />
        </div>
    );
}

export default RadialChart;
