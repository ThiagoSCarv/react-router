import { useParams } from "react-router";

export function Details() {
	const { id } = useParams();

	return (
		<div>
      <a href="/">Voltar</a>
			<h1>Detalhes</h1>

			<span>
				ID do Produto: <strong>{id}</strong>
			</span>
		</div>
	);
}
