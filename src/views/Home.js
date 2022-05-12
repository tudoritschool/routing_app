function Home() {
	return (
		<>
			<h1> PAGINA HOME </h1>
			<button
				onClick={() => {
					const object = {
						nume: "Ceva obiect",
						listaFructe: ["mere", "pere"],
					};
					localStorage.setItem("nume", JSON.stringify(object));
				}}>
				SALVEAZA DATE
			</button>
		</>
	);
}

export default Home;
