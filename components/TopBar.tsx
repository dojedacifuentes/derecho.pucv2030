export default function TopBar() {
  return (
    <header className="top">
      <a className="brand" href="#top" aria-label="Inicio · Derecho PUCV 2030">
        <svg className="mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect x="3.5" y="3.5" width="25" height="25" rx="2" stroke="#5681ff" strokeWidth="1.2" opacity=".5" />
          <path
            d="M9 22V10M9 10h6.5a3.5 3.5 0 0 1 0 7H9M16 17l5 5"
            stroke="#eceef2"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="23" cy="10" r="1.6" fill="#5681ff" />
        </svg>
        <span className="t">
          DERECHO PUCV <b>2030</b>
        </span>
      </a>
      <span className="topright">Informe estratégico · Escuela de Derecho</span>
    </header>
  );
}
