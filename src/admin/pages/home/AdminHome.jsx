import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { adminUserRequest } from "../../../requestMethod";
import { useState,useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import FailedLogin from "../failedLogin/PageNotFound";
export default function AdminHome() {

  const [userStats,setUserStats]=useState([])
 

  const MONTHS = useMemo(
    ()=>[
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],[]
  )
 
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await adminUserRequest.get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch(err){}
    };
    getStats();
  }, [MONTHS]);
  


  return (

    
    <>
     <Topbar />
    <div className="container">
    <Sidebar />
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div> 
    </div>
    </>
  );
}
