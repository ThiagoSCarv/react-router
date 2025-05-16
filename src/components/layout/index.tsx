import "./styles.css";

import { Outlet } from "react-router";

export function Layout() {
	return (
		<div>
			<header className="user">
				<p>Olá, Thiago</p>
			</header>

			<Outlet />

			<footer>
				<span className="copyrights">Todos os direitos reservados</span>
			</footer>
		</div>
	);
}
