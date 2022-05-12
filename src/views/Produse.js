function Produse() {
	const object = JSON.parse(localStorage.getItem("nume"));
	// const [newObj, setNewObj] = useState(object)
	return <h1>PAGINA PRODUSE - {object.nume}</h1>;
}

export default Produse;
