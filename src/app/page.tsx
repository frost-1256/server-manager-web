"use client";
import Image from "next/image";
import 'bulma/css/bulma.css';
import { useEffect, useState } from "react"; // ← useEffect を明示的にインポーt
import axios from 'axios';

export default function Home() {
	const [data, setData] = useState<any>(null);
	const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("/api/get-all")
      .then((response) => setData(response.data))
      .catch((err) => setError("データ取得失敗: " + err.message));
  }, []);

  if (error) return <p>{error}</p>;
  if (!data) return <p>Loading...</p>;
   	return (
	  <section className="section">
	    <div className="container">
	      <h1 className="title">
	        Hello World
	      </h1>
	      <p className="subtitle">
	        My first website with <strong>Bulma</strong>!
	      </p>
	       <table className="table">
	        <thead>
        	  <tr>
	            <th>ID</th>
	            <th>Identifier Name</th>
	            <th>Device Type</th>
	            <th>Physical/Virtual Container</th>
	            <th>Operating System</th>
	            <th>IP Address</th>
	            <th>Management IP1</th>
	            <th>Management IP2</th>
	            <th>Management IP3</th>
	            <th>Notes</th>
	          </tr>
	        </thead>
	        <tbody>
	          {data.map((device: any) => (
	            <tr key={Number(device.id)}>
	              <td>{device.id}</td>
        	      <td>{device.identifier_name}</td>
	              <td>{device.device_type}</td>
	              <td>{device.physical_virtual_container}</td>
	              <td>{device.operating_system}</td>
	              <td>{device.ip_address}</td>
	              <td>{device.management_ip1}</td>
	              <td>{device.management_ip2 || "N/A"}</td>
	              <td>{device.management_ip3 || "N/A"}</td>
	              <td>{device.notes || "N/A"}</td>
        	    </tr>
	          ))}
	        </tbody>
	      </table>
	    </div>
	  </section>
  );
}
