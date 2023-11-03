import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
const Option = ({ table, toggleActive }) => {
	useEffect(() => {},[table])
	return (
		<>
			<div className="container p-5 border bg-dark text-white rounded text-center">
        <h1>Matte för minimonster</h1>
        <h3>Välj tabell här</h3>
				<Row >
					{table.slice(0, 5).map((element, index) => (
						<Col className={element.isActive ? "col p-2 m-2 rounded btn btn-success" : "col p-2 m-2 rounded btn btn-secondary"} key={index} onClick={() => toggleActive(element.value)}>{element.value}</Col>
					))}
				</Row>
				<Row>
					{table.slice(5, 10).map((element, index) => (
						<Col className={element.isActive ? "col p-2 m-2 rounded btn btn-success" : "col p-2 m-2 rounded btn btn-secondary"} key={index} onClick={() => toggleActive(element.value)}>{element.value}</Col>
					))}
				</Row>
			</div>
		</>
	)
}
export default Option;