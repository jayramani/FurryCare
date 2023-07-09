import React, { useEffect, useState, useContext } from 'react';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import furrycare from '../images/furrycare.svg';
import { DataContext } from '@/context/provider';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const admin = () => {
	const [data, setData] = useContext(DataContext);
	const [vets, setVets] = useState([]);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	let count = 0;

	const getVets = async () => {
		try {
			const response = await axios.get('http://localhost:3000/users');
			console.log(response.data);
			// setVets(response.data.users);
			filterVets(response.data.users);
		} catch (error) {
			console.log(error);
		}
	};

	const filterVets = (users) => {
		const filteredUsers = users.filter((user) => user.role === 'vet');
		setVets(filteredUsers);
	};

	const addVet = async () => {
		try {
			const response = await axios.post('http://localhost:3000/users/signup', {
				name: name,
				email: email,
				password: pass,
				role: 'vet',
			});
			console.log(response.data);
			count++;
			getVets();
		} catch (error) {
			console.log(error);
		}
		window.location.reload(false);
	};

	useEffect(() => {
		getVets();
	}, [count]);

	return (
		<div style={{ backgroundColour: '#F5F5F7', height: '100vh' }}>
			{' '}
			<Box
				sx={{
					width: '100%',
					height: '70px',
					backgroundColor: '#1976d2',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'start',
				}}
			>
				<Image
					style={{ marginLeft: '20px' }}
					src={furrycare}
					alt="Furry Care"
					width={150}
					height={150}
				/>
			</Box>
			<Box
				sx={{
					display: 'grid',
					gridTemplateRows: ' 15% 1fr',
					backgroundColor: '#f5f5f7',
					height: '100vh',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'Row',
						justifyContent: 'flex-start',
						alignItems: 'center',
						backgroundColor: 'white',
						borderRadius: '20px',
						width: '95vw',
						height: 'fit-content',
						marginTop: '30px',
						marginLeft: 'auto',
						marginRight: 'auto',
						boxShadow: '1px 2px 8px rgba(55, 84, 170, 0.16)',
					}}
				>
					<h2
						style={{
							marginLeft: '35px',
							marginRight: '200px',
						}}
					>
						Add New Vet to System
					</h2>
					<TextField
						onChange={(e) => setName(e.target.value)}
						id="outlined-basic"
						label="Name"
						variant="outlined"
						sx={{
							margin: '15px',
						}}
					/>{' '}
					<TextField
						onChange={(e) => setEmail(e.target.value)}
						id="outlined-basic"
						label="Email"
						variant="outlined"
						sx={{
							margin: '15px',
						}}
					/>{' '}
					<TextField
						onChange={(e) => setPass(e.target.value)}
						id="outlined-basic"
						label="Password"
						variant="outlined"
						sx={{
							margin: '15px',
						}}
					/>
					<Button
						onClick={addVet}
						variant="contained"
						sx={{
							margin: '25px',
						}}
					>
						Add Vet
					</Button>
				</Box>

				<Box sx={{}}>
					<h2
						style={{
							marginLeft: '15px',
						}}
					>
						List of Registered Vets
					</h2>
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: '1fr 1fr 1fr 1fr',
							gap: '15px',
							marginLeft: '10px',
							width: '100vw',
						}}
					>
						{vets.map((vet) => (
							<div
								style={{
									borderRadius: '15px',
									backgroundColor: 'white',
									padding: '20px',
									boxShadow: '1px 2px 8px rgba(55, 84, 170, 0.16)',
								}}
								key={vet._id}
							>
								<p>{vet.name}</p>
								<p>{vet.email}</p>
							</div>
						))}
					</div>
				</Box>
			</Box>
		</div>
	);
};

export default admin;
