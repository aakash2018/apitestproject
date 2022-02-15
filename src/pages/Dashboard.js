import React from 'react';
import image1 from './../dashboard.jpg';
import { useNavigate } from 'react-router-dom';
function Dashboard() {
	const navigate = useNavigate();
	return (
		<>
			<div className="bg-primary" id="layoutAuthentication">
				<div id="layoutAuthentication_content">
					<main>
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-lg-7">
									<div className="card shadow-lg border-0 rounded-lg mt-5">
										<div className="card-body">
											<img src={image1} useMap="#image-map" />
											<map name="image-map">
												<area  title="img"  coords="611,256,4,3" shape="rect" onClick={() => navigate("/repo")} />
											</map>
										</div>
										<div className="card-footer">
											<p>Please Click On Welcome Or On Click Link.&nbsp;&nbsp;<u onClick={() => navigate("/repo")}>Click</u></p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	);
}

export default Dashboard;