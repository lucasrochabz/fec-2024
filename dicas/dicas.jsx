// Utilize um array para evitar repetição de código:

<nav className="menu">
  <ul>
    {[
      { to: '/', label: 'Home' },
      { to: '/jogadores', label: 'Jogadores' },
      { to: '/sobre', label: 'Sobre' },
    ].map(({ to, label }) => (
      <li key={to}>
        <Link to={to} className={pathname === to ? 'active' : ''}>
          {label}
        </Link>
      </li>
    ))}
  </ul>
</nav>

// ...
{[
  { to: '/', label: 'Home' },
  { to: '/jogadores', label: 'Jogadores' },
  { to: '/sobre', label: 'Sobre' },
].map(({ to, label }) => (
  <li key={to}>
    <Link to={to} className={pathname === to ? 'active' : ''}>
      {label}
    </Link>
  </li>
))}
// ...