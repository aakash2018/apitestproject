import React, { useState, useEffect } from 'react';
import Sidebar from './../common/Sidebar';
import { Link } from "react-router-dom";
import { Table, Space } from 'antd';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
var fileDownload = require('js-file-download');
function Repository() {
	const [searchTerm, setSearchTerm] = useState("");
	const [datas, setData] = useState();
	const columns = [
		{
			title: "Full Name",
			dataIndex: "full_name",
			key: "full_name",
			sortDirections: ['descend'],
			sorter: (a, b) => a.full_name.length - b.full_name.length,
		},
		{
			title: 'Repo Name',
			dataIndex: 'name',
			key: 'name',
			render: text => <a>{text}</a>,
			sortDirections: ['descend'],
			sorter: (a, b) => a.name.length - b.name.length,
		},
		{
			title: 'Repo Url',
			dataIndex: 'url',
			key: 'url',
		}, 
		{
			title: 'Default Branch',
			dataIndex: 'branch',
			key: 'branch',
		}, ,
		{
			title: 'Action',
			key: 'action',
			render: (text, record) => (
				<Space size="middle">
					<button className='btn btn-warning btn-sm' onClick={()=>downloadFile(record)}>Download Readme</button>
				</Space>
			),
		},
	];

	var data = [];
	const gerUserInfo = async () => {
		try {
			let datas = "";
			if (searchTerm) {
				let url = `https://api.github.com/users/${searchTerm}/repos?per_page=100&page=1%22%202%3E/dev/null%20|%20jq%20-r%20%27.[]%20|%20.name`;
				await axios.get(url).then((res) => {
					res.data.forEach((element, index) => {
						datas = {
							key: index + 1,
							full_name: element.full_name,
							name: element.name,
							url: element.html_url,
							branch:element.default_branch,
						}
						data.push(datas);
					});
					setData(data);
				});
			} else {
				setData([])
			}
		} catch (error) {
			toast.error("Not Found");
			console.log(error);

		}
	};

	useEffect(() => {
		gerUserInfo();
	}, []);

	const resetInfo = () => {
		setSearchTerm("");
		setData([])
	}

	const downloadFile = async (record) =>{
		try {
				let url = `https://raw.githubusercontent.com/${record.full_name.split("/")[0]}/${record.full_name.split("/")[1]}/${record.branch}/README.md`;
				 await axios.get(url).then((res) => {
				console.log(res);
				fileDownload(res.data, `${record.full_name.split("/")[1]}_README.md`);
				});
		
		} catch (error) {
			toast.error("Not Found Readme file");
		}
	}
	return (
		<>
		<ToastContainer />
			<div id="layoutSidenav">
				<Sidebar />
				<div id="layoutSidenav_content">
					<main>
						<div className="container-fluid px-4">
							<h4 className="mt-4">Repository</h4>
							<ol className="breadcrumb mb-4">
								<li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
								<li className="breadcrumb-item active">Repository</li>
							</ol>
						</div>
						<div className="card mb-4">
							<div className="card-header">
								Search By UserName:&nbsp;<input type="text" type="search"
									placeholder="User's Id or emailId.."
									id="search"
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)} />&nbsp;
								<button className="btn btn-primary btn-sm" onClick={gerUserInfo}>Search</button>&nbsp;
								<button className="btn btn-secondary btn-sm" onClick={resetInfo}>Reset</button>
							</div>
							<div className="card-body">
								<Table columns={columns} dataSource={datas} scroll={{ x: 900, y: 250 }} />
							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	);
}

export default Repository;