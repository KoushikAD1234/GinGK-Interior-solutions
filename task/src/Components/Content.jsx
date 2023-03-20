import React from "react";
import "./Content.css";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import ProgressBar from "react-progress-bar-plus";
import "react-progress-bar-plus/lib/progress-bar.css";
import { Pie } from "react-chartjs-2";
import Chart from "react-apexcharts";
import Horizontal from "./Horizontal";
import Dashboard from "./Dashboard";


function Content() {
  const head="Dashboard";
  return (
    <div className="content">
      <Horizontal head={head} />
      <div className="cards">
        <div className="card1">
          <div className="value">350K</div>
          <div className="text">
            <div className="text1">Total Revenue from Home Services</div>
            <AttachMoneyOutlinedIcon className="symbol" />
          </div>
        </div>
        <div className="card2">
          <div className="value">1.5K</div>
          <div className="text">
            <div className="text2">Rewards Points Redeemed</div>
            <BookOutlinedIcon className="symbol" />
          </div>
        </div>
        <div className="card3">
          <div className="value">1.2K</div>
          <div className="text">
            <div className="text2">Top Product/Service</div>
            <HeadsetMicOutlinedIcon className="symbol" />
          </div>
        </div>
        <div className="card4">
          <div className="value">50K</div>
          <div className="text">
            <div className="text2">New Users</div>
            <PeopleOutlinedIcon className="symbol" />
          </div>
        </div>
      </div>

      <div className="charts">
        <div className="chart1">
          <div className="chart_head">
            <div className="head1">Total Active Users</div>
            <div className="head2">01/03/23 10:20 AM</div>
          </div>
          <div className="pie">
            <Chart
              type="pie"
              width={360}
              height={1550}
              series={[0.1, 0.1, 0.2, 0.6]}
              options={{
                chart: {
                  offsetX: -80,
                  offsetY: -60,
                  marginLeft: 120,
                  marginRight: 900,
                },
                plotOptions: {
                  pie: {
                    offsetY: 60,
                    dataLabels: {
                      offset: -20,
                      style: {
                        fontSize: "8px",
                        // colors:['#4C9900', '#004C99', '#FF9933', '#66B2FF'],
                        // cssClass: 'apex-labels',
                      },
                    },
                  },
                },
                labels: ["Today", "Yesterday", "Tomorrow", "Last Month"],
              }}
            />
          </div>
          <div className="bar">
            <div className="bar_div">
              <div className="t1">
                <div className="e1">Today's Active Users</div>
                <div className="e0">0</div>
              </div>
              <progress className="progress1" value="100" max="100" />
            </div>
            <div className="bar_div">
            <div className="t1">
                <div className="e1">Yesterday's Active Users</div>
                <div className="e0">0</div>
              </div>
              <progress className="progress2" value="100" max="100" />
            </div>
            <div className="bar_div">
            <div className="t1">
                <div className="e1">Tomorrow's Active Users</div>
                <div className="e0">0</div>
              </div>
              <progress className="progress3" value="100" max="100" />
            </div>
            <div className="bar_div">
            <div className="t1">
                <div className="e1">Last Month's Active Users</div>
                <div className="e0">0</div>
              </div>
              <progress className="progress4" value="100" max="100" />
            </div>
          </div>
        </div>
        <div className="chart1">
          <div className="chart_head">
            <div className="head1">Total New Bookings</div>
            <div className="head2">01/03/23 10:20 AM</div>
          </div>
          <div className="pie">
            <Chart
              type="pie"
              width={360}
              height={1550}
              series={[0.1, 0.1, 0.2, 0.6]}
              options={{
                chart: {
                  offsetX: -80,
                  offsetY: -60,
                  marginLeft: 120,
                  marginRight: 900,
                },
                plotOptions: {
                  pie: {
                    offsetY: 60,
                    dataLabels: {
                      offset: -20,
                      style: {
                        fontSize: "8px",
                        // colors:['#4C9900', '#004C99', '#FF9933', '#66B2FF'],
                        // cssClass: 'apex-labels',
                      },
                    },
                  },
                },
                labels: ["Today", "Yesterday", "Tomorrow", "Last Month"],
              }}
            />
          </div>
          <div className="bar">
            <div className="bar_div">
              <div className="t1">
                <div className="e1">Today's New Bookings</div>
                <div className="e0">0</div>
              </div>
              <progress className="progress1" value="100" max="100" />
            </div>
            <div className="bar_div">
            <div className="t1">
                <div className="e1">Yesterday's New Bookings</div>
                <div className="e0">0</div>
              </div>
              <progress className="progress2" value="100" max="100" />
            </div>
            <div className="bar_div">
            <div className="t1">
                <div className="e1">Tomorrow's New Bookings</div>
                <div className="e0">0</div>
              </div>
              <progress className="progress3" value="100" max="100" />
            </div>
            <div className="bar_div">
            <div className="t1">
                <div className="e1">Last Month's New Bookings</div>
                <div className="e0">0</div>
              </div>
              <progress className="progress4" value="100" max="100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
